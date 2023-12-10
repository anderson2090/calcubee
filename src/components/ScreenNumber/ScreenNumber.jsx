import React from "react";
import styles from "./ScreenNumber.module.css";
const ScreenNumber = ({ label }) => {
  return <div className={styles.main}>{label}</div>;
};

export default ScreenNumber;
