import React from "react";
import Banner from "../HomepageComponents/Banner";
import { FaArrowRight } from "react-icons/fa6";
import PopularCtegories from "../HomepageComponents/PopularCtegories";
import LatestJobs from "../HomepageComponents/LatestJobs";
import Footer from "./Footer";
import TakeNextStep from "../HomepageComponents/TakeNextStep";

const Home = () => {
  return (
    <div>
      <Banner />

      <div>
        <div className="text-[#016B61] text-4xl font-semibold w-11/12 mx-auto mt-14 ">
          {" "}
          <p className="flex items-center">Latest jobs</p>
        </div>
        <LatestJobs />
      </div>
      <div className="p-4 mt-14">
        <div>
          {" "}
          <div className="text-[#016B61] text-4xl font-semibold w-11/12 mx-auto ">
            <p className="flex items-center"> Most Popluar Category</p>
          </div>
        </div>
        <PopularCtegories />
      </div>
      <div className="w-9/12 mx-auto shadow-2xl   mt-14 rounded-2xl ">
        <TakeNextStep />
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
