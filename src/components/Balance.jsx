import React, { useContext } from "react";
import "./comp.css";
import { GlobalContext } from '../Context/Context';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);


  const total = transactions.reduce((acc, transaction) => {
  console.log(acc)
    return (acc += transaction.amount);

  }, 0).toFixed(2);


  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return (acc += transaction.amount);
    }, 0).toFixed(2);


  const expenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return (acc += transaction.amount);
    }, 0).toFixed(2);

  return (
    <>
      <div className="bal">
        <h3>YOUR BALANCE</h3>
        <h1>Rs. {total}</h1>
      </div>
      <div className="box">
        <div className="inc">
          <h3>Income</h3>
          <h1>Rs. {income}</h1>
        </div>
        <div className="inc">
          <h3>Expenses</h3>
          <h1>Rs. {Math.abs(expenses)}</h1>
        </div>
      </div>
    </>
  );
}
