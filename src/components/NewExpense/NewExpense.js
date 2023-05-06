import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Button from "../UI/Button";

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const addExpenseHandler = (newExpense) => {
    props.onAddNewExpense(newExpense);
  };

  const openFormHandler = () => {
    setIsAddExpense(true);
  };

  const cancelFormHandler = () => {
    setIsAddExpense(false);
  };

  const deleteHandler = () => {
    setIsDelete((prevState) => {
      props.onDelete(!prevState);
      return !prevState;
    });
  };

  let content = (
    <div>
      {!isDelete && (
        <Button onClick={openFormHandler}>Add A New Expense</Button>
      )}
      {!isDelete ? (
        <Button
          onClick={deleteHandler}
          className={`${props.items.length === 0 ? "disable" : ""}`}
        >
          Delete Expense
        </Button>
      ) : (
        <Button onClick={deleteHandler}>Done</Button>
      )}
    </div>
  );

  if (isAddExpense)
    content = (
      <ExpenseForm
        onAddExpense={addExpenseHandler}
        onCancelForm={cancelFormHandler}
      />
    );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
