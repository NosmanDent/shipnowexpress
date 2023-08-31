import React, { useState, useEffect } from "react";
import { BiLockOpenAlt, BiSolidLockAlt } from "react-icons/bi";
import Accordion from "./Accordion";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import TrackingPage from "./TrackingPage";
import LocationComponent from "./LocationComponent";

const SideMenu = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="md:hidden flex w-full flex-row items-center justify-between">
      <Link
        to="/"
        className="flex flex-col items-end tracking-tighter leading-tight"
      >
        <h1 className="font-extrabold text-md xs:text-xl text-black">
          shipNow
        </h1>
        <p className="text-[#D21502] font-bold text-xs xs:text-md">Espress</p>
      </Link>
      <div>
        <BiSolidLockAlt
          color="#D21502"
          fontSize={30}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full bg-white  flex flex-col z-[5]">
            <BiLockOpenAlt
              fontSize={27}
              className="text-[30px] text-[#D21502] cursor-pointer absolute top-[20px] right-[20px] font-extrabold "
              onClick={() => setToggleMenu(false)}
            />

            <div className="flex flex-col items-start pt-16 px-4 text-2xl w-full">
              <div className="w-full">
                <Accordion title="Track">
                  <div className="border border-black p-2">
                    <TrackingPage />
                  </div>
                </Accordion>
                <Accordion title="Ship">
                  <div>
                    <div className="flex flex-row items-center border-b w-full justify-between shadow-sm pb-6">
                      <span className="text-lg font-bold ">Get Quote</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mt-1 text-[#D21502]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between pt-6">
                      <span className="text-lg font-bold ">Ship</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mt-1 text-[#D21502]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Accordion>
                <h1 className="text-lg font-extrabold text-[#D21502] pl-4 py-3 border-b shadow-md">
                  Customer Service
                </h1>
                <Accordion title="Customer Panel">
                  <div
                    onClick={() => setToggleMenu(false)}
                    className="border-b border-white  w-full"
                  >
                    <Menu
                      handleClick={handleClick}
                      setToggleNav={setToggleNav}
                    />
                  </div>
                </Accordion>
                <div className="text-lg font-extrabold my-4 flex w-full items-start justify-end">
                  <LocationComponent />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

function Menu({ handleClick, setToggleNav }) {
  const { user } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  return (
    <ul className="">
      <li
        className="cursor-pointer"
        onClick={() => {
          {
            handleClick();
          }
          setToggleNav(false);
        }}
      >
        {user ? (
          <button
            className="border-b border-white py-3 pl-3 w-full "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className=" flex flex-col items-start w-full ">
            <div className="flex flex-row items-center border-b w-full justify-between shadow-sm pb-6">
              <span className="text-lg font-bold ">Register</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-1 text-[#D21502]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center w-full justify-between pt-6">
              <span className="text-lg font-bold ">Log In</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-1 text-[#D21502]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default SideMenu;
