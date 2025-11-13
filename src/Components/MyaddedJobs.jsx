import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import Jobcard from "./Jobcard";
import useSecureAxios from "../Hooks/useSecureAxios";
import Swal from "sweetalert2";

const MyaddedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [dataLoading, setDataloading] = useState(true);

  const axiosSecure = useSecureAxios();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get("/myadded-jobs")
        .then((res) => {
          console.log("my added jobs", res.data);
          setJobs(res.data);
        })
        .catch((err) => console.error("Faild to load data", err))
        .finally(() => setDataloading(false));
    }
  }, [user?.email]);
  if (loading || dataLoading) {
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
  if (jobs.length == 0) {
    Swal.fire("You haven't created any job yet");
    return (
      <div>
        <p className="text-center text-3xl mt-8 noto-serif font-semibold">
          No Job Found
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="w-11/12 grid grid-cols-4 mt-8 mx-auto gap-5">
        {jobs?.map((job) => (
          <Jobcard job={job} key={job._id}></Jobcard>
        ))}
      </div>
    </div>
  );
};

export default MyaddedJobs;
