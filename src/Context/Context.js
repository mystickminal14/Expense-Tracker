import React, { createContext, useReducer, useEffect } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'dele':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'add':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'addStored':
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      dispatch({ type: 'addStored', payload: storedTransactions });
    }
  }, []);

  function del(id) {
    dispatch({
      type: 'dele',
      payload: id,
    });
  }

  function add(transaction) {
    dispatch({
      type: 'add',
      payload: transaction,
    });
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, del, add }}>
      {children}
    </GlobalContext.Provider>
  );
};
