import React from "react";
import truck from "../assets/truck.jpg";
import cargo from "../assets/cargoship.jpg";
import { Link } from "react-router-dom";

const GreenShip = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 w-full h-full my-28 px-6 md:px-10 ">
      <div className=" w-full h-full flex flex-col gap-3 items-center md:items-start shadow-lg">
        <div className="w-full h-2/4">
          <img src={truck} alt="" className="object-cover w-full h-[55vh]" />
        </div>
        <div className="flex flex-col items-center md:items-start w-full h-2/4 p-6">
          <Link
            to=""
            className="hover:underline hover:text-[#D21502] text-[10px] xs:text-xs sm:text-sm text-md flex flex-row items-center gap-1 text-center md:text-start font-extrabold md:font-bold "
          >
            Green Logistics{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-5 hover:text-black text-[#D21502]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </Link>
          <h1 className="text-xs sm:text-sm md:text-md text-center md:text-start">
            Fusce volutpat ex massa, eget mattis mi condimentum sed. Donec
            tincidunt lacinia odio quis semper. Donec et risus erat. Duis sit
            amet ultricies lectus. Vestibulum at sagittis felis, ac ultrices
            nisl. Etiam a dignissim augue. Maecenas in lacinia ex, quis
            vulputate lacus. Nam hendrerit dolor in lorem dictum, vel aliquam
            velit blandit.
          </h1>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col gap-3 items-center md:items-start shadow-lg">
        <div className="w-full h-2/4">
          <img src={cargo} alt="" className="object-cover w-full h-[55vh]" />
        </div>
        <div className="flex flex-col items-center md:items-start w-full h-2/4 p-6">
          <Link
            to=""
            className="hover:underline hover:text-[#D21502] text-[10px] xs:text-xs sm:text-sm text-md flex flex-row items-center gap-1  font-extrabold md:font-bold"
          >
            ShipNow Global Connect Index{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-5 hover:text-black text-[#D21502]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </Link>
          <h1 className="text-xs sm:text-sm md:text-md text-center md:text-start">
            Fusce volutpat ex massa, eget mattis mi condimentum sed. Donec
            tincidunt lacinia odio quis semper. Donec et risus erat. Duis sit
            amet ultricies lectus. Vestibulum at sagittis felis, ac ultrices
            nisl. Etiam a dignissim augue. Maecenas in lacinia ex, quis
            vulputate lacus. Nam hendrerit dolor in lorem dictum, vel aliquam
            velit blandit.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default GreenShip;
