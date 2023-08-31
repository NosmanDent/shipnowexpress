import React from "react";

const Copy = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-6  w-full h-full mt-16 md:mt-20">
        {/* Sender Information */}
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Sender Information
          </h1>

          <div className="mt-2 w-full">
            <label htmlFor="fromName" className="block font-medium w-full">
              Name
            </label>
            <input
              type="text"
              id="fromName"
              name="fromName"
              value={formData.fromName}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromCompany" className="block font-medium w-full">
              Company
            </label>
            <input
              type="text"
              id="fromCompany"
              name="fromCompany"
              value={formData.fromCompany}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromCountry" className="block font-medium w-full">
              Country
            </label>
            <input
              type="text"
              id="fromCountry"
              name="fromCountry"
              value={formData.fromCountry}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label
              htmlFor="fromAddressOne"
              className="block font-medium w-full"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="fromAddressOne"
              name="fromAddressOne"
              value={formData.fromAddressOne}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label
              htmlFor="fromAddressTwo"
              className="block font-medium w-full"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="fromAddressTwo"
              name="fromAddressTwo"
              value={formData.fromAddressTwo}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromCity" className="block font-medium w-full">
              City
            </label>
            <input
              type="text"
              id="fromCity"
              name="fromCity"
              value={formData.fromCity}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromState" className="block font-medium w-full">
              State
            </label>
            <input
              type="text"
              id="fromState"
              name="fromState"
              value={formData.fromState}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromEmail" className="block font-medium w-full">
              Email
            </label>
            <input
              type="email"
              id="fromEmail"
              name="fromEmail"
              value={formData.fromEmail}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label
              htmlFor="fromPhoneNumber"
              className="block font-medium w-full"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="fromPhoneNumber"
              name="fromPhoneNumber"
              value={formData.fromPhoneNumber}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label
              htmlFor="fromPhoneNumberType"
              className="block font-medium w-full"
            >
              Phone Number Type
            </label>
            <input
              type="text"
              id="fromPhoneNumberType"
              name="fromPhoneNumberType"
              value={formData.fromPhoneNumberType}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="fromID" className="block font-medium w-full">
              ID
            </label>
            <input
              type="text"
              id="fromID"
              name="fromID"
              value={formData.fromID}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>
        </div>

        {/* Receiver Information */}
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Receiver Details
          </h1>

          <div className="mt-2 w-full">
            <label htmlFor="toName" className="block font-medium">
              Recipient's Name
            </label>
            <input
              type="text"
              id="toName"
              name="toName"
              value={formData.toName}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toCompany" className="block font-medium">
              Recipient's Company
            </label>
            <input
              type="text"
              id="toCompany"
              name="toCompany"
              value={formData.toCompany}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toCountry" className="block font-medium">
              Recipient's Country
            </label>
            <input
              type="text"
              id="toCountry"
              name="toCountry"
              value={formData.toCountry}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toAddressOne" className="block font-medium">
              Recipient's Address Line 1
            </label>
            <input
              type="text"
              id="toAddressOne"
              name="toAddressOne"
              value={formData.toAddressOne}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toAddressTwo" className="block font-medium">
              Recipient's Address Line 2
            </label>
            <input
              type="text"
              id="toAddressTwo"
              name="toAddressTwo"
              value={formData.toAddressTwo}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toCity" className="block font-medium">
              Recipient's City
            </label>
            <input
              type="text"
              id="toCity"
              name="toCity"
              value={formData.toCity}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toState" className="block font-medium">
              Recipient's State
            </label>
            <input
              type="text"
              id="toState"
              name="toState"
              value={formData.toState}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toEmail" className="block font-medium">
              Recipient's Email
            </label>
            <input
              type="email"
              id="toEmail"
              name="toEmail"
              value={formData.toEmail}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toPhoneNumber" className="block font-medium">
              Recipient's Phone Number
            </label>
            <input
              type="tel"
              id="toPhoneNumber"
              name="toPhoneNumber"
              value={formData.toPhoneNumber}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toPhoneNumberType" className="block font-medium">
              Recipient's Phone Number Type
            </label>
            <input
              type="text"
              id="toPhoneNumberType"
              name="toPhoneNumberType"
              value={formData.toPhoneNumberType}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toID" className="block font-medium">
              Recipient's ID
            </label>
            <input
              type="text"
              id="toID"
              name="toID"
              value={formData.toID}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>

          <div className="mt-2 w-full">
            <label htmlFor="toCountryPostCode" className="block font-medium">
              Recipient's Country Post Code
            </label>
            <input
              type="text"
              id="toCountryPostCode"
              name="toCountryPostCode"
              value={formData.toCountryPostCode}
              onChange={handleChange}
              className="border-2 border-gray-400 p-2 w-full"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copy;
