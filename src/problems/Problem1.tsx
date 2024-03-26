import React, { useState } from "react";

interface Country {
  name: string;
  value: string;
  cities: string[];
}

const Problem1: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<number | string>(0);
  const [selectedCity, setSelectedCity] = useState<number | string>(0);
  const countries: Country[] = [
    {
      name: "USA",
      value: "US",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      name: "Japan",
      value: "TK",
      cities: ["Tokyo", "Osaka", "Kyoto"],
    },
    {
      name: "France",
      value: "FR",
      cities: ["Paris", "Marseille", "Lyon"],
    },
  ];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(0); 
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      {/* 1st dropdown */}
      <select onChange={handleCountryChange} value={selectedCountry}>
        {countries.map((item, index) => (
          <option value={index} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {/* 2nd dropdown */}
      <select onChange={handleCityChange} value={selectedCity}>
        {countries[Number(selectedCountry)]?.cities.map((item, index) => (
          <option value={index} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Problem1;
