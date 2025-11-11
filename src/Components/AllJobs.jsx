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
  if (loading) {
    return <p>loading..............</p>;
  }
  const handleAcceptJob = (job) => {
    if (job.postedBy_email === user?.email) {
      alert("you can't take this job");
      return;
    }

    const acceptedjob = {
      ...job,
      status: "accepted",
      acceptedBy_name: user.displayName,
      acceptedBy_email: user.email,
    };

    axiosINstance.patch(`/jobs/${job._id}`, acceptedjob).then((res) => {
      setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));
      console.log("accted job is :", res.data);
    });
  };
  // accepted jobs collection
  // axiosINstance.post("/acceptedjobs", acceptedjob).then((res) => {
  //   // setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));
  //   setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));

  //   console.log("accepted job", res.data);
  // });

  return (
    <div>
      {jobs.map((job) => (
        <li>
          {job.title} : <NavLink to={`/jobdetails/${job._id}`}>details</NavLink>{" "}
          {user.email !== job.postedBy_email ? (
            <span onClick={() => handleAcceptJob(job)}>Accept this job</span>
          ) : (
            <span>You can't take you own job</span>
          )}
        </li>
      ))}
    </div>
  );
};

export default AllJobs;
