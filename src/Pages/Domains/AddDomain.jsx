import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddDomain = () => {
  const axiosSecure = useAxiosSecure();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const domainName = form.domainName.value;
    const dnsProvider = form.dnsProvider.value;
    const subDomain = form.subDomain.value;
    const ownerMail = form.ownerMail.value;
    const ownerName = form.ownerName.value;
    const varification = form.varification.value;

    const isValidDomain = (domain) => {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(domain);
    };

    if(!isValidDomain(domainName)){
        return toast.error('Invalid Domain')
    }

    const domain = {
      domain_name: domainName,
      subdomain: subDomain,
      owner_email: ownerMail,
      owner_name: ownerName,
      dns_provider: dnsProvider,
      verification_method: varification,
    };
    // console.table(domain);

    axiosSecure.post("/domains", domain)
    .then((data) => {
        if(data.data?.insertedId){
            toast.success('Domain added successfully!')
            form.reset();
        }
    });
  };

  return (
    <div>
      <h2 className="text-xl text-center">Add New Domain</h2>
      <div className="hero mt-10">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleFormSubmit}>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Domain Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="example.com"
                    className="input input-bordered"
                    name="domainName"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">DNS Provider</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Novus"
                    className="input input-bordered"
                    name="dnsProvider"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subdomain</span>
                </label>
                <input
                  type="text"
                  placeholder="example.twitter.com"
                  className="input input-bordered"
                  name="subDomain"
                />
              </div>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Khan"
                    className="input input-bordered"
                    name="ownerName"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Mail</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@mail.com"
                    className="input input-bordered"
                    name="ownerMail"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Verification Methods</span>
                </label>
                <input
                  type="text"
                  placeholder="TXT"
                  className="input input-bordered"
                  name="varification"
                  required
                />
              </div>
              <input className="btn mt-2" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDomain;
