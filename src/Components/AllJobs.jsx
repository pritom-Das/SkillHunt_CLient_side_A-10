import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import { NavLink } from "react-router";
import Jobcard from "./Jobcard";

const AllJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosINstance = useAxios();
  const [jobs, setJobs] = useState([]);
  const [dataLoading, setDataloading] = useState(true);
  useEffect(() => {
    axiosINstance
      .get(`/jobs?email=${user?.email}`)
      .then((res) => {
        setJobs(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.loge("Faild to load data", err);
      })
      .finally(() => setDataloading(false));
  }, [user?.email]);

  if (dataLoading || loading) {
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

  return (
    <div className="w-11/12 grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 mt-8 mx-auto ">
      {jobs.map((job) => (
        <Jobcard job={job} key={job._id}></Jobcard>
      ))}
    </div>
  );
};

export default AllJobs;
