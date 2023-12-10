import React from "react";
import styles from "./Button.module.css";
import { useRecoilState } from "recoil";
import { screenNumbersAtom } from "../../store/store";
import { calculateExpression } from "../../utils/utils";

const Button = ({ label, buttonClickListener }) => {
  const [screenNumbers, setScreenNumbers] = useRecoilState(screenNumbersAtom);

  const evaluate = () => {
    const result = calculateExpression(screenNumbers);
    console.log(result);
  };

  const handleClick = () => {
    if (label === "=") {
      evaluate();
    } else {
      buttonClickListener(label);
    }
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Button;
