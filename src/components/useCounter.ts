import { useState } from "react";

type UseCustomReturnType = {
  count: number;
  addOne: () => void;
  minusOne: () => void;
};

function useCustom(): UseCustomReturnType {
  const [count, setCount] = useState<number>(0);

  const addOne = (): void => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const minusOne = (): void => {
    setCount((prevCount: number) => prevCount - 1);
  };

  return { count, addOne, minusOne };
}

export default useCustom;
