import { useState } from "react";

function useCustom() {
    const [count, setCount] = useState<number>(0);

  const addOne = () => {
    setCount(count + 1);
  };
  const minusOne = () => {
    setCount(count - 1);
  };

  return [counter, addOne, minusOne];
}

export default useCustom;
