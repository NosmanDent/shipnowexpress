import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import axios from "axios";
import Loader from "./Loader";
import SideMenu from "./SideMenu";
import LocationComponent from "./LocationComponent";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenShip, setIsDropdownOpenShip] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownShip = () => {
    setIsDropdownOpenShip(!isDropdownOpenShip);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrorMessage("Please, fill the search field");
      return;
    }

    // Show the loader
    setLoading(true);

    // Make the API request using Axios
    axios
      .get(
        `https://shipnowexpress.onrender.com/api/trackings/tracking/${searchQuery}`
      )
      .then((response) => {
        // Navigate to the search results page with the fetched data
        navigate(`/search-results`, { state: { results: response.data } });
        setIsDropdownOpen(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Hide the loader after the API request is completed
        setLoading(false);
      });
  };

  return (
    <nav>
      <section className="bg-[#FDA50F] w-full px-5 md:px-12 py-4 relative">
        <div className="hidden md:flex flex-row items-center justify-between">
          <Link
            to="/"
            className="flex flex-col items-end tracking-tighter leading-tight"
          >
            <h1 className="font-extrabold text-2xl text-black">shipNow</h1>
            <p className="text-[#D21502] font-bold text-md">Espress</p>
          </Link>
          <div>
            <div className="flex flex-row items-center gap-4 ">
              <div
                className="flex flex-row items-center cursor-pointer hover:text-[#D21502] hover:underline"
                onClick={toggleDropdown}
              >
                Track{" "}
                <span className="text-white animate-pulse text-2xl hover:text-[#D21502] ">
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div
                className="flex flex-row items-center cursor-pointer hover:text-[#D21502] hover:underline"
                onClick={toggleDropdownShip}
              >
                Ship{" "}
                <span className="text-white animate-pulse text-2xl hover:text-[#D21502] ">
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div className="cursor-pointer">Customer Service</div>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="bg-white shadow-md absolute top-full left-0 w-full z-10 p-4 h-[70vh] hidden md:flex items-center justify-center ">
            <div className="border border-black p-3 w-3/4">
              <section>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black whitespace-nowrap">
                  Track Your Shipment
                </h1>
                <div className="flex flex-col md:flex-row gap-1 items-center justify-start md:justify-center w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="w-full md:w-3/4 text-bold py-3 focus:outline-none px-3 placeholder-gray-500"
                    placeholder="enter your tracking details"
                  />
                  <button
                    className="bg-[#D21502] text-white py-3 lg:px-16 w-full md:w-1/4"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm md:text-xl font-semibold">
                    {errorMessage}
                  </p>
                )}
                {loading && (
                  <div className="text-center mt-4">
                    {/* Replace this with your loader or spinner */}
                    <div className="text-white">
                      <Loader />
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        )}

        {isDropdownOpenShip && (
          <div className="bg-white shadow-md absolute top-full left-0 w-full z-10 pb-6 hidden md:flex">
            <div className="w-full flex flex-row">
              <div className="w-1/3 border-r h-full pt-4 pl-4 pr-4 flex flex-col gap-8">
                <h1 className=" text-2xl lg:text-3xl font-extrabold text-[#D21502] border-b pb-4">
                  START SHIPPING
                </h1>
                <div className="shadow-sm shadow-black rounded-lg py-6 px-2 w-full flex flex-row items-center justify-between ">
                  <div className="flex flex-row items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#D21502]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>

                    <h1 className="font-bold">Get a Quote</h1>
                  </div>

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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="shadow-sm shadow-black rounded-lg py-6 px-2 w-full flex flex-row items-center justify-between ">
                  <Link
                    to="/create"
                    className="flex flex-row items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#D21502]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                      />
                    </svg>

                    <h1 className="font-bold">Ship Now</h1>
                  </Link>

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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-3/4 h-full px-4 pt-4 flex flex-col">
                <h1 className=" text-2xl lg:text-xl font-extrabold  border-b pb-4">
                  Learn more about
                </h1>

                <div className="flex flex-row items-center justify-between mt-8 gap-4">
                  <div className="border-r pr-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-bold">Document and Package</h1>
                      <h2 className="text-md text-gray-700">
                        Personal and Business
                      </h2>
                    </div>
                    <h3 className="my-12 text-md">
                      Learn about shipping options with DHL Express
                    </h3>
                    <button className="border border-[#d21502] text-[#d21502] font-bold lg:font-extrabold text-sm md:text-md  rounded-lg py-3 w-full text-center">
                      Explore ShipNow Express
                    </button>
                  </div>

                  <div className="border-r pr-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-bold">Document and Package</h1>
                      <h2 className="text-md text-gray-700">
                        Personal and Business
                      </h2>
                    </div>
                    <h3 className="my-12 text-md">
                      Learn about shipping options with DHL Express
                    </h3>
                    <button className="border border-[#d21502] text-[#d21502] font-bold lg:font-extrabold text-sm md:text-md  rounded-lg py-3 w-full text-center">
                      Explore ShipNow Express
                    </button>
                  </div>

                  <div>
                    <div className="flex flex-col gap-4">
                      <h1 className="font-bold">Document and Package</h1>
                      <h2 className="text-md text-gray-700">
                        Personal and Business
                      </h2>
                    </div>
                    <h3 className="my-12 text-md">
                      Learn about shipping options with DHL Express
                    </h3>
                    <button className="border border-[#d21502] text-[#d21502] font-bold lg:font-extrabold text-sm md:text-md rounded-lg py-3 w-full text-center">
                      Explore ShipNow Express
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section>
          <SideMenu />
        </section>
      </section>
      <section className="bg-white w-full py-4 md:px-12 md:flex flex-row items-center justify-end hidden">
        <Menu handleClick={handleClick} setToggleNav={setToggleNav} />
        <LocationComponent />
      </section>
    </nav>
  );
};

function Menu({ handleClick, setToggleNav }) {
  const { user } = useSelector((state) => state.user);
  const [isDropdownOpenMenu, setIsDropdownOpenMenu] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  const toggleDropdownMenu = () => {
    setIsDropdownOpenMenu(!isDropdownOpenMenu);
  };

  const closeDropdown = () => {
    setIsDropdownOpenMenu(false);
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
            className="lg:bg-red-700  text-white  font-semibold rounded-lg lg:py-2 lg:px-5  text-semibold lg:text-xs text-md "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <section>
            <div
              className="text-black font-semibold flex items-center "
              onClick={toggleDropdownMenu}
            >
              Customer Portal
              <span className="text-[#D21502] animate-pulse text-2xl hover:text-[#D21502] ">
                <RiArrowDropDownLine />
              </span>
            </div>

            {isDropdownOpenMenu && (
              <div
                onClick={closeDropdown}
                className=" bg-white shadow-md absolute  right-0 w-1/4 z-10 p-4 hidden md:flex  "
              >
                <div className="flex flex-col items-center gap-4 w-full">
                  <NavLink
                    to="login"
                    onClick={closeDropdown}
                    className="shadow-sm shadow-black rounded-lg py-6 px-2 w-full flex flex-row items-center justify-between "
                  >
                    <div className="flex flex-row items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#D21502]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                        />
                      </svg>

                      <div className="font-bold">Register</div>
                    </div>

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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </NavLink>
                  <NavLink
                    onClick={closeDropdown}
                    to="login"
                    className="shadow-sm shadow-black rounded-lg py-6 px-2 w-full flex flex-row items-center justify-between "
                  >
                    <div className="flex flex-row items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#D21502]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>

                      <div className="font-bold">Login</div>
                    </div>

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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            )}
          </section>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
