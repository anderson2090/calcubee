import React from "react";
import sytles from "./DigitsColumn.module.css";
import Button from "../Button/Button";

const DigitsColumn = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "="];

  return (
    <div className={sytles.main}>
      {buttons.map((b) => (
        <Button key={b} label={b} />
      ))}
    </div>
  );
};

export default DigitsColumn;
