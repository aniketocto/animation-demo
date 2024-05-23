import React from "react";
import percent from "../assets/percent.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center relative max-md:top-[0.5rem]">
        <h2 className="text-xl font-thin text-center">
          Our Smart{" "}
          <span className="font-bold text-gray-800">EdTech Solutions</span>{" "}
          Which Meets All Your Needs
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly mt-10 mb-3">
        <div className="flex justify-center items-center flex-col p-4">
          <h4 className="text-gray-500 text-center">
            Boost Student <br /> Enrollment by
          </h4>
          <div className="flex items-center">
            <p className="text-3xl text-gray-600">25</p>
            <img src={percent} alt="percent" className="h-7 mt-1 ml-1" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <h4 className="text-gray-500 text-center">
            Enhance Fee <br /> Collection by
          </h4>
          <div className="flex items-center">
            <p className="text-3xl text-gray-600">30</p>
            <img src={percent} alt="percent" className="h-7 mt-1 ml-1" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <h4 className="text-gray-500 text-center">
            Elevate Faculty <br /> Efficiency by
          </h4>
          <div className="flex items-center">
            <p className="text-3xl text-gray-600">25</p>
            <img src={percent} alt="percent" className="h-7 mt-1 ml-1" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <h4 className="text-gray-500 text-center">
            Optimize <br /> Operations by
          </h4>
          <div className="flex items-center">
            <p className="text-3xl text-gray-600">40</p>
            <img src={percent} alt="percent" className="h-7 mt-1 ml-1" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <h4 className="text-gray-500 text-center">
            Amplify Student <br /> Satisfaction by
          </h4>
          <div className="flex items-center">
            <p className="text-3xl text-gray-600">50</p>
            <img src={percent} alt="percent" className="h-7 mt-1 ml-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
