import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearFiltered, setYearFilter] = useState("0000");
  const [sortedOption, setSortedOption] = useState("Newest");

  const getYearHandler = (year) => {
    setYearFilter(year);
  };

  const sortedOptionHandler = (option) => {
    setSortedOption(option);
  };

  const yearFilteredArray = () => {
    if (parseInt(yearFiltered) === 0) return props.items;
    return props.items.filter(
      (item) => item.date.getFullYear() === parseInt(yearFiltered)
    );
  };

  const removeHandler = (itemID) => {
    props.onRemove(itemID);
  };

  return (
    <Card className="expenses">
      <ExpensesChart items={yearFilteredArray()} />
      <ExpenseFilter
        yearSelected={yearFiltered}
        onGetYear={getYearHandler}
        sorted={sortedOption}
        onSortedOption={sortedOptionHandler}
      />
      <ExpenseList
        items={yearFilteredArray()}
        yearFiltered={yearFiltered}
        sortedOption={sortedOption}
        isDelete={props.isDelete}
        onRemove={removeHandler}
      />
    </Card>
  );
};

export default Expenses;
