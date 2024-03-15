import { PiShareNetwork } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { LuNetwork } from "react-icons/lu";
import Chart from "react-google-charts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: statistics = [], isPending } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/statistics");
      return data;
    },
  });

  const { domains, records, users } = statistics;

  // console.log(statistics);

  const data = [
    ["Task", "Hours per Day"],
    ["Domains", domains],
    ["Users", users],
    ["DNS Records", records],
  ];

  const columnData = [
    ["Element", "Highest", { role: "style" }],
    ["Users", users, "red"], // RGB value
    ["DNS Records", records, "green"], // English color name
    ["Domains", domains, "blue"],
  ];

  //   const options = {
  //     title: "DNS Activities",
  //   };
  return (
    <div>
      {isPending && (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
        </div>
      )}

      {!isPending && (
        <div>
          <div className="flex justify-center my-5">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <PiShareNetwork className="text-3xl my-auto" />
                </div>
                <div className="stat-title">Domains</div>
                <div className="stat-value">{domains}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <BsPeople className="text-3xl" />
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">{users}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <LuNetwork className="text-3xl" />
                </div>
                <div className="stat-title">DNS Records</div>
                <div className="stat-value">{records}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Chart
              chartType="PieChart"
              data={data}
              //   options={options}
              width={"500px"}
              height={"400px"}
            />

            <Chart
              chartType="ColumnChart"
              width="400"
              height="400px"
              data={columnData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
