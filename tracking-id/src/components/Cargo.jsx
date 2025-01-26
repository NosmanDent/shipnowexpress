import React from "react";
import cargo from "../assets/cargo.jpg";

const DocumentParcel = () => {
  return (
    <section className="flex flex-col md:flex-row w-full  my-16 h-full md:relative ">
      <div className="w-full md:w-1/2 h-full ">
        <img
          src={cargo}
          alt="img"
          className=" object-cover w-full h-full md:pl-8 sm:mt-28 lg:mt-16 xl:mt-0"
        />
      </div>

      <div className=" flex flex-col w-full md:w-1/2 bg-white shadow-md shadow-black md:my-8 xl:absolute md:right-8 py-4 md:mr-8 lg:mr-8">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center md:text-start px-6 lg:px-8 xl:px-12">
          Cargo Shipping
        </h1>
        <h1 className="text-md md:text-xl lg:text-2xl font-extralight md:my-3 text-center md:text-start  px-6 lg:px-8 xl:px-12">
          Business Only
        </h1>
        <div className="font-bold bg-[#D21502] py-[1px] w-12 mb-4 px-8 md:px-12" />
        <p className="textsm md:text-xl xl:font-extralight text-center md:text-start  px-6 lg:px-8 xl:px-12">
          Discover shipping and logistics service options from DHL Global
          Forwarding.
        </p>

        <div className="bg-[#FDA50F] flex flex-col mt-4 px-6 lg:px-8 xl:px-12 py-4">
          <h1 className="font-extrabold mb-4 text-center md:text-start">
            Services Available
          </h1>
          <div className="flex flex-row w-full gap-2">
            <div className="flex flex-col w-full md:w-1/2 gap-2 ">
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-[#D21502] rounded-md p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <h1 className="text-xs md:text-sm">Air Freight</h1>
              </div>
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-[#D21502] rounded-md p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <h1 className="text-xs md:text-sm">Ocean Freight</h1>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2 ">
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-[#D21502] rounded-md p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <h1 className="text-xs md:text-sm">Road Freight</h1>
              </div>
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-[#D21502] rounded-md p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <h1 className="text-xs md:text-sm">Rail Freight...</h1>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#D21502] py-3 md:py-4 rounded-md hidden md:flex items-center justify-center mx-6 lg:mx-8 xl:mx-12 mt-4 font-extrabold text-white">
          Explore ShipNow Expresso
        </button>
      </div>
      <button className="bg-[#D21502] py-3 md:py-4 rounded-md flex md:hidden items-center justify-center mx-6 lg:mx-8 xl:mx-12 mt-4 font-extrabold text-white">
        Explore ShipNow Express
      </button>
    </section>
  );
};

export default DocumentParcel;
