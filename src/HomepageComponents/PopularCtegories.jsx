import React from "react";
import webdeveloper from "../assets/website-development.jpg";
import cyber_security from "../assets/cyber_security.jpg";
import graphicsDesigner from "../assets/graphics_design.jpg";
import machineLearning from "../assets/machine_learning.jpg";
import appdevelopment from "../assets/app-development.jpg";

const categories = [
  { name: "Web Development", image: webdeveloper },
  { name: "App Development", image: appdevelopment },
  { name: "Cyber Security", image: cyber_security },
  { name: "Graphics Design", image: graphicsDesigner },
];

const PopularCategories = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-48 w-full overflow-hidden rounded-lg"
        >
          {/* Background Image with Blur */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-[1px] scale-110"
            style={{ backgroundImage: `url(${category.image})` }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          {/* Content */}
          <div className=" nunito-font relative z-20 text-2xl  px-3.5 flex items-center justify-center h-full w-full text-white font-bold">
            <div className="border border-[#75f0ec7b] rounded px-4 py-2">
              {" "}
              {category.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCategories;
