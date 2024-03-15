import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return toast.error("Password Must have 6 characters");
    }

    console.log(name, email);

    // create user
    signInUser(email, password).then((result) => {
      if (result.user) {
        toast.success("Logged In Successfully");
        navigate("/");
      }
    });
  };
  return (
    <div className=" bg-base-300 min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-xl text-center font-semibold">
          Sign In to your Account
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

                  <input className="btn mt-2" type="submit" value="Sign In" />
                  <p className="text-gray-600 text-sm p-1">
                    New Here?{" "}
                    <Link
                      className="text-black underline point-cursor"
                      to={"/signUp"}
                    >
                      Create Account
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

export default SignIn;
