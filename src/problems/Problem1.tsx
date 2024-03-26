import React from "react";
interface COUNTRIES {
  name: string;
  value: string;
  cities: string[];
}

const Problem1: React.FC = () => {
  const countries: COUNTRIES[] = [
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
  return (
    <h1>
      Problem{" "}
      {countries.map((item) => {
        return <li>{item.name}</li>;
      })}
    </h1>
  );
};
export default Problem1;
