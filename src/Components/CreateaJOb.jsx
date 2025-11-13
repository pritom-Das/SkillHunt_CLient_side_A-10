import React, { useContext, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreateaJOb = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const handleCreateJOb = (e) => {
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
    // console.log(title, description, budget, duration, image, skillRequired);

    const newJOb = {
      title,
      description,
      Category,
      jobType,
      skillrequired,
      budget,
      duration,
      image,
      status: "pending",
      postedBy_imgae: user.photoURL,
      postedBy_name: user.displayName,
      postedBy_email: user.email,
      createdat: new Date(),
    };

    axiosInstance.post("/jobs", newJOb).then((res) => {
      // console.log(res.data);
    });
    Swal.fire({
      title: "Job Created",
      icon: "success",
      draggable: true,
    });
    navigate("/addedjobs");
  };

  return (
    <div className="card bg-base-100  w-7/12  mx-auto mt-8 shadow-2xl border border-gray-300">
      <div className="card-body">
        <form onSubmit={handleCreateJOb} className="fieldset flex">
          <div className="card-body">
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full"
              placeholder="title"
              name="title"
              required
            />

            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="description"
              name="description"
              required
            />
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Category"
              name="Category"
              required
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
                />
                <span>Fixed</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  value="Hourly"
                  className="radio radio-xs"
                />
                <span>Hourly</span>
              </label>
            </div>

            {/* ............ */}

            <label className="label">Select required skills</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Required Skills "
              name="skillrequired"
              required
            />
          </div>
          <div className="card-body">
            <label className="label mt-4">Budget</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Budget"
              name="budget"
              required
            />

            <label className="label">Duration</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Duration"
              name="duration"
              required
            />

            <label className="label">Cover Image</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Image URL"
              name="image"
              required
            />
            <button className="btn btn-neutral mt-4">Create job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateaJOb;
