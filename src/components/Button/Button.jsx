import React from "react";
import styles from "./Button.module.css";
import { useRecoilState } from "recoil";
import { screenNumbersAtom } from "../../store/store";
import { calculateExpression } from "../../utils/utils";

const Button = ({ label, buttonClickListener }) => {
  const [screenNumbers, setScreenNumbers] = useRecoilState(screenNumbersAtom);

  const evaluate = () => {
    const result = calculateExpression(screenNumbers);
    setScreenNumbers([result]);
  };

  const handleClick = () => {
    if (label === "=") {
      evaluate();
    } else if (label === "C") {
      const numbers = [...screenNumbers];
      numbers.pop();
      setScreenNumbers([...numbers]);
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
