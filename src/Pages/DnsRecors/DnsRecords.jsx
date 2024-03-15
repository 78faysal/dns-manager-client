import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const DnsRecords = () => {
  const axiosSecure = useAxiosSecure();
  const [filterValue, setFilterValue] = useState("all");
  const { data: records, isPending } = useQuery({
    queryKey: ["records", filterValue],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/records?domain=${filterValue}`);
      return data;
    },
  });

  // console.log(filterValue);

  return (
    <div>
      {isPending && (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
        </div>
      )}
      {!isPending && (
        <div className="overflow-x-auto py-5">
          <div className="text-lg w-24 text-center py-1 rounded-md">
            <select
              name=""
              className="px-2"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="all">
                Filter
              </option>
              <option value=".com">.com</option>
              <option value=".org">.org</option>
              <option value=".net">.net</option>
            </select>
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Domain Name</th>
                <th>Record Type</th>
                <th>Record Value</th>
                <th>TTL</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {records?.map((record, idx) => (
                <tr key={record?._id}>
                  <th>{idx + 1}</th>
                  <td>{record?.domain_name}</td>
                  <td>{record?.record_type}</td>
                  <td>{record?.record_value}</td>
                  <td>{record?.ttl}</td>
                  <td>{record?.description.slice(0, 8)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
          {records?.length < 1 && (
            <h1 className="text-2xl pt-4  text-center">Not Available...</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default DnsRecords;
