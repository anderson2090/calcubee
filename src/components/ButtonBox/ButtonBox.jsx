import React from "react";
import styles from "./ButtonBox.module.css";
import Button from "../Button/Button";
import DigitsColumn from "../DigitsColumn/DigitsColumn";
import ArithmeticColumn from "../ArithmeticColumn/ArithmeticColumn";

const ButtonBox = () => {
  return (
    <div className={styles.main}>
      <DigitsColumn />
      <ArithmeticColumn />
    </div>
  );
};

export default ButtonBox;
