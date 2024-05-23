import React, { useState, useEffect } from "react";
import arrow from "../assets/arrowright.svg";
import arrowcircleright from "../assets/arrowcircleright.svg";
import admin from "../assets/admin.jpg";
import "../index.css";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      {/* Left Side */}
      <div className="p-4 lg:p-8">
        <h3 className="font-thin text-xl lg:text-2xl">
          Our Smart{" "}
          <span className="text-red-800 font-bold">EdTech Solution</span> Will
        </h3>
        <h1 className="text-4xl lg:text-6xl mt-2">
          Elevate your Growth <br /> on Every Front
        </h1>
        <h3 className="text-sm lg:text-[20px] mt-3 font-thin">
          Transform education, foster collaboration, and make informed decisions{" "}
          <br /> with our solutions. Empowering management, inspiring teachers,
          and <br /> enriching the learning journey for all is our core focus.
        </h3>
        <div className="flex items-center gap-2">
          <button className="text-white px-3 mt-3 bg-red-900 rounded-md">
            Learn more
          </button>
          <div className="bg-red-900 rounded-md mt-3">
            <img src={arrow} alt="arrow" className="h-6" />
          </div>
        </div>

        {/* 3 Boxes here */}
        <div className="flex flex-col lg:flex-row gap-5 mt-5">
          <div
            className={`bg-admin bg-cover bg-center rounded-2xl w-full lg:w-[150px] h-[150px] mt-5 lg:mt-[200px] ${
              activeIndex === 0 ? "fade-in-out" : ""
            }`}
          >
            <h3 className="p-2 text-xl text-black font-bold z-10">
              ADMIN & FINANCE TEAM
            </h3>
          </div>
          <div
            className={`bg-management bg-cover bg-center rounded-2xl w-full lg:w-[250px] h-[250px] mt-5 lg:mt-[100px] ${
              activeIndex === 1 ? "fade-in-out" : ""
            }`}
          >
            <h3 className="p-2 text-black font-bold text-xl">
              Management & Organization
            </h3>
          </div>
          <div
            className={`bg-students bg-cover bg-center rounded-2xl w-full lg:w-[350px] h-[350px] mt-5 lg:mt-0 ${
              activeIndex === 2 ? "fade-in-out" : ""
            }`}
          >
            <h3 className="p-2 text-black font-bold text-xl">Students & Parents</h3>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="p-4 lg:p-10">
        <div className="flex flex-col">
          {/* 4th box is here */}
          <div
            className={`bg-teachers bg-cover bg-center rounded-2xl w-full lg:w-[585px] h-[400px] lg:h-[750px] relative lg:bottom-[89px] lg:left-[17px] text-white ${
              activeIndex === 3 ? "fade-in-out" : ""
            }`}
          >
            <div className="absolute bottom-0 lg:top-96 bg-black bg-opacity-50 w-full lg:w-[585px] rounded-3xl h-[200px] lg:h-[365px]">
              <h3 className="p-2 text-white text-xl">Teachers & Staff</h3>
            </div>
          </div>
          <div className="z-10 bg-white p-2 lg:bottom-[2px] lg:right-[23px] absolute rounded-md">
            <button className="w-full lg:w-42 p-1 text-white bg-red-900 rounded-md border-2 border-white">
              <div className="flex flex-row gap-2">
                BOOK FREE DEMO{" "}
                <img
                  src={arrowcircleright}
                  alt="arrow"
                  className="h-5 bg-white rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
