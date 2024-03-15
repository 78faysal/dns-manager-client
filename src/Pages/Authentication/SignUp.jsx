import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return toast.error("Password Must have 6 characters");
    }

    const user = { name, email, password };

    // create user
    createUser(email, password).then((result) => {
      if (result.user) {
        axiosSecure.post("/users", user).then((data) => {
          if (data?.data?.insertedId) {
            toast.success("Account Created");
            navigate("/");
          }
        });
      }
    });
  };
  return (
    <div className=" bg-base-300 min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-xl text-center font-semibold">
          Sign Up New Account
        </h2>
        <div>
          <div className="hero">
            <div className="hero-content flex-col">
              <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Khan"
                      className="input input-bordered"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="input input-bordered"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered"
                        name="password"
                        required
                      />
                    </div>
                  </div>

                  <input className="btn mt-2" type="submit" value="Sign Up" />
                  <p className="text-gray-600 text-sm p-1">
                    Already have account?{" "}
                    <Link
                      className="text-black underline point-cursor"
                      to={"/signIn"}
                    >
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
