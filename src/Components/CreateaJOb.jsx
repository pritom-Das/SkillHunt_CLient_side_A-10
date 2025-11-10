import React, { useContext, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Context/AuthContext";

const CreateaJOb = () => {
  const { user } = useContext(AuthContext);
  const [skillRequired, setSkillRequired] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const axiosInstance = useAxios();

  const skillsList = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Photoshop",
    "Video Editing",
  ];

  const toggleSkill = (skill) => {
    setSkillRequired((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  const handleCreateJOb = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const budget = form.budget.value;
    const duration = form.duration.value;
    const image = form.image.value;
    // console.log(title, description, budget, duration, image, skillRequired);

    const newJOb = {
      title,
      description,
      skillRequired,
      budget,
      duration,
      image,
      postedBy_name: user.displayName,
      postedBy_email: user.email,
      createdat: new Date(),
    };

    axiosInstance.post("/jobs", newJOb).then((res) => console.log(res.data));
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

          <label className="label">Select required skills</label>

          {/* Dropdown button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="input"
            >
              {skillRequired.length > 0
                ? skillRequired.join(", ")
                : "Select skills"}
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 bg-white border rounded w-full mt-1 shadow">
                {skillsList.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={skillRequired.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                      className="mr-2"
                    />
                    {skill}
                  </label>
                ))}
              </div>
            )}
          </div>

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
