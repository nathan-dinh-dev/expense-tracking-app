import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

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

  if (props.items.length === 0)
    return <h4 className="expense-list__not-found">No expenses found.</h4>;

  return (
    <ul className="expense-list">
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
    </ul>
  );
};

export default ExpenseList;
