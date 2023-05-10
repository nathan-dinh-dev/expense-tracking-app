import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ExpenseItem = (props) => {
  const removeHandler = () => {
    props.onRemove(props.item);
  };

  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.item.date} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.item.title}</h2>
          <div className={styles["expense-item__price"]}>
            ${props.item.amount}
          </div>
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
