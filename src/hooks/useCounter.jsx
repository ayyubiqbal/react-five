import { useState } from "react";

const useCounter = ({ initial = 0, min = 0, max = 10 }) => {
  const [counter, setCounter] = useState(initial);

  const handleCounterIncrement = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleCounterDecrement = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    handleCounterIncrement,
    handleCounterDecrement,
  };
};

export default useCounter;
