import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import Jobcard from "../Components/Jobcard";

const LatestJobs = () => {
  const axiosInstance = useAxios();
  const [latestjobs, setLatestJobs] = useState([]);
  const [dataloading, setDataloading] = useState(true);
  useEffect(() => {
    setDataloading(true);
    axiosInstance
      .get("/latestJobs")
      .then((res) => {
        console.log("latest jobs", res.data);
        setLatestJobs(res.data);
      })
      .catch((err) => {
        console.log("something wet wrong ", err);
      })
      .finally(() => {
        setDataloading(false);
      });
  }, [axiosInstance]);

  if (dataloading) {
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
    <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto">
      {latestjobs.map((job) => (
        <Jobcard job={job}></Jobcard>
      ))}
    </div>
  );
};

export default LatestJobs;
