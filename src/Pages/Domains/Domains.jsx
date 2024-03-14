import { BsSearch } from "react-icons/bs";


const Domains = () => {
  return (
    <div>
      
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center md:px-10 md:py-5 w-full">
          <div className="join border relative">
            <input
              className="input  join-item "
              placeholder="Search domains"
            />
            <button className="btn join-item bg-transparent absolute right-0"><BsSearch /></button>
          </div>

          <div>
            <button className="btn btn-beutral">Add Domain</button>
          </div>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Domains;
