import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Context/AuthContext";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosINstance = useAxios();
  const [job, setJob] = useState([]);
  const {
    title,
    description,
    Category,
    jobType,
    skillrequired,
    budget,
    duration,
    image,
    status,
    postedBy_name,
    postedBy_email,
    postedBy_imgae,
    createdat,
  } = job;

  useEffect(() => {
    axiosINstance.get(`/jobs/${id}`).then((res) => {
      console.log("job from job details page", res.data);
      setJob(res.data);
    });
  }, [id]);

  const handleAcceptJob = () => {
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
      // setJob((previousJobs) => previousJobs.filter((j) => j._id !== job._id));
      console.log("accted job is :", res.data);
    });
  };
  return (
    <div>
      <div className="bg-base-200 min-h-screen border border-red-600">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            {/* <p className="py-6">{description}</p> */}
            <div>Requried Skills : {skillrequired}</div>
            <div>
              <p> Job Type :{jobType}</p>
              <p> Duration :{duration}</p>
              <p>Compensation : {budget}$/h</p>
            </div>
            <button onClick={handleAcceptJob} className="btn btn-primary">
              Accept job
            </button>
            <hr className="my-2 border-gray-300" />
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
