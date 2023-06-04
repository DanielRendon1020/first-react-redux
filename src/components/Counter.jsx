import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [customValue, setCustomValue] = useState(0);

  const onCustomSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setCustomValue(0);
    dispatch(incrementByAmount(Number(customValue)));
  };


  return (
    <div>
      <h1 style={{ fontSize: "5rem", textAlign: "center", marginTop: "1rem"  }}>{count}</h1>
      <div className="button-container">
        <button onClick={(e) => dispatch(increment())}>Increment</button>
        <button onClick={(e) => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <form onSubmit={onCustomSubmit}>
          <input
            type="number"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
          />
          <button >Custom Update</button>
        </form>
      </div>
    </div>
  );
}
