import React, { useState } from "react";
import { ImTwitter, ImFacebook2 } from "react-icons/im";
import { BsInstagram, BsChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Link to="">
        <motion.div
          className="md:mr-10 mr-4 flex items-center justify-end pb-6 fixed bottom-6 right-6 z-10"
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onHoverStart={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="flex items-center justify-center w-16 p-4 bg-[#D21502] rounded-full "
            layout="position"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="content"
                className="font-bold ml-1 text-#2d8b95 py-2 rouded-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className=" bg-[#FDA50F] p-2 rounded-lg shadow-md animate-bounce">
                  Get In touch with us
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
      <footer className="p-6 bg-stone-300 text-black">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm text-black">
              <a rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a rel="noopener noreferrer" href="#">
                Release Notes
              </a>
              <a rel="noopener noreferrer" href="#">
                Upgrade Guide
              </a>
              <a rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Optimizing for Production
              </a>
              <a rel="noopener noreferrer" href="#">
                Browser Support
              </a>
              <a rel="noopener noreferrer" href="#">
                IntelliSense
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm text-black">
              <a rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm text-black">
              <a rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm text-black">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Facebook{" "}
                <span className="text-lg text-blue-600">
                  <ImFacebook2 />
                </span>
              </a>

              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Instagram{" "}
                <span className="text-lg text-red-600">
                  <BsInstagram />
                </span>
              </a>

              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Twitter{" "}
                <span className="text-lg text-blue-500">
                  <ImTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm text-black">
          <span className=" text-black">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
