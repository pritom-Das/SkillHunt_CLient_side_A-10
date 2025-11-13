import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, SIghoutAuser } = useContext(AuthContext);
  const link = (
    <>
      <li className="text-[#0e31297b] font-medium nunito-font">
        <NavLink>Home</NavLink>
      </li>

      <li className="text-[#0e31297b] font-medium nunito-font">
        <NavLink to="/alljobs">All Jobs</NavLink>
      </li>

      <li className="text-[#0e31297b] font-medium nunito-font">
        <NavLink to="/createjob">Create a job</NavLink>
      </li>
      <li className="text-[#0e31297b] font-medium nunito-font">
        <NavLink to="/addedjobs">My added jobs</NavLink>
      </li>
      <li className="text-[#0e31297b] font-medium nunito-font">
        <NavLink to="/myaccpetedjobs">My accepted Jobs</NavLink>
      </li>
    </>
  );

  const userSignOut = () => {
    SIghoutAuser();
  };
  return (
    <div className="">
      <div className="navbar bg-[#75f0ec7b] shadow-sm px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="  text-2xl text-[#016B61] montserrat-font font-bold">
            Skill Hunt
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" gap-5 menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <NavLink to="" onClick={userSignOut}>
              Logout
            </NavLink>
          ) : (
            <NavLink to="auth/login">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
