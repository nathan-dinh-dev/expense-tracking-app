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

  const yearFilteredArray = () => {
    if (parseInt(props.yearFiltered) === 0) return sorting(props.items);
    return sorting(
      props.items.filter(
        (item) => item.date.getFullYear() === parseInt(props.yearFiltered)
      )
    );
  };

  return (
    <ul className="expense-list">
      {yearFilteredArray().map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
