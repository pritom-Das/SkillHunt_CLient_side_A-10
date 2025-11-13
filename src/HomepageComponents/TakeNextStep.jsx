import React from "react";
import busimage from "../imges/business-3789889_1280.jpg";
import { NavLink } from "react-router";
import { IoCreateOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
222831;
const TakeNextStep = () => {
  return (
    <div className="grid grid-cols-2  bg-linear-to-r from-[#495466] to-[#414e61] ">
      <div className="flex  flex-col justify-center px-5 ">
        {" "}
        <h1 className="nunito-font font-medium text-4xl text-[#EEEEEE] text-shadow-2xs">
          Take the Next Step in Your Career
        </h1>
        <div className="grid grid-cols-2 space-x-5 mt-3.5">
          <NavLink
            to="/createjob"
            className="border border-[#75f0ec7b] rounded px-4 py-2 text-xl text-white flex justify-center items-center gap-x-2"
          >
            Create job
            <IoCreateOutline />
          </NavLink>
          <NavLink
            to="/alljobs"
            className="border border-[#75f0ec7b] rounded text-xl text-white py-2 flex justify-center items-center gap-x-2"
          >
            Find job
            <CiSearch />
          </NavLink>
        </div>
      </div>
      {/* img div */}
      <div className="">
        <img src={busimage} alt="" className="p-5  rounded-4xl" />
      </div>
    </div>
  );
};

export default TakeNextStep;
