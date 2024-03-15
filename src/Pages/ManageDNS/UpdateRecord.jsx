import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const UpdateRecord = () => {
  const axiosSecure = useAxiosSecure();
  const { _id, domain_name, record_type, record_value, ttl, description } =
    useLoaderData();
  // console.log(data);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const domainName = form.domainName.value;
    const recordType = form.recordType.value;
    const recordValue = form.recordValue.value;
    const ttl = form.ttl.value;
    const description = form.description.value;

    const isValidDomain = (domain) => {
      const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return domainRegex.test(domain);
    };

    if (!isValidDomain(domainName)) {
      return toast.error("Invalid Domain");
    }

    const record = {
      domain_name: domainName,
      record_type: recordType,
      record_value: recordValue,
      ttl: ttl,
      description: description,
    };
    // console.log(record);

    axiosSecure.put(`/single-record/${_id}`, record).then((data) => {
      if (data.data.modifiedCount > 0) {
        toast.success("Record Updated Successfully!");
        form.reset();
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl text-center">Update Record</h2>
      <div>
        <div className="hero">
          <div className="hero-content flex-col">
            <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleFormSubmit}>
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Domain Name</span>
                    </label>
                    <input
                      defaultValue={domain_name}
                      type="text"
                      placeholder="example.net"
                      className="input input-bordered"
                      name="domainName"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Time To Live</span>
                    </label>
                    <input
                      defaultValue={ttl}
                      type="number"
                      placeholder="3600"
                      className="input input-bordered"
                      name="ttl"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Record Type</span>
                    </label>
                    <input
                      defaultValue={record_type}
                      type="text"
                      placeholder="MX"
                      className="input input-bordered"
                      name="recordType"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Record Value</span>
                    </label>
                    <input
                      defaultValue={record_value}
                      type="text"
                      placeholder="198.51.100.2"
                      className="input input-bordered"
                      name="recordValue"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    defaultValue={description}
                    type="text"
                    placeholder="description"
                    className="input input-bordered pt-2 h-20"
                    name="description"
                    required
                  />
                </div>
                <input className="btn mt-2" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecord;
