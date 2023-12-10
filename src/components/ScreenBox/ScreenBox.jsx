import React from "react";
import styles from "./ScreenBox.module.css";
import { useRecoilState } from "recoil";
import { screenNumbersAtom } from "../../store/store";
import ScreenNumber from "../ScreenNumber/ScreenNumber";

const ScreenBox = () => {
  const [screenNumbers, setScreenNumbers] = useRecoilState(screenNumbersAtom);

  return (
    <div className={styles.main}>
      <ScreenNumber />
    </div>
  );
};

export default ScreenBox;
