import React from "react";
import sytles from "./DigitsColumn.module.css";
import Button from "../Button/Button";
import { useRecoilState } from "recoil";
import { screenNumbersAtom } from "../../store/store";

const DigitsColumn = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  const [screenNumbers, setScreenNumbers] = useRecoilState(screenNumbersAtom);
  const buttonClickListener = (n) => {
    setScreenNumbers([...screenNumbers, n]);
  };

  return (
    <div className={sytles.main}>
      {buttons.map((b) => (
        <Button key={b} label={b} buttonClickListener={buttonClickListener} />
      ))}
      <Button label={"="} />
      <Button label={"C"} />
    </div>
  );
};

export default DigitsColumn;
