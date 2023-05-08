import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Button from "../UI/Button";

const StyledDiv = styled.div`
  background-color: #a892ee;
  width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
  max-width: 95%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

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
        props.items.length !== 0 && (
          <Button onClick={deleteHandler}>Delete Expense</Button>
        )
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

  return <StyledDiv>{content}</StyledDiv>;
};

export default NewExpense;
