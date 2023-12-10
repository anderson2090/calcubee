import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, buttonClickListener }) => {
  const handleClick = () => {
    buttonClickListener(label);
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Button;
