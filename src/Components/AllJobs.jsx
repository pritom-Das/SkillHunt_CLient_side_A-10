import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import { NavLink } from "react-router";
import Jobcard from "./Jobcard";

const AllJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosINstance = useAxios();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axiosINstance.get(`/jobs?email=${user?.email}`).then((res) => {
      setJobs(res.data);
      // console.log(res.data);
    });
  }, [user?.email]);
  if (loading || jobs == null) {
    return <p>loading..............</p>;
  }
  // const handleAcceptJob = (job) => {
  //   if (job.postedBy_email === user?.email) {
  //     alert("you can't take this job");
  //     return;
  //   }

  //   const acceptedjob = {
  //     ...job,
  //     status: "accepted",
  //     acceptedBy_name: user.displayName,
  //     acceptedBy_email: user.email,
  //   };

  //   axiosINstance.patch(`/jobs/${job._id}`, acceptedjob).then((res) => {
  //     setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));
  //     console.log("accted job is :", res.data);
  //   });
  // };
  // accepted jobs collection
  // axiosINstance.post("/acceptedjobs", acceptedjob).then((res) => {
  //   // setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));
  //   setJobs((previousJobs) => previousJobs.filter((j) => j._id !== job._id));

  //   console.log("accepted job", res.data);
  // });
  //  <li>
  //         {job.title} : <NavLink to={`/jobdetails/${job._id}`}>details</NavLink>{" "}
  //         {user.email !== job.postedBy_email ? (
  //           <span onClick={() => handleAcceptJob(job)}>Accept this job</span>
  //         ) : (
  //           <span>You can't take you own job</span>
  //         )}
  //       </li>

  return (
    <div className="w-11/12 grid grid-cols-3 mt-8 mx-auto gap-5">
      {jobs.map((job) => (
        <Jobcard job={job} key={job._id}></Jobcard>
      ))}
    </div>
  );
};

export default AllJobs;
