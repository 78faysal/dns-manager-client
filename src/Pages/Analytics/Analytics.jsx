import { PiShareNetwork } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { LuNetwork } from "react-icons/lu";
import Chart from "react-google-charts";

const Analytics = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Domains", 11],
    ["Users", 2],
    ["DNS Records", 7],
  ];

  const columnData = [
    ["Element", "Highest", { role: "style" }],
    ["Users", 2, "red"], // RGB value
    ["DNS Records", 7, "green"], // English color name
    ["Domains", 11, "blue"],
  ];

//   const options = {
//     title: "DNS Activities",
//   };
  return (
    <div>
      <div className="flex justify-center my-5">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <PiShareNetwork className="text-3xl my-auto" />
            </div>
            <div className="stat-title">Domains</div>
            <div className="stat-value">11</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsPeople className="text-3xl" />
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">07</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <LuNetwork />
            </div>
            <div className="stat-title">DNS Records</div>
            <div className="stat-value">02</div>
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
  );
};

export default Analytics;
