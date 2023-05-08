import styled from "styled-components";

const ExpenseDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
`;

const ExpenseMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const ExpenseDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExpenseYear = styled.div`
  font-size: 0.75rem;
`;

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <ExpenseDateDiv>
      <ExpenseMonth>{month}</ExpenseMonth>
      <ExpenseDay>{day}</ExpenseDay>
      <ExpenseYear>{year}</ExpenseYear>
    </ExpenseDateDiv>
  );
};

export default ExpenseDate;
