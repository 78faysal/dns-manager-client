import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageDNS = () => {
  const axiosSecure = useAxiosSecure();

  const { data: records, isPending } = useQuery({
    queryKey: ["records"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/records?domain=${"all"}`);
      return data;
    },
  });

  //   console.log(records);
  return (
    <div>
      {isPending && (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
        </div>
      )}
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center md:px-10 md:py-4">
          <div className=" border relative">
            <input
              className="input join-item rounded-l-md"
              placeholder="🔍 Search domain..."
            />
            {/* <button className="btn join-item border-0 bg-transparent absolute right-0">
              <BsSearch />
            </button> */}
          </div>

          <Link to={"/manageDns/addRecord"}>
            <button className="btn">Add Record</button>
          </Link>
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
              <th>Action</th>
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
                <td>
                  <Link to={`/manageDns/updateRecord/${record?._id}`}><button className="btn btn-sm mr-3">Edit</button></Link>
                  <button className="btn btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDNS;
