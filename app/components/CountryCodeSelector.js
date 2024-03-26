import React, { useState } from "react";
import { getCountryCallingCode } from "libphonenumber-js";
import countries from "libphonenumber-js/examples.mobile.json";

const CountryCodeSelector = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    const countryCallingCode = getCountryCallingCode(countryCode);
    onSelect(countryCode, countryCallingCode);
  };

  return (
    <select value={selectedCountry} onChange={handleCountryChange}>
      {Object.keys(countries).map((countryCode) => (
        <option key={countryCode} value={countryCode}>
          {countryCode} (+{getCountryCallingCode(countryCode)})
        </option>
      ))}
    </select>
  );
};

export default CountryCodeSelector;
