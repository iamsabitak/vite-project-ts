import React, { useState } from "react";
const CleanUp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <h1>Clean Up</h1>
      <button onClick={increment}>Increment</button>
      <span>Count: {count}</span>
    </>
  );
};
export default CleanUp;
