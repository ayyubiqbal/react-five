import useCounter from "./hooks/useCounter";

const CountController = ({ handleInc, handleDec, count }) => {
  return (
    <div>
      <button onClick={handleDec}>-</button>
      <span>{count}</span>
      <button onClick={handleInc}>+</button>
    </div>
  );
};

const App = () => {
  const {
    counter: counter1,
    handleCounterIncrement: handleInc1,
    handleCounterDecrement: handleDec1,
  } = useCounter({ initial: 1, min: 10, max: 25 });

  const {
    counter: counter2,
    handleCounterIncrement: handleInc2,
    handleCounterDecrement: handleDec2,
  } = useCounter({ initial: 5, min: 1, max: 20 });

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1>App</h1>
      <CountController
        count={counter1}
        handleInc={handleInc1}
        handleDec={handleDec1}
      />
      <CountController
        count={counter2}
        handleInc={handleInc2}
        handleDec={handleDec2}
      />
    </div>
  );
};

export default App;
