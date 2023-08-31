import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const TrackingModal = ({ trackingNumber, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const ClipboardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
      />
    </svg>
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingNumber);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-[#FDA50F] w-3/4 h-3/4 p-6 rounded-lg shadow-lg z-10 flex flex-col items-center justify-start md:justify-center">
        <h1 className="text-[#D21502] font-extrabold text-xl md:text-2xl animate-pulse">
          Thank you for choosing us. We are happy to serve you.
        </h1>
        <p className="text-xs md:text-sm">
          <span className="font-extrabold">Note:</span> You will be able to
          track your Package location immediately your payment has been
          confirmed!
        </p>
        <h2 className="text-lg font-semibold mb-4">Your Tracking Number</h2>
        <div className="mb-4 flex flex-row items-center gap-2">
          <div className="bg-black text-white py-1 px-3 rounded-md">
            {trackingNumber}
          </div>

          <div className="flex items-center">
            <button
              onClick={copyToClipboard}
              className={`${
                isCopied ? "bg-green-500 text-xs" : "bg-black/50"
              } hover:bg-gray-600 text-white font-semibold p-2 text-xs rounded-md`}
            >
              {isCopied ? "Copied!" : ClipboardIcon}
            </button>
            {isCopied && (
              <span className="ml-2 text-xs text-green-500">
                <GiCheckMark />
              </span>
            )}
          </div>
        </div>

        <div className="flex fle-col md:flex-row items-center gap-3 w-1/2">
          <Link
            to="/"
            className="bg-blue-700 w-1/2 hover:bg-[#D21502] text-white font-semibold flex items-center justify-center py-2 rounded-md mt-4"
          >
            Home
          </Link>
          <button
            onClick={onClose}
            className="border border-black hover:border-[#D21502] hover:text-white text-black w-1/2 hover:bg-[#D21502] font-semibold  py-2 rounded-md mt-4"
          >
            Ship Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
