import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const addExpenseHandler = (newExpense) => {
    props.onAddNewExpense(newExpense);
  };

  const openFormHandler = () => {
    setIsAddExpense(true);
  };

  const cancelFormHandler = () => {
    setIsAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddExpense && (
        <button id="new-expense__open-form" onClick={openFormHandler}>
          Add A New Expense
        </button>
      )}
      {isAddExpense && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
