import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { Transactions } from "./Transactions";
//import { GlobalContext } from "../context/globalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
