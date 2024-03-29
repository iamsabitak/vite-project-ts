import React, { useState, useMemo, useCallback } from "react";
import Stepperr from "./Stepperr";

const MemoizationExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const greet = () => {
    console.log("Hello");
    setCount(count + 1);
  };
  // Example of useMemo
  //   const doubleCount = () => {
  //     console.log("Calculating doubleCount");

  //     return count * 2;
  //   };
  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount");
    return count * 2;
  }, [count]); // Recalculates only when count changes

  // Example of useCallback
  const incrementCount = useCallback(() => {
    console.log("Incrementing count");
    setCount((prevCount) => prevCount + 1);
  }, []); // Recreated only when the component is re-rendered

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Double Count: {doubleCount}</h2>
      <button onClick={incrementCount}>Increment Count</button>

      <button onClick={greet}>Hello</button>
      <Stepperr />
    </div>
  );
};

export default MemoizationExample;
