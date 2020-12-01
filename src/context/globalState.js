import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initialState
const initialState = {
  transactions: [],
};

//context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispacth] = useReducer(AppReducer, initialState);
  //actions
  function deleteTransaction(id) {
    dispacth({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispacth({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
