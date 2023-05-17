import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`navbar fixed top-0 z-20 w-full bg-transparent ${
          scroll
            ? "bg-transparent bg-gradient-to-l   from-transparent to-black  "
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn text-yellow-500 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-100 rounded-box w-40"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white  ms-4"
                      : "text-yellow-500  ms-4 font-semibold text-decoration-none "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold  text-white ms-4"
                      : "text-yellow-500  ms-4 font-semibold text-decoration-none "
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold  text-white ms-4"
                      : "text-yellow-500 ms-4 font-semibold text-decoration-none "
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? " text-black font-semibold   ms-4"
                      : " text-yellow-500   ms-4 font-semibold text-decoration-none "
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:px-8 flex">
            {" "}
            <a className="btn btn-ghost normal-case  rounded">
              <img
                src="https://i.ibb.co/Jxwf43K/logo-removebg-preview.png"
                alt=""
                className="h-40 w-40"
              />
            </a>
          </div>
        </div>
        <div className=" hidden lg:flex justify-between items-center ">
          <div className="text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-orange-600  ms-4"
                  : "text-red-600  ms-4 font-semibold text-decoration-none "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-orange-600  ms-4"
                  : "text-red-600  ms-4 font-semibold text-decoration-none "
              }
            >
              All Toys
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-orange-600  ms-4"
                  : "text-red-600  ms-4 font-semibold text-decoration-none "
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-orange-600  ms-4"
                  : "text-red-600  ms-4 font-semibold text-decoration-none "
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
