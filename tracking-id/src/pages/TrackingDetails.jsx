import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TrackingPage from "../components/TrackingPage";

const TrackingDetails = () => {
  const location = useLocation();
  const { results } = location.state || {};

  // State to hold the selected tracking details
  const [selectedTracking, setSelectedTracking] = useState(null);
  const stages = [
    { name: "Processing" },
    { name: "Out for Delivery" },
    { name: "Arrived at Local Store" },
    { name: "Out to be Delivered" },
    { name: "Delivered" },
  ];

  const currentStageIndex =
    selectedTracking &&
    stages.findIndex((stage) => stage.name === selectedTracking.status);

  useEffect(() => {
    if (results && results.length > 0) {
      // Assuming you want to display the first result for simplicity
      setSelectedTracking(results[0]);
    }
  }, [results]);

  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

  return (
    <div>
      {selectedTracking ? (
        <div className="flex flex-col gap-6">
          <h2 className="text-center font-extrabold text-2xl xs:text-3xl md:text-5xl pt-16">
            Track Record
          </h2>
          <div className="bg-stone-400 flex flex-col  pb-16 pt-10">
            <div className="bg-white p-2 mx-8 md:mx-12">
              <TrackingPage />
            </div>
            <div className="mt-8 md:mt-10 bg-white flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between  mx-8 md:mx-12 h-full ">
              <div className="p-5 text-center md:text-start">
                <p>Tracking Code: {selectedTracking.trackingNumber}</p>
                <p>
                  This shipment is handled by:{" "}
                  <span className="font-extrabold">ShipNow</span>
                </p>
              </div>

              <div className=" m-5 border rounded-md py-2 px-4 border-[#D21502] flex flex-row items-center gap-1">
                <span onClick={handlePrint}>Print</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 text-[#D21502]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                  />
                </svg>
              </div>
            </div>
            <div className=" border-b-2 border-black bg-white mx-8 md:mx-12 h-full ">
              <div className="p-5 flex flex-col  items-center md:items-start justify-center md:justify-start ">
                <p className="font-extrabold text-green-600 text-xl md:text-2xl">
                  {" "}
                  {selectedTracking.status}
                </p>

                <div>
                  <p className="font-bold text-sm xs:text-md md:text-xl text-center">
                    Origin Service Area :{" "}
                    <span>{selectedTracking.from.country}</span> -{" "}
                    <span>{selectedTracking.to.country}</span>
                  </p>
                </div>

                <div>
                  <p className="font-bold text-xs xs:text-sm md:text-md text-center">
                    Sender and Receiver name :{" "}
                    <span>{selectedTracking.from.name}</span> -{" "}
                    <span>{selectedTracking.to.name}</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs xs:text-sm md:text-md text-center text-red-600 font-bold">
                    Receiver Address :{" "}
                    <span>{selectedTracking.to.addressOne}, </span>
                    <span>{selectedTracking.to.city}, </span>
                    <span>{selectedTracking.to.state}</span>
                    <span>{selectedTracking.to.country}, </span>
                    <span>{selectedTracking.to.countryPostCode}</span>
                  </p>
                </div>
                <section className="flex flex-col  w-full">
                  <h1 className="whitespace-nowrap my-2 font-extrabold text-center md:text-start ">
                    Current Location
                  </h1>
                  <div className="flex flex-col w-full gap-2 ">
                    {stages.map((stage, index) => (
                      <div
                        key={index}
                        className={`flex flex-row w-full items-start justify-between py-2 md:py-3 px-2 md:px-3 text-white ${
                          index === currentStageIndex
                            ? "bg-[#03AC13]"
                            : index < currentStageIndex
                            ? "bg-[#03AC13]"
                            : "bg-red-600"
                        }`}
                      >
                        <p className="text-xs md:text-sm  font-extrabold">
                          {stage.name}
                        </p>
                        {index < currentStageIndex ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        ) : index === currentStageIndex ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No tracking details found..</p>
      )}
    </div>
  );
};

export default TrackingDetails;
