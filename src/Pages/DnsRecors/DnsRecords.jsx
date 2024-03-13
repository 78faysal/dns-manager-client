const DnsRecords = () => {
  return (
    <div>
      <div className="overflow-x-auto">
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
