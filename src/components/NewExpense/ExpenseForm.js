import styled from "styled-components";
import { useState } from "react";
import Button from "../UI/Button";

const StyleExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const StyleExpenseControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

const StyleExpenseActions = styled.div`
  text-align: right;
`;

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
      <StyleExpenseControls>
        <StyleExpenseControl>
          <label>Title</label>
          <input
            required
            type="text"
            onChange={titleInputHandler}
            value={title}
          />
        </StyleExpenseControl>

        <StyleExpenseControl>
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
            value={amount}
          />
        </StyleExpenseControl>

        <StyleExpenseControl>
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            onChange={dateInputHandler}
            value={date}
          />
        </StyleExpenseControl>
      </StyleExpenseControls>

      <StyleExpenseActions>
        <Button onClick={cancelFormHandler} type="button">
          Cancel
        </Button>

        <Button type="submit">Add Expense</Button>
      </StyleExpenseActions>
    </form>
  );
};

export default ExpenseForm;
