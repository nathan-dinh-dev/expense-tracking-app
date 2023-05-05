import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [yearFiltered, setYearFilter] = useState("0000");
  const [sortedOption, setSortedOption] = useState("Newest");

  const getYearHandler = (year) => {
    setYearFilter(year);
  };

  const sortedOptionHandler = (option) => {
    setSortedOption(option);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        yearSelected={yearFiltered}
        onGetYear={getYearHandler}
        sorted={sortedOption}
        onSortedOption={sortedOptionHandler}
      />
      <ExpenseList
        items={props.items}
        yearFiltered={yearFiltered}
        sortedOption={sortedOption}
      />
    </Card>
  );
};

export default Expenses;
