import React from "react";
import styles from "./Calculator.module.css";
import ScreenBox from "../ScreenBox/ScreenBox";
import ButtonBox from "../ButtonBox/ButtonBox";
const Calculator = () => {
  return (
    <div className={styles.main}>
      <ScreenBox />
      <ButtonBox />
    </div>
  );
};

export default Calculator;
