import Card from "./Card";
import Button from "./Button";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
  const resetModalHandler = () => {
    props.onReset();
  };

  const deleteHandler = () => {
    props.onConfirm();
  };

  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header>
          <button onClick={resetModalHandler}>X</button>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={resetModalHandler}>Cancel</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ConfirmModal;
