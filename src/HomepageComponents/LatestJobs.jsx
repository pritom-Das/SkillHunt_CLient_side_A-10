import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import Jobcard from "../Components/Jobcard";

const LatestJobs = () => {
  const axiosInstance = useAxios();
  const [latestjobs, setLatestJobs] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/latestJobs")
      .then((res) => {
        console.log("latest jobs", res.data);
        setLatestJobs(res.data);
      })
      .catch((err) => {
        console.log("something wet wrong ", err);
      });
  }, [axiosInstance]);
  return (
    <div className="grid grid-cols-4 space-x-4">
      {latestjobs.map((job) => (
        <Jobcard job={job}></Jobcard>
      ))}
    </div>
  );
};

export default LatestJobs;
