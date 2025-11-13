import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Hooks/useAxios";
import useSecureAxios from "../Hooks/useSecureAxios";
import Swal from "sweetalert2";

const MyaccpetedJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [acceptedjobs, setAcceptedjobs] = useState([]);
  const [dataLoading, setDataloading] = useState(true);
  const axiosINstance = useAxios();
  const axiosSecure = useSecureAxios();

  useEffect(() => {
    if (!user?.email) {
      console.log("user is not set yet");
      return;
    }
    // .get(`/acceptedjobs?email=${user.email}`)
    setDataloading(true);

    axiosSecure
      .get(`/acceptedjobs?email=${user.email}`)
      .then((res) => {
        console.log("amy accpted jobs", res.data);
        setAcceptedjobs(res.data);
      })
      .catch((err) => console.error("Error fetching accepted jobs:", err))
      .finally(() => setDataloading(false));
  }, [user?.email]);
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
  } = acceptedjobs;

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

  // const jobcreatedAt = new Date(createdat);
  // const formattedDate = jobcreatedAt.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  // const shortDescription =
  //   description.length > 60 ? description.slice(0, 60) + "..." : description;
  // if (acceptedjobs.length == 0) {
  //   return <p>you didn't accepted any job yet</p>;
  // }
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
  if (acceptedjobs.length == 0) {
    Swal.fire("You didn't accept any job");
    return (
      <div>
        {" "}
        <p className="text-center text-3xl mt-8 noto-serif font-semibold">
          No Job Found
        </p>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto mt-8  flex flex-col gap-9">
      {acceptedjobs.map((job) => (
        <div className="bg-base-200 shadow-xl rounded-xl">
          <div className=" flex flex-col  lg:flex-row  space-x-7 nunito-font ">
            {" "}
            <div>
              <img
                src={job.image}
                alt=""
                className="h-50 w-64 rounded-2xl py-2"
              />
            </div>
            <div>
              <div>
                <p>Job post By : {job.postedBy_name}</p>
                <p>Email : {job.postedBy_email}</p>
              </div>
              <p>Title : {job.title}</p>
              <p> Required SKills : {job.skillrequired}</p>
              <p> Compensation : {job.budget}$/h</p>
              <p>Duration : {job.duration}</p>
              <div className="flex gap-2">
                <button
                  className="btn btn-outline btn-accent"
                  onClick={() => {
                    handleCompleteJOb(job);
                  }}
                >
                  Complete
                </button>
                <button
                  className="btn  btn-outline  btn-warning "
                  onClick={() => handleCanclejob(job)}
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-300" />

          <div className="nunito-font">job description : {job.description}</div>
        </div>
      ))}
    </div>
  );
};

export default MyaccpetedJobs;
