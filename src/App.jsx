import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import "./App.css";

function App() {
  const [count, changecount] = useState(0);
  const [inputvalue, setinvalue] = useState(0);
  const [Inputs, setin] = useState("");

  function increase() {
    changecount(count + 1);
  }
  function decrement() {
    if (count < 20) {
      setinvalue(inputvalue - 1);
    }
    
  }

  return (
    <>
      <h1>Count</h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase count</button>

      <h1>Decrement</h1>
      <h1>{inputvalue}</h1>
      <button onClick={decrement}>decrease count</button>

      <h1>Text Writing</h1>
      <input
        type="text"
        value={Inputs}
        onChange={(e) => setin(e.target.value)}
      ></input>

      <h1>{Inputs}</h1>
    </>
  );
}

export default App;
