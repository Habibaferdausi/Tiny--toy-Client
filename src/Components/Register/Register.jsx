import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  useEffect(() => {
    document.title = "TINY TOY | Register";
  }, []);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoURL.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        updateUser(result.user, name, photoUrl)
          .then(() => {
            // User update successful
          })
          .catch((err) => {
            console.log(err.message);
          })
          .finally(() => {
            Swal.fire("Successfully Registered");
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Something Wrong");
      });
  };

  return (
    <div>
      <div className="hero mb-10  bg-base-200">
        <div className="hero mt-20 ">
          <div>
            <h1 className="text-3xl text-center text-yellow-500 font-bold">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
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
                  pattern="(?=.*\d).{8,}"
                  title="Password must contain at least one number and be at least 8 characters long."
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter Only Url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 border border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-yellow-500 ms-3 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
