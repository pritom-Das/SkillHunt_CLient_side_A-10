import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import Jobcard from "./Jobcard";

const MyaddedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get(`/myadded-jobs?email=${user?.email}`).then((res) => {
      console.log("my added jobs", res.data);
      setJobs(res.data);
    });
  }, [user?.email]);
  return (
    <div>
      <div className="w-11/12 grid grid-cols-3 mt-8 mx-auto gap-5">
        {jobs.map((job) => (
          <Jobcard job={job} key={job._id}></Jobcard>
        ))}
      </div>
    </div>
  );
};

export default MyaddedJobs;
