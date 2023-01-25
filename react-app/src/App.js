import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((cur) => cur + 1);
    setCount((cur) => cur + 1);
    setCount((cur) => cur + 1);
    setCount((cur) => cur + 1);
    setCount((cur) => cur + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <button onClick={handleCount}>누름</button>
      {count}
    </div>
  );
}

export default App;
