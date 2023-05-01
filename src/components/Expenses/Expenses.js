import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [yearFiltered, setYearFilter] = useState("2019");
  const getYearHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter yearSelected={yearFiltered} onGetYear={getYearHandler} />
      {props.items
        .filter((item) => item.date.getFullYear() === parseInt(yearFiltered))
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
