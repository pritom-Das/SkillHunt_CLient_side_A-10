import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import { NavLink } from "react-router";

const AllJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosINstance = useAxios();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axiosINstance.get("/jobs").then((res) => {
      setJobs(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <li>
          {job.title} : <NavLink to={`/jobdetails/${job._id}`}>details</NavLink>
        </li>
      ))}
    </div>
  );
};

export default AllJobs;
