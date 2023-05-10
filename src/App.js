import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ConfirmModal from "./components/UI/ConfirmModal";

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
  const [isDelete, setIsDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      newExpense.date = new Date(newExpense.date.replace(/-/g, "/"));
      return [newExpense, ...prevState];
    });
  };

  const deleteHandler = (deleteStatus) => {
    setIsDelete(deleteStatus);
  };

  const removeHandler = (item) => {
    setDeleteItem(item);
  };

  const resetModalHandler = () => {
    setDeleteItem(null);
  };

  const confirmDeleteHandler = () => {
    setDeleteItem(null);
    setExpenses((prevState) =>
      prevState.filter((expense) => expense.id !== deleteItem.id)
    );
  };

  return (
    <div>
      {deleteItem && (
        <ConfirmModal
          title="Are You Sure?"
          message={`This action cannot be undone. "${deleteItem.title}" with amount of $${deleteItem.amount} will be deleted permanently.`}
          onReset={resetModalHandler}
          onConfirm={confirmDeleteHandler}
        />
      )}
      <NewExpense
        onAddNewExpense={addNewExpenseHandler}
        items={expenses}
        onDelete={deleteHandler}
      />
      <Expenses items={expenses} isDelete={isDelete} onRemove={removeHandler} />
    </div>
  );
}

export default App;
