import styles from "./ExpenseForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateInputHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: (Math.random() * 5).toString(),
      title: title,
      amount: amount,
      date: date,
    };

    props.onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");

    props.onCancelForm(false);
  };

  const cancelFormHandler = () => {
    props.onCancelForm(false);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input
            required
            type="text"
            onChange={titleInputHandler}
            value={title}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
            value={amount}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            onChange={dateInputHandler}
            value={date}
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <Button onClick={cancelFormHandler} type="button">
          Cancel
        </Button>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
