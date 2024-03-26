import React from "react";
import AddTodo from "../todo/AddTodo";
import Problem1 from "../problems/Problem1";
interface IPROPS {
  name: string;
  email: string;
  age: number;
}

const Customer: React.FC<IPROPS> = ({ name, email, age }) => {
  return (
    <>
      <h1>Customer Details</h1>
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Age:{age}</h3>

      <AddTodo />
      <Problem1 />
    </>
  );
};
export default Customer;
