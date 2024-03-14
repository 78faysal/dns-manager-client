import { Link } from "react-router-dom";

const ManageDNS = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center md:px-10 md:py-4">
          <div className=" border relative">
            <input className="input join-item rounded-l-md" placeholder="🔍 Search domains..." />
            {/* <button className="btn join-item border-0 bg-transparent absolute right-0">
              <BsSearch />
            </button> */}
          </div>

          <Link to={'/manageDns/addRecord'}>
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>Type</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>ljlasdjf</td>
              <td>active</td>
              <td>
                <button className="btn btn-sm mr-3">Edit</button>
                <button className="btn btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDNS;
