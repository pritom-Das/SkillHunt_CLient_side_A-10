import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Context/AuthContext";
import useSecureAxios from "../Hooks/useSecureAxios";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const jobModal = useRef(null);
  const axiosINstance = useAxios();
  const axiosSecure = useSecureAxios();
  const [job, setJob] = useState([]);
  const [dataLoading, setDataloading] = useState(true);
  const navigate = useNavigate();
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
    setDataloading(true);
    axiosINstance
      .get(`/jobs/${id}`)
      .then((res) => {
        // console.log("job from job details page", res.data);
        setJob(res.data);
      })
      .catch((err) => console.error("Faild to load data", err))
      .finally(() => setDataloading(false));
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

    axiosSecure.patch(`/jobs/${job._id}`, acceptedjob).then((res) => {
      setJob((prev) => ({
        ...prev,
        status: "accepted",
        acceptedBy_name: user.displayName,
        acceptedBy_email: user.email,
      }));

      console.log("accepted job is :", res.data);
    });
  };

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

  const handleopenModal = () => {
    jobModal.current.showModal();
  };

  const handlemodalCLose = () => {
    jobModal.current.close();
  };

  const handleUpdateJOb = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const jobType = form.jobType.value;
    const skillrequired = form.skillrequired.value;
    const Category = form.Category.value;
    const budget = form.budget.value;
    const duration = form.duration.value;
    const image = form.image.value;
    // console.log(title, description, budget, duration, image, skillrequired);

    const updatedJob = {
      title,
      description,
      Category,
      jobType,
      skillrequired,
      budget,
      duration,
      image,
    };
    const updatedFields = {};
    for (let key in updatedJob) {
      if (updatedJob[key] !== job[key]) {
        updatedFields[key] = updatedJob[key];
      }
    }
    console.log(updatedFields);

    if (Object.keys(updatedFields).length === 0) {
      jobModal.current.close();
      Swal.fire({
        text: "No chnages detected",
        icon: "question",
      });
      return;
    }

    axiosSecure.patch(`/jobs/${job._id}`, updatedFields).then((res) => {
      setJob((prev) => ({ ...prev, ...updatedFields }));
      console.log("accted job is :", res.data);
    });
    Swal.fire({
      title: "job updated",
      icon: "success",
      draggable: true,
    });
    jobModal.current.close();
  };

  const handleDeletejob = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/jobs/${job._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your job has been deleted.", "success").then(
              () => {
                navigate("/addedjobs");
              }
            );
          }
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className="bg-base-200 rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-3xl font-bold nunito-font">{title}</h1>
              {/* <p className="py-6">{description}</p> */}
              <div className="nunito-font text-[#60927e]">
                Requried Skills : {skillrequired}
              </div>
              <div className="nunito-font">
                <p>
                  {" "}
                  <span className="font-semibold">Job Type</span> :{jobType}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Duration</span> :{duration}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold"> Compensation</span> :{" "}
                  {budget}
                  $/h
                </p>
              </div>
              <div>
                {user.email === postedBy_email ? (
                  <div className="felx space-x-4">
                    <button
                      className="btn btn-outline btn-info"
                      onClick={handleopenModal}
                    >
                      Update information
                    </button>
                    <button
                      className="btn btn-outline btn-warning"
                      onClick={handleDeletejob}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-accent" onClick={handleAcceptJob}>
                    Accept this job
                  </button>
                )}
              </div>

              <hr className="my-2 border-gray-300" />
            </div>
            <div>
              <p>{description}</p>
            </div>
            {/* .... */}
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog
        id="my_modal_5"
        ref={jobModal}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box ">
          <div className="">
            <form onSubmit={handleUpdateJOb} className=" ">
              <div className="card-body">
                {" "}
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="title"
                  name="title"
                  defaultValue={title}
                />
                <label className="label">Description</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="description"
                  name="description"
                  defaultValue={description}
                />
                <label className="label">Category</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Category"
                  name="Category"
                  defaultValue={Category}
                />
                {/* ................. */}
                <label className="label">Job Type</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="jobType"
                      value="Fixed"
                      className="radio radio-xs"
                      defaultChecked={jobType === "Fixed"}
                    />
                    <span>Fixed</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="jobType"
                      value="Hourly"
                      className="radio radio-xs"
                      defaultChecked={jobType === "Hourly"}
                    />
                    <span>Hourly</span>
                  </label>
                </div>
              </div>

              {/* ............ */}
              <div className="card-body">
                <label className="label">Select required skills</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Required Skills "
                  name="skillrequired"
                  defaultValue={skillrequired}
                />
                <label className="label ">Budget</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Budget"
                  name="budget"
                  defaultValue={budget}
                />

                <label className="label">Duration</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Duration"
                  name="duration"
                  defaultValue={duration}
                />

                <label className="label">Cover Image</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Image URL"
                  name="image"
                  defaultValue={image}
                />
                <button className="btn btn-neutral mt-3">save changes</button>
              </div>
            </form>
            <div className="flex gap-x-5 justify-center">
              <button
                className="btn btn-neutral mt-3"
                onClick={handlemodalCLose}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
