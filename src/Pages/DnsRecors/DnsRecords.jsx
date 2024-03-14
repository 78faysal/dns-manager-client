const DnsRecords = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="text-lg w-24 text-center py-1 rounded-md">
          <select name="" className="px-2">
            <option value="" aria-readonly>Filter</option>
            <option value="">value</option>
            <option value="">value</option>
            <option value="">value</option>
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

export default DnsRecords;
