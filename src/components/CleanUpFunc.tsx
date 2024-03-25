import React, { useEffect, useState } from "react";
const CleanUp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const greet = () => {
      console.log("Ni_hao");
    };
    document.addEventListener("click", greet);
    return () => {
      document.removeEventListener("click", greet);
      console.log("removed");
    };
  }, [count]);
  return (
    <>
      <h1>Clean Up</h1>
      <button onClick={increment}>Increment</button>
      <span>Count: {count}</span>
    </>
  );
};
export default CleanUp;
