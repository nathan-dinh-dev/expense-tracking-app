import Card from "./Card";
import Button from "./Button";
import "./ConfirmModal.css";

const ConfirmModal = (props) => {
  const resetModalHandler = () => {
    props.onReset();
  };

  const deleteHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="backdrop">
      <Card className="modal">
        <header>
          <button onClick={resetModalHandler}>X</button>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={resetModalHandler}>Cancel</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ConfirmModal;
