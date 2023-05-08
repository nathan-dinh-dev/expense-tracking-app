import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const NotFound = styled.h4`
  color: white;
  padding-left: 0.5rem;
`;

const NewUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpenseList = (props) => {
  const sorting = (data) => {
    if (props.sortedOption === "Newest")
      return data.sort(
        (b, a) =>
          a.date.getFullYear() * 365 +
          a.date.getMonth() * 31 +
          a.date.getDate() -
          (b.date.getFullYear() * 365 +
            b.date.getMonth() * 31 +
            b.date.getDate())
      );
    else if (props.sortedOption === "Latest")
      return data.sort(
        (a, b) =>
          a.date.getFullYear() * 365 +
          a.date.getMonth() * 31 +
          a.date.getDate() -
          (b.date.getFullYear() * 365 +
            b.date.getMonth() * 31 +
            b.date.getDate())
      );
    else if (props.sortedOption === "High")
      return data.sort((b, a) => a.amount - b.amount);
    else if (props.sortedOption === "Low")
      return data.sort((a, b) => a.amount - b.amount);
  };

  const removeHandler = (itemID) => {
    props.onRemove(itemID);
  };

  if (props.items.length === 0) return <NotFound>No expenses found.</NotFound>;

  return (
    <NewUl>
      {sorting(props.items).map((item) => (
        <ExpenseItem
          id={item.id}
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          isDelete={props.isDelete}
          onRemove={removeHandler}
        />
      ))}
    </NewUl>
  );
};

export default ExpenseList;
