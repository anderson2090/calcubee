import React from "react";
import styles from "./ButtonBox.module.css";
import Button from "../Button/Button";

const ButtonBox = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "="];

  return (
    <div className={styles.main}>
      {buttons.map((b) => (
        <Button key={b} label={b} />
      ))}
    </div>
  );
};

export default ButtonBox;
