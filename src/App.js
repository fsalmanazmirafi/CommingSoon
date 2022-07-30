import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handaleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handaleDecrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="App">
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handaleIncrement}>Increment</button>
      <button onClick={handaleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
