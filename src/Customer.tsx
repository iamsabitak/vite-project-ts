import React from "react";

interface DETPROPS {
  name: string;
  email: string;
  age: number;
}

const Customer: React.FC<DETPROPS> = ({ name, email, age }) => {
  return (
    <>
      <h1>Customer Details</h1>
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Age:{age}</h3>
    </>
  );
};
export default Customer;
