import React, { useState, useContext } from "react";
import "./comp.css";
import { GlobalContext } from "../Context/Context";

export default function Transaction() {
  const { add } = useContext(GlobalContext);
  const [val, newVal] = useState("");
  const [val2, newVal2] = useState(0);

  const valued = (e) => {
    newVal(e.target.value);
  };

  const Submi = (e) => {
    e.preventDefault();


    const newt = {
      id: Math.floor(Math.random() * 10000000),
      text: val,
      amount: parseInt(val2), 
    };

   
    add(newt);

   
    newVal("");
    newVal2(0);
  };

  return (
    <>
      <div className="history">
        <h4>Add new Transaction</h4>
      </div>
      <form onSubmit={Submi}>
        <div className="form">
          <label htmlFor="text" className="t">
            Text
          </label>
          <input
            type="text"
            onChange={valued}
            value={val}
            placeholder="Enter text..."
          />
        </div>
        <div className="form">
          <label htmlFor="text" className="t">
            Amount <br />
            (negative: expense, positive: income)
          </label>
          <input
            type="number"
            onChange={(e) => newVal2(e.target.value)}
            value={val2}
            placeholder="Enter amount..."
          />
        </div>
        <button className="add">Add transaction</button>
      </form>
    </>
  );
}
