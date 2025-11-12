import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";

const MyaccpetedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [acceptedjobs, setAcceptedjobs] = useState([]);
  const axiosINstance = useAxios();
  //   if (loading) {
  //     return <p>loading</p>;
  //   }
  useEffect(() => {
    if (!user?.email) {
      return <p>Loading.........</p>;
    }
    axiosINstance.get(`/acceptedjobs?email=${user?.email}`).then((res) => {
      console.log("my accted jobs", res.data);
      setAcceptedjobs(res.data);
    });
  }, []);

  const handleCompleteJOb = (job) => {
    if (user.email === job.acceptedBy_email) {
      console.log(user.email);
      const completejob = {
        status: "completed",
      };

      axiosINstance
        .patch(`/acceptedjobs/${job._id}`, completejob)
        .then((res) => {
          setAcceptedjobs((preAccJobs) =>
            preAccJobs.filter((j) => j._id !== job._id)
          );
        });
    }
  };

  const handleCanclejob = (job) => {
    if (user.email === job.acceptedBy_email) {
      console.log(user.email);
      const cancelledJOb = {
        status: "pending",
      };

      axiosINstance
        .patch(`/acceptedjobs/${job._id}`, cancelledJOb)
        .then((res) => {
          setAcceptedjobs((preAccJobs) =>
            preAccJobs.filter((j) => j._id !== job._id)
          );
        });
    }
  };
  return (
    <div>
      {acceptedjobs.map((job) => (
        <li>
          <span>{job.title}</span>{" "}
          <span
            onClick={() => handleCompleteJOb(job)}
            className="border border-amber-300"
          >
            Complete
          </span>{" "}
          <span
            onClick={() => handleCanclejob(job)}
            className="border border-amber-300"
          >
            Cancle{" "}
          </span>
        </li>
      ))}
    </div>
  );
};

export default MyaccpetedJobs;
