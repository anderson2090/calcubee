import React from "react";
import styles from "./ArithmeticColumn.module.css";
import Button from "../Button/Button";
import { useRecoilState } from "recoil";
import { screenNumbersAtom } from "../../store/store";
import { isLastElementString } from "../../utils/utils";

const ArithmeticColumn = () => {
  const buttons = ["+", "-", "*", "/"];

  const [screenNumbers, setScreenNumbers] = useRecoilState(screenNumbersAtom);
  const buttonClickListener = (n) => {
    if (
      screenNumbers.length > 0 &&
      n !== screenNumbers[screenNumbers.length - 1]
    ) {
      if (
        (n === "+" || n === "-" || n === "*" || n === "/") &&
        typeof screenNumbers[screenNumbers.length - 1] !== "number"
      ) {
        const numbers = [...screenNumbers];
        numbers.pop();
        setScreenNumbers([...numbers, n]);
      } else {
        setScreenNumbers([...screenNumbers, n]);
      }
    }
  };

  return (
    <div className={styles.main}>
      {buttons.map((b) => (
        <Button key={b} label={b} buttonClickListener={buttonClickListener} />
      ))}
    </div>
  );
};

export default ArithmeticColumn;
