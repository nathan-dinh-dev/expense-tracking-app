import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const NewCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;

const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;

  & h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    & h2 {
      font-size: 1.25rem;
    }
  }
`;

const ExpenseItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

const NewButton = styled.button`
  font: inherit;
  cursor: pointer;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 0rem;

  padding: 0.6rem 0.8rem;
  outline: 1px solid white;

  &:active {
    transform: translateY(-0.15rem);
    outline: 1px solid red;
    color: red;
  }

  @media (min-width: 580px) {
    margin-right: 1rem;
  }
`;

const ExpenseItem = (props) => {
  const removeHandler = () => {
    props.onRemove(props.item);
  };

  return (
    <li>
      <NewCard>
        <ExpenseDate date={props.item.date} />
        <ExpenseItemDescription>
          <h2>{props.item.title}</h2>
          <ExpenseItemPrice>${props.item.amount}</ExpenseItemPrice>
          {props.isDelete && (
            <NewButton onClick={removeHandler}>Delete</NewButton>
          )}
        </ExpenseItemDescription>
      </NewCard>
    </li>
  );
};

export default ExpenseItem;
