import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackingModal from "../components/TrackingModal";
import {
  FaLocationArrow,
  FaInfoCircle,
  FaMoneyBill,
  FaBook,
  FaPlaneSlash,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiLocationOn } from "react-icons/ci"; // Fallback icon
import CountrySelect from "../components/CountrySelect";
import countries from "countries-list"; // Import the countries list

const CreateTracking = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [formData, setFormData] = useState({
    // sender info
    fromName: "",
    fromCompany: "",
    fromCountry: "",
    fromAddressOne: "",
    fromAddressTwo: "",
    fromCity: "",
    fromState: "",
    fromEmail: "",
    fromPhoneNumber: "",
    fromPhoneNumberType: "",
    fromID: "",
    // receiver info
    toName: "",
    toCompany: "",
    toCountry: "",
    toAddressOne: "",
    toAddressTwo: "",
    toCity: "",
    toState: "",
    toEmail: "",
    toPhoneNumber: "",
    toPhoneNumberType: "",
    toID: "",
    toCountryPostCode: "",
    // items info
    itemsWeight: "",
    itemsDimensionLength: "",
    itemsDimensionWidth: "",
    itemsDimensionHeight: "",
    itemsQuantity: "",
  });

  const [trackingNumber, setTrackingNumber] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setSelectedDate(currentDate);
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleCountrySelect = (code) => {
    setSelectedCountry(code);
    setErrorMessage(""); // Clear any existing error message when a country is selected
  };

  const handleFormButtonClick = () => {
    if (selectedCountry) {
      setShowForm(true); // Show the form if a country is selected
    } else {
      setErrorMessage("Please select a country before proceeding.");
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();

            setCountryCode(data.countryCode.toLowerCase());
            setCountryName(data.countryName);
          } catch (error) {
            console.error("Error getting location:", error.message);
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  const flagIcon = countryCode ? (
    <IconContext.Provider value={{ size: "2em" }}>
      {countryCode === "us" ? (
        // Example: Displaying the US flag
        <span role="img" aria-label={countryName}></span>
      ) : (
        // Fallback flag icon
        <CiLocationOn className="text-red-800" />
      )}
    </IconContext.Provider>
  ) : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "itemsWeight") {
      const weight = parseFloat(value);
      const pricePerKg = 1000; // Price per kg in dollars
      const calculatedPrice = weight * pricePerKg;
      setTotalPrice(calculatedPrice);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true

    // Delay the submission for 20 seconds using setTimeout
    setTimeout(async () => {
      try {
        const response = await axios.post(
          "https://shipnowexpress.onrender.com/api/trackings",
          formData
        );
        console.log("New tracking entry created:", response.data);
        setTrackingNumber(response.data.trackingNumber);
        setShowModal(true);
        setFormData({
          // sender info
          fromName: "",
          fromCompany: "",
          fromCountry: "",
          fromAddressOne: "",
          fromAddressTwo: "",
          fromCity: "",
          fromState: "",
          fromEmail: "",
          fromPhoneNumber: "",
          fromPhoneNumberType: "",
          fromID: "",
          // receiver info
          toName: "",
          toCompany: "",
          toCountry: "",
          toAddressOne: "",
          toAddressTwo: "",
          toCity: "",
          toState: "",
          toEmail: "",
          toPhoneNumber: "",
          toPhoneNumberType: "",
          toID: "",
          toCountryPostCode: "",
          // items info
          itemsWeight: "",
          itemsDimensionLength: "",
          itemsDimensionWidth: "",
          itemsDimensionHeight: "",
          itemsQuantity: "",
        });
        setLoading(false); // Reset loading state
      } catch (error) {
        console.error("Error creating tracking entry:", error);
        setLoading(false); // Reset loading state in case of error
      }
    }, 3000); // Delay of 20 seconds
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload(); // Reload the page after closing the modal
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex flex-col items-center justify-center  text-center w-full pt-16 px-10 md:px-16">
        <div className="flex flex-col w-full md:w-3/4 gap-4 md:gap-6">
          <h1 className="font-bold text-xl xs:text-2xl md:text-5xl text-[#D21502] ">
            GET A FREE DOMESTIC OR INTERNATIONAL BUSINESS SHIPPING QUOTE ONLINE
          </h1>
          <p className=" text-gray-700 text-sm md:text-md">
            Packages and pallets, big and small, we can offer you an instant
            quote for your shipping needs both domestically and internationally.
            Fill out your shipment details below to discover your quotes. If you
            are satisfied, simply continue to book.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 md:mt-16 px-10 md:px-16">
        <div className="flex flex-col items-center gap-2">
          <FaLocationArrow className="text-[#D12502] text-3xl md:text-5xl" />
          <h1 className="text-center font-extrabold text-sm md:text-md">
            ENTER ORIGIN AND DESTINATION
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaInfoCircle className="text-[#D12502] text-3xl md:text-5xl" />
          <h1 className="text-center font-extrabold text-sm md:text-md">
            COMPLETE YOUR SHIPMENT DETAILS
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaMoneyBill className="text-[#D12502] text-3xl md:text-5xl" />
          <h1 className="text-center font-extrabold text-sm md:text-md">
            GET AN ESTIMATED QUOTE
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaBook className="text-[#D12502] text-3xl md:text-5xl" />
          <h1 className="text-center font-extrabold text-sm md:text-md">
            PROCEED WITH ONLINE BOOKING
          </h1>
        </div>
      </div>

      {/* Location from and to */}
      <div className="bg-[#FBFCF7] flex flex-col gap-4 items-start w-3/4 m-auto h-full mt-16 pt-4 pb-16 px-4 shadow-sm shadow-black ">
        <div className="flex flex-col gap-4 md:flex-row items-start w-full h-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 bg-white pb-8 pt-2 shadow-sm shadow-black px-2">
            <h1 className="text-md md:text-lg font-extrabold mb-1">From</h1>
            <div className="flex items-center space-x-1 ">
              {flagIcon}
              <p>{countryName}</p>
            </div>

            <div className="w-full border  my-1" />
            <p className="text-[10px] xs:text-xs">
              This is your billing and country/region
            </p>
          </div>
          <input
            type="text"
            className="border-2 border-gray-400 p-2 w-full md:w-1/2 text-sm"
            placeholder="City (Optional)"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full bg-white pb-8 pt-2">
          <div className="w-full md:w-1/2 bg-white pb-8 pt-2 shadow-sm shadow-black px-2">
            <h1 className="text-md md:text-lg font-extrabold mb-1 text-center md:text-start">
              To
            </h1>
            <CountrySelect onSelect={handleCountrySelect} />
            {selectedCountry && (
              <div className="">
                <p className="text-sm font-extrabold text-center md:text-start">
                  Receiver country: {countries.countries[selectedCountry].name}
                </p>
                <div
                  className={`text-sm font-extrabold flex items-center md:items-start justify-center md:justify-start ${
                    selectedCountry === "us"
                      ? "text-blue-500 " // Example for the US
                      : selectedCountry === "ca"
                      ? "text-red-600" // Example for Canada
                      : "text-green-600" // Default color
                  }`}
                  role="img"
                  aria-label={countries.countries[selectedCountry].name}
                >
                  {selectedCountry.toUpperCase()}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row items-start w-full md:w-1/2 gap-2">
            <input
              type="text"
              className="border-2 border-gray-400 p-2 w-1/2  text-sm"
              placeholder="City (Optional)"
            />
            <input
              type="text"
              className="border-2 border-gray-400 p-2 w-1/2  text-sm"
              placeholder="Post Code (Optional)"
              required
            />
          </div>
        </div>

        <button
          className="bg-[#D21502] text-white flex m-auto font-extrabold px-4 py-2 text-xs md:text-sm"
          onClick={handleFormButtonClick}
        >
          Describe your Shipment
        </button>
        {errorMessage && (
          <p className="text-red-600 text-center font-bold mt-2">
            {errorMessage}
          </p>
        )}
      </div>

      {showForm && (
        <form className="" onSubmit={handleSubmit}>
          {/* Item Details */}

          <div className="flex flex-col items-center justify-center w-full h-full gap-4 py-8 md:py-12 bg-[#FDA50F] mt-16">
            <h1 className="text-2xl md:text-4xl font-extrabold m-auto">
              Items Details
            </h1>

            <div className="bg-white flex flex-wrap items-center w-3/4 justify-center px-4 md:px-12 py-4 md:py-8 shadow-md shadow-black">
              <div className="mt-2 w-full ">
                <label
                  htmlFor="itemsWeight"
                  className="block font-medium text-xs md:text-sm"
                >
                  Item Weight
                </label>
                <input
                  type="number"
                  id="itemsWeight"
                  name="itemsWeight"
                  value={formData.itemsWeight}
                  onChange={handleChange}
                  className="border-2 border-gray-400 p-1 md:p-2 w-full"
                  required
                />
              </div>

              <div className="mt-2 w-full">
                <label
                  htmlFor="itemsDimensionLength"
                  className="block font-medium text-xs md:text-sm"
                >
                  Item Length
                </label>
                <input
                  type="number"
                  id="itemsDimensionLength"
                  name="itemsDimensionLength"
                  value={formData.itemsDimensionLength}
                  onChange={handleChange}
                  className="border-2 border-gray-400 p-1 md:p-2 w-full"
                  required
                />
              </div>

              <div className="mt-2 w-full">
                <label
                  htmlFor="itemsDimensionWidth"
                  className="block font-medium text-xs md:text-sm"
                >
                  Item Width
                </label>
                <input
                  type="number"
                  id="itemsDimensionWidth"
                  name="itemsDimensionWidth"
                  value={formData.itemsDimensionWidth}
                  onChange={handleChange}
                  className="border-2 border-gray-400 p-1 md:p-2 w-full"
                  required
                />
              </div>

              <div className="mt-2 w-full">
                <label
                  htmlFor="itemsDimensionHeight"
                  className="block font-medium text-xs md:text-sm"
                >
                  Item Height
                </label>
                <input
                  type="number"
                  id="itemsDimensionHeight"
                  name="itemsDimensionHeight"
                  value={formData.itemsDimensionHeight}
                  onChange={handleChange}
                  className="border-2 border-gray-400 p-1 md:p-2 w-full"
                  required
                />
              </div>

              <div className="mt-2 w-full">
                <label
                  htmlFor="itemsQuantity"
                  className="block font-medium text-xs md:text-sm"
                >
                  Item Quantity
                </label>
                <input
                  type="number"
                  id="itemsQuantity"
                  name="itemsQuantity"
                  value={formData.itemsQuantity}
                  onChange={handleChange}
                  className="border-2 border-gray-400 p-1 md:p-2 w-full"
                  required
                />
              </div>
            </div>

            <div className="">
              <div
                className="bg-[#D21502] text-white flex font-extrabold px-8 md:px-16 py-2 text-xs md:text-sm"
                onClick={() => setShowQuote(true)}
              >
                Ship Now
              </div>
            </div>
          </div>

          {/* Bill Quote */}

          {showQuote && (
            <div className="flex flex-col item-center justify-center gap-4 w-full  mt-10 md:mt-20">
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <h1 className="text-xl md:text-4xl font-extrabold">
                  Your Delivery Options
                </h1>
                <p className="text-center text-xs md:text-sm px-4">
                  Review & Select a delivery service to start booking your
                  shipment
                </p>
              </div>

              <div className="w-3/4 m-auto h-full shadow-md shadow-black py-8 px-8 md:px-12 flex flex-col gap-8">
                <div className="flex items-center justify-center md:justify-start">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="font-extrabold border border-gray-700 rounded-md py-2 md:py-3 px-2 text-xs md:text-sm md:px-4 focus:outline-black focus:ring focus:border-black"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between ">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                    <FaPlaneSlash className="text-[#FDA50F] text-4xl md:text-6xl " />
                    <div>
                      <p className="text-xs text-center md:text-start">
                        Estimated delivery
                      </p>
                      <h1 className="font-extrabold text-sm md:text-md text-center">
                        In 3 days{" "}
                        <span className="md:font-extralight font-normal text-xs md:text-md">
                          | latest by end of day
                        </span>
                      </h1>
                      <h1 className="text-xs font-bold text-center md:text-start">
                        Booked on{" "}
                        <span className="text-xs font-extrabold">
                          {selectedDate}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row items-center md:gap-2 mt-2 md:mt-0">
                      <h1 className="text-xs hidden md:flex">Includes VAT</h1>
                      <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl">
                        ${totalPrice.toFixed(2)}
                      </h1>
                      <h1 className="text-[10px] flex md:hidden">
                        Includes VAT
                      </h1>
                    </div>
                    <div className="bg-[#D21502] text-white flex font-extrabold px-8 md:px-16 py-2 whitespace-nowrap text-xs md:text-sm">
                      Estimated Amount
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                  <h1 className="text-xs md:text-sm font-bold ">
                    Payment <span className="hidden md:flex">Method:</span>
                  </h1>
                  <div>
                    <h1
                      className="bg-[#FDA50F] py-2 px-6 font-extrabold text-xs md:text-sm whitespace-nowrap cursor-pointer"
                      onClick={() => setShowBank(true)}
                    >
                      Bank Transfer
                    </h1>
                  </div>
                </div>
                {showBank && (
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <div className="bg-black text-sm md:text-md text-white py-4 px-12 font-extrabold w-60">
                      <h1 className="text-center">Bank of America</h1>
                      <h1 className="text-center">Account No: 7865897689</h1>
                    </div>
                    <div className="bg-black text-sm md:text-md text-white py-4 px-12 font-extrabold w-60">
                      <h1 className="text-center">Wells Fargo</h1>
                      <h1 className="text-center">Account No: 7865897689</h1>
                    </div>
                    <div className="bg-black text-sm md:text-md text-white py-4 px-12 font-extrabold w-60">
                      <h1 className="text-center">Access Bank</h1>
                      <h1 className="text-center">Account No: 7865897689</h1>
                    </div>
                    <div className="bg-black text-sm md:text-md text-white py-4 px-12 font-extrabold w-60">
                      <h1 className="text-center">Kuda Bank</h1>
                      <h1 className="text-center">Account No: 7865897689</h1>
                    </div>
                  </div>
                )}

                <button
                  className="bg-[#D21502] text-white flex font-extrabold itens-center justify-center  py-2 whitespace-nowrap text-xs md:text-sm "
                  onClick={() => setShowDetails(true)}
                >
                  Continue <span className="hidden md:flex">with Booking</span>
                </button>
                <p className="text-xs text-center">
                  You will receive an email when your Payment is confirmed.
                </p>
              </div>
            </div>
          )}

          {showDetails && (
            <div className="bg-[#FDA50F] flex flex-col items-center justify-center mt-10 w-full px-8 md:px-20">
              <div className="flex flex-col md:flex-row items-start gap-6  w-full h-full my-6 md:my-10 py-5 md:py-8 px-6 md:px-10 bg-white">
                {/* Sender Information */}
                <div className="flex flex-col items-start w-full md:w-1/2 ">
                  <h1 className="text-sm md:text-2xl whitespace-nowrap font-extrabold">
                    Sender Information
                  </h1>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromName"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="fromName"
                      name="fromName"
                      value={formData.fromName}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromCompany"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="fromCompany"
                      name="fromCompany"
                      value={formData.fromCompany}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromCountry"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="fromCountry"
                      name="fromCountry"
                      value={formData.fromCountry}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromAddressOne"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="fromAddressOne"
                      name="fromAddressOne"
                      value={formData.fromAddressOne}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromAddressTwo"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="fromAddressTwo"
                      name="fromAddressTwo"
                      value={formData.fromAddressTwo}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      placeholder="optional"
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromCity"
                      className="block font-medium text-xs md:text-sm"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="fromCity"
                      name="fromCity"
                      value={formData.fromCity}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromState"
                      className="block font-medium text-xs md:text-sm"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="fromState"
                      name="fromState"
                      value={formData.fromState}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromEmail"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="fromEmail"
                      name="fromEmail"
                      value={formData.fromEmail}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromPhoneNumber"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="fromPhoneNumber"
                      name="fromPhoneNumber"
                      value={formData.fromPhoneNumber}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromPhoneNumberType"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Phone Number Type
                    </label>
                    <input
                      type="text"
                      id="fromPhoneNumberType"
                      name="fromPhoneNumberType"
                      value={formData.fromPhoneNumberType}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="fromID"
                      className="block font-medium text-xs md:text-sm"
                    >
                      ID
                    </label>
                    <input
                      type="text"
                      id="fromID"
                      name="fromID"
                      value={formData.fromID}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>
                </div>

                {/* Receiver Information */}
                <div className="flex flex-col items-start w-full md:w-1/2 ">
                  <h1 className="text-sm md:text-2xl whitespace-nowrap font-extrabold">
                    Receiver Details
                  </h1>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toName"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Name
                    </label>
                    <input
                      type="text"
                      id="toName"
                      name="toName"
                      value={formData.toName}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toCompany"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Company
                    </label>
                    <input
                      type="text"
                      id="toCompany"
                      name="toCompany"
                      value={formData.toCompany}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toCountry"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Country
                    </label>
                    <input
                      type="text"
                      id="toCountry"
                      name="toCountry"
                      value={formData.toCountry}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toAddressOne"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Address Line 1
                    </label>
                    <input
                      type="text"
                      id="toAddressOne"
                      name="toAddressOne"
                      value={formData.toAddressOne}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toAddressTwo"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Address Line 2
                    </label>
                    <input
                      type="text"
                      id="toAddressTwo"
                      name="toAddressTwo"
                      value={formData.toAddressTwo}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      placeholder="optional"
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toCity"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's City
                    </label>
                    <input
                      type="text"
                      id="toCity"
                      name="toCity"
                      value={formData.toCity}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toState"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's State
                    </label>
                    <input
                      type="text"
                      id="toState"
                      name="toState"
                      value={formData.toState}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toEmail"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Email
                    </label>
                    <input
                      type="email"
                      id="toEmail"
                      name="toEmail"
                      value={formData.toEmail}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toPhoneNumber"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Phone Number
                    </label>
                    <input
                      type="tel"
                      id="toPhoneNumber"
                      name="toPhoneNumber"
                      value={formData.toPhoneNumber}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toPhoneNumberType"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Phone Number Type
                    </label>
                    <input
                      type="text"
                      id="toPhoneNumberType"
                      name="toPhoneNumberType"
                      value={formData.toPhoneNumberType}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toID"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's ID
                    </label>
                    <input
                      type="text"
                      id="toID"
                      name="toID"
                      value={formData.toID}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>

                  <div className="mt-2 w-full">
                    <label
                      htmlFor="toCountryPostCode"
                      className="block font-medium text-xs md:text-sm"
                    >
                      Recipient's Country Post Code
                    </label>
                    <input
                      type="text"
                      id="toCountryPostCode"
                      name="toCountryPostCode"
                      value={formData.toCountryPostCode}
                      onChange={handleChange}
                      className="border-2 border-gray-400 p-1 md:p-2 w-full"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 md:px-20 mb-20">
                <button
                  type="submit"
                  className="bg-[#D21502] font-extrabold whitespace-nowrap text-xs md:text-sm mt-6 text-white py-2 md:py-4 px-10 md:px-20 rounded w-full"
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? "Loading..." : "Confirm Shipment"}
                </button>
              </div>
            </div>
          )}
        </form>
      )}

      {showModal && (
        <TrackingModal trackingNumber={trackingNumber} onClose={closeModal} />
      )}
    </div>
  );
};

export default CreateTracking;
