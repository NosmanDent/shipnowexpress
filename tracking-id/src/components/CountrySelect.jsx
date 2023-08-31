import React from "react";
import countries from "countries-list";

const CountrySelect = ({ onSelect }) => {
  const countryOptions = Object.keys(countries.countries).map((code) => ({
    code,
    name: countries.countries[code].name,
  }));

  return (
    <select
      className="p-2 w-full border-2 border-gray-400"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select a country</option>
      {countryOptions.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
