import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
      id={props.id}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
