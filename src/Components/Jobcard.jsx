import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";

const Jobcard = ({ job }) => {
  //   console.log(job);
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

  const shortDescription =
    description.length > 60 ? description.slice(0, 60) + "..." : description;
  const jobcreatedAt = new Date(createdat);
  const formattedDate = jobcreatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div>
      <div className=" bg-base-200 w-80 shadow-sm rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
        <div>
          <figure className="px-2.5 py-1.5  rounded-sm ">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>
        </div>
        <hr className="my-2 border-gray-300" />

        <div className="px-2.5">
          <div className="flex justify-between mt-1.5">
            <p className="flex gap-2">
              <img src={postedBy_imgae} alt="" className="h-6 rounded-3xl" />
              <span className="nunito-font">{postedBy_name}</span>
            </p>
            <p>{formattedDate}</p>
          </div>
          <h2 className=" mt-1.5 nunito-font font-medium  text-xl  ">
            {title}
          </h2>
          <p className="nunito-font text-sm text-[#071d187b]">
            {shortDescription}
          </p>

          <p className="mt-1 nunito-font text-sm">
            {" "}
            Job Type : {jobType ? jobType : " "}
          </p>
          <div className="flex justify-between mt-1">
            <p className="nunito-font text-sm"> Compensation : {budget}$/h</p>
            <NavLink
              to={`/jobdetails/${job._id}`}
              className="flex items-center justify-center gap-2 text-sm nunito-font"
            >
              view details{" "}
              <span>
                <FaArrowRight />
              </span>{" "}
            </NavLink>
          </div>

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
