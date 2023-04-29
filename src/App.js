import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "BOOK",
    amount: 12.99,
    date: new Date(2019, 2, 14),
  },
  {
    id: "e2",
    title: "Desk",
    amount: 30.99,
    date: new Date(2019, 8, 12),
  },
  {
    id: "e3",
    title: "Table",
    amount: 34.99,
    date: new Date(2020, 2, 30),
  },
  {
    id: "e4",
    title: "Paper",
    amount: 2.99,
    date: new Date(2021, 1, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      newExpense.date = new Date(newExpense.date.replace(/-/g, "/"));
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
