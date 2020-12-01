import "./App.css";
import { Header } from "./componenets/Header";
import { Balance } from "./componenets/Balance";
import { IncomeExpense } from "./componenets/incomeExpense";
import { TransactionList } from "./componenets/TransactionList";
import { AddTransaction } from "./componenets/AddTransaction";
import { GlobalProvider } from "./context/globalState";
//import Transactions from "./componenets/Transactions";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
