import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Modal = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 15%;
  width: 70%;
  background-color: white;
  padding: 1rem;

  header h2 {
    text-align: center;
    margin: 0;
  }

  header {
    text-align: right;
  }

  header button:hover,
  header button:active {
    border: 1px solid #ccc;
  }

  header button {
    font-size: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
    margin: 0;
    background: none;
    outline: none;
    border: none;
  }

  @media (min-width: 768px) {
    width: 30rem;
    left: calc(50% - 15rem);
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Actions = styled.footer`
  text-align: center;
`;

const ConfirmModal = (props) => {
  const resetModalHandler = () => {
    props.onReset();
  };

  const deleteHandler = () => {
    props.onConfirm();
  };

  return (
    <BackDrop>
      <Modal>
        <header>
          <button onClick={resetModalHandler}>X</button>
          <h2>{props.title}</h2>
        </header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Actions>
          <Button onClick={resetModalHandler}>Cancel</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </Actions>
      </Modal>
    </BackDrop>
  );
};

export default ConfirmModal;
