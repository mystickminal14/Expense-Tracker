import React, { useContext } from 'react';
import './comp.css';
import { GlobalContext } from '../Context/Context';

export default function Lists() {
  const { transactions, del } = useContext(GlobalContext);

  return (
    <>
      <div className="history">
        <h4>History</h4>
      </div>
      <ul>
        {transactions.map((val) => {
          const sign = val.amount < 0 ? '-' : '+';
          const transactionClass = val.amount < 0 ? 'lis' : 'lisg'; // Determine the class

          return (
            <li key={val.id}>
              <div className={`lis ${transactionClass}`}>
                <h5>{val.text}</h5>
                <h5>
                  {sign} Rs. {Math.abs(val.amount)}
                </h5>
                <button onClick={() => del(val.id)} className='delete'>❌</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
