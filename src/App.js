import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./CounterApp/State/State";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handaleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handaleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handaleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div className="App">
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handaleIncrement}>Increment</button>
      <button onClick={handaleDecrement}>Decrement</button>
      <button onClick={handaleReset}>Reser</button>
    </div>
  );
}

export default App;
