import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative">
      <div
        className={`navbar fixed top-0 z-20 w-full bg-transparent ${
          scroll ? "bg-white  " : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn text-purple-600 btn-ghost lg:hidden"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-100 rounded-box w-40"
            >
              <li>
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
              </li>
              <li>
                <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-orange-600  ms-4"
                      : "text-red-600  ms-4 font-semibold text-decoration-none "
                  }
                >
                  All Toys
                </NavLink>
              </li>

              <li>
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/myToys"
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-orange-600  ms-4"
                            : "text-red-600  ms-4 font-semibold text-decoration-none"
                        }
                      >
                        My Toys
                      </NavLink>
                    </li>
                    <NavLink
                      to="/addToy"
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-orange-600  ms-4"
                          : "text-red-600  ms-4 font-semibold text-decoration-none"
                      }
                    >
                      Add A Toy
                    </NavLink>
                  </>
                )}
                <li>
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
                </li>
                <li>
                  {user ? (
                    <NavLink className="pt-5 ms-3">
                      <NavLink className="pt-5">
                        <div
                          className="tooltip tooltip-bottom  "
                          data-tip={user.displayName}
                        >
                          <button className=" me-5 ">
                            {" "}
                            <img
                              src={user.photoURL}
                              alt="User Profile"
                              className="h-11 w-11 rounded-full text-center "
                            />
                          </button>
                        </div>
                      </NavLink>

                      <NavLink>
                        <button
                          className="btn btn-secondary text-white "
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </NavLink>
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-orange-600  ms-4"
                          : "text-red-600  ms-4 font-semibold text-decoration-none"
                      }
                    >
                      Login
                    </NavLink>
                  )}
                </li>
              </li>
            </ul>
          </div>

          <div className="lg:px-8 flex  justify-center items-center">
            {" "}
            <div className=" normal-case  rounded">
              <img
                src="https://i.ibb.co/8mS34pQ/Screenshot-1-removebg-preview.png"
                alt=""
                className="h-20 w-40"
              />
            </div>
            <div className="font-extrabold ">
              <p
                className="text-purple-600   text-lg lg:text-2xl"
                style={{ fontFamily: "Goodvibes, cursive" }}
              >
                TINY <span className="text-blue-400 ">TOYS</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex justify-between items-center ">
          <div className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-rose-600  ms-4"
                  : "text-purple-600  ms-4  text-decoration-none "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive
                  ? " text-rose-600  ms-4"
                  : "text-purple-600  ms-4  text-decoration-none "
              }
            >
              All Toys
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive
                      ? " text-rose-600  ms-4"
                      : "text-purple-600  ms-4  text-decoration-none "
                  }
                >
                  My Toys
                </NavLink>

                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive
                      ? " text-rose-600  ms-4"
                      : "text-purple-600  ms-4  text-decoration-none "
                  }
                >
                  Add A Toy
                </NavLink>
              </>
            )}

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? " text-rose-600  ms-4"
                  : "text-purple-600  ms-4  text-decoration-none "
              }
            >
              Blogs
            </NavLink>

            {user ? (
              <NavLink className="pt-5 ms-3">
                <NavLink className="pt-5">
                  <div
                    className="tooltip tooltip-bottom  text-rose-600 bg-white "
                    data-tip={user.displayName}
                  >
                    <button className=" me-5 ">
                      {" "}
                      <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="h-11 w-11 rounded-full text-center "
                      />
                    </button>
                  </div>
                </NavLink>

                <NavLink>
                  <button
                    className=" bg-yellow-500 text-white p-1 rounded hover:bg-rose-400 "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </NavLink>
              </NavLink>
            ) : (
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  isActive
                    ? " text-rose-600  ms-4"
                    : "text-purple-600  ms-4  text-decoration-none "
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
