import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const ManageDNS = () => {
  const axiosSecure = useAxiosSecure();
  const [searchDomain, setSearchDomain] = useState("");

  const {
    data: records,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["records", searchDomain],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/records?domain=${"all"}&&searchDomain=${searchDomain}`);
      return data;
    },
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchDomain(e.target.searchValue.value);
  };

  // console.log(searchDomain);

  const handleRecordDelete = (id) => {
    axiosSecure.delete(`/single-record/${id}`).then((data) => {
      if (data?.data?.deletedCount) {
        toast.success("Record Deleted");
        refetch();
      }
    });
  };

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
        <form
              className="join border relative"
              onSubmit={handleSearchSubmit}
            >
              <input
                // onChange={(e) => setSearchDomain(e.target.value)}
                className="input join-item rounded-l-md"
                placeholder="🔍 Search domains..."
                name="searchValue"
              />
            </form>

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
                  <Link to={`/manageDns/updateRecord/${record?._id}`}>
                    <button className="btn btn-sm mr-3">Edit</button>
                  </Link>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleRecordDelete(record?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {records?.length < 1 && (
            <h1 className="text-2xl pt-4  text-center">Domain Not Found..</h1>
          )}
      </div>
    </div>
  );
};

export default ManageDNS;
