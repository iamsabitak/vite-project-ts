import React from "react";
import CleanUp from "./CleanUpFunc";
import useCustom from "./useCounter";
import ApiHandler from "./ApiHandler";

const Counter: React.FC = () => {
  const { count, addOne, minusOne } = useCustom();
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={addOne}>Increment</button>
      <button onClick={minusOne}>Decrement</button>
      <CleanUp />
      <ApiHandler />
    </div>
  );
};

export default Counter;
