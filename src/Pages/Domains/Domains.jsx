import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Domains = () => {
  const axiosSecure = useAxiosSecure();
  const [searchDomain, setSearchDomain] = useState("");

  const { data: domains, isPending } = useQuery({
    queryKey: ["domains", searchDomain],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/domains?searchText=${searchDomain}`
      );
      return data;
    },
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchDomain(e.target.searchValue.value);
  };

  return (
    <div>
      {isPending && (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
        </div>
      )}

      {!isPending && (
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center md:px-10 md:py-5 w-full">
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

            <div>
              <Link to={"/domains/addDomain"}>
                <button className="btn btn-beutral">Add Domain</button>
              </Link>
            </div>
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Domain Name</th>
                <th>Sub Domain</th>
                <th>DNS Provider</th>
                <th>Owner Email</th>
                <th>Owner Name</th>
                <th>Varification Method</th>
              </tr>
            </thead>
            <tbody>
              {domains?.map((domain, idx) => (
                <tr key={domain?._id}>
                  <th>{idx + 1}</th>
                  <td>{domain?.domain_name}</td>
                  <td>{domain?.subdomain}</td>
                  <td>{domain?.dns_provider}</td>
                  <td>{domain?.owner_email}</td>
                  <td>{domain?.owner_name}</td>
                  <td>{domain?.verification_method}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {domains?.length < 1 && (
            <h1 className="text-2xl pt-4  text-center">Domain Not Found..</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Domains;
