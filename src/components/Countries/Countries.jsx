import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 12)));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-semibold text-green-600 text-center mt-5">
        Total Rest Countries: {countries.length}
      </h2>
      <div className="grid grid-col-1 md:grid-cols-3 p-10 gap-10">
        {countries.map((country) => (
          <Country country={country} key={country.cca2}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
