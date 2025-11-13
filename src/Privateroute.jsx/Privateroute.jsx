import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, NavLink, useLocation } from "react-router";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log("user location : ", location);

  if (loading) {
    return (
      <div className="text-center ">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

export default Privateroute;
