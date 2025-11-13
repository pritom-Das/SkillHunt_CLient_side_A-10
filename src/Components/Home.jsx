import React from "react";
import Banner from "../HomepageComponents/Banner";
import { FaArrowRight } from "react-icons/fa6";
import PopularCtegories from "../HomepageComponents/PopularCtegories";
import LatestJobs from "../HomepageComponents/LatestJobs";

const Home = () => {
  return (
    <div>
      <Banner />

      <div>
        <LatestJobs />
      </div>
      <div className="p-4">
        <div>
          {" "}
          <div className="text-[#016B61] text-4xl font-semibold ">
            <p className="flex items-center"> Most Popluar Category</p>
          </div>
        </div>
        <PopularCtegories />
      </div>
    </div>
  );
};

export default Home;
