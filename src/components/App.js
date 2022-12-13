import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div id="main">
      <span id="counter">{state}</span>
      <button
        id="increment-btn"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
