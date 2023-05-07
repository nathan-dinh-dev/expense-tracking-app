import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ExpenseItem = (props) => {
  const removeHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={styles["expense-item__price"]}>${props.amount}</div>
          {props.isDelete && (
            <Button onClick={removeHandler} id={styles["modify-button"]}>
              Delete
            </Button>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
