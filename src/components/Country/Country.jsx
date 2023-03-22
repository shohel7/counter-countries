import React from "react";

const Country = (props) => {
  const { name, population, region, flags } = props.country;
  //   console.log(props);
  return (
    <div className="rounded-lg bg-amber-100 flex flex-col items-center py-2">
      <h2 className="text-3xl">Name: {name.common}</h2>
      <h4 className="text-xl my-3">Populations: {population}</h4>
      <img className="w-72 mb-5" src={flags.png} alt="" />
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
