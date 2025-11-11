import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { FaArrowRight } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import bannerImage1 from "../assets/business-man-owner-company-office.jpg";
import bannerImage2 from "../assets/sanjeev-nagaraj-u4bvBOOpZB4-unsplash.jpg";
import bannerImage3 from "../assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg";

const images = [bannerImage1, bannerImage2, bannerImage3];

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Swiper for background images */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 h-full w-full z-0" // ensure behind everything
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center filter blur-[2px]"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Single overlay for all slides */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Fixed content on top */}
      <div className="absolute inset-0 flex items-center  z-20 px-12">
        <div>
          {" "}
          <h2 className="nunito-font font-medium text-6xl text-white text-shadow-2xs ">
            Discover talent, accept projects,
            <br />
            and achieve goals effortlessly.
          </h2>
          <div className="mt-3.5 flex gap-x-3.5">
            <button className="border border-[#75f0ec7b] px-4 py-2 text-white flex justify-center items-center gap-x-2 rounded ">
              Web devlopment{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="border border-[#75f0ec7b] px-4 py-2 text-white flex justify-center items-center gap-x-2 rounded ">
              App devlopment{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="border border-[#75f0ec7b] px-4 py-2 text-white flex justify-center items-center gap-x-2 rounded ">
              Video Editor
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="border border-[#75f0ec7b] px-4 py-2 text-white flex justify-center items-center gap-x-2 rounded ">
              Graphics Designer
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
