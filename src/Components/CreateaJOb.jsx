import React, { useContext, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Context/AuthContext";

const CreateaJOb = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

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
      postedBy_name: user.displayName,
      postedBy_email: user.email,
      createdat: new Date(),
    };

    axiosInstance.post("/jobs", newJOb).then((res) => {
      // console.log(res.data);
    });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleCreateJOb} className="fieldset">
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            placeholder="title"
            name="title"
          />

          <label className="label">Description</label>
          <input
            type="text"
            className="input"
            placeholder="description"
            name="description"
          />
          <label className="label">Category</label>
          <input
            type="text"
            className="input"
            placeholder="Category"
            name="Category"
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
                required
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
            className="input"
            placeholder="Required Skills "
            name="skillrequired"
          />
          <label className="label mt-4">Budget</label>
          <input
            type="text"
            className="input"
            placeholder="Budget"
            name="budget"
          />

          <label className="label">Duration</label>
          <input
            type="text"
            className="input"
            placeholder="Duration"
            name="duration"
          />

          <label className="label">Cover Image</label>
          <input
            type="text"
            className="input"
            placeholder="Image URL"
            name="image"
          />

          <button className="btn btn-neutral mt-4">Create job</button>
        </form>
      </div>
    </div>
  );
};

export default CreateaJOb;
