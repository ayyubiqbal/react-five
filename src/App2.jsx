import { useEffect, useState } from "react";

let timeInterval = null;

const App = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5);

  useEffect(() => {
    if (count == 5) {
      setLock(true);
    }
    console.log("inside useEffect");
  }, [count]);

  useEffect(() => {
    if (lock && timeInterval === null) {
      timeInterval = setInterval(() => {
        setTimeCount((prev) => prev - 1);
      }, 1000);
    }
    console.log("inside 2nd useEffect");
  }, [lock]);

  useEffect(() => {
    if (timeCount === 0) {
      clearInterval(timeInterval);
      setCount(0);
      setLock(false);
      setTimeCount(5);
      return;
    }
    console.log("Inside 3rd useEffect");
  }, [timeCount]);

  console.log("Count", count, "lock", lock);

  return (
    <div>
      <h1 id="test">Count: {count}</h1>
      <button disabled={lock} id="btn" onClick={() => setCount(count + 1)}>
        Add {lock && `(Locked ${timeCount}s)`}{" "}
      </button>
    </div>
  );
};

export default App;
