import React from "react";
import styles from "./ArithmeticColumn.module.css";
import Button from "../Button/Button";

const ArithmeticColumn = () => {
  const buttons = ["+", "-", "*", "/"];
  return (
    <div className={styles.main}>
      {buttons.map((b) => (
        <Button key={b} label={b} />
      ))}
    </div>
  );
};

export default ArithmeticColumn;
