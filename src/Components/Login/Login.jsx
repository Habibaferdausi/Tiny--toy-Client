import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        alert("Login Failed!");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login successful!");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero mb-10  bg-base-200">
        <div className="hero  mt-20">
          <div className="mt-20 pb-20">
            <h1 className="text-3xl text-center font-bold ">Login</h1>
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn hover:bg-red-500 border border-0 bg-yellow-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4  text-center">
              Haven't Any Account?
              <Link className="text-red-500 ms-4 font-bold" to="/register">
                Sign Up
              </Link>{" "}
            </p>
            <div className="divider">OR</div>

            <h2 className=" text-blue-400 text-center font-bold">
              Sign In With
            </h2>
            <div className="flex justify-center mt-4 items-center gap-5">
              <div>
                <button onClick={handleGoogle}>
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    alt=""
                    className="h-10 w-10"
                  />
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
