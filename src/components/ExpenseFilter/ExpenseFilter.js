import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const yearSelectedHandler = (event) => {
    props.onGetYear(event.target.value);
  };

  const sortedHandler = (event) => {
    props.onSortedOption(event.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <div className={styles["select-container"]}>
          <select value={props.sorted} onChange={sortedHandler}>
            <option value="Newest">Newest</option>
            <option value="Latest">Latest</option>
            <option value="High">Amount: High to Low</option>
            <option value="Low">Amount: Low to High</option>
          </select>
          <select value={props.yearSelected} onChange={yearSelectedHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="0000">All Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
