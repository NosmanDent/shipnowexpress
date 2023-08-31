import React, { useState } from "react";
import TrackingPage from "./TrackingPage";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className=" relative inline-block w-full">
      <img
        src={hero}
        alt=""
        className="object-cover bg-fixed h-[90vh] w-full"
      />
      <div className="w-full absolute top-0 left-0 flex flex-col flex-1 items-center px-4 xs:px-10 md:px-20 justify-center h-[90vh]">
        <div className="bg-black/60 py-8 md:py-10 w-full md:px-10 px-4 xs:px-6 flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white whitespace-nowrap">
            Track Your Shipment
          </h1>
          <div className="w-full bg-white py-2 px-4">
            <TrackingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
