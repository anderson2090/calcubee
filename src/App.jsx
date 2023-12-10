import React from "react";
import styles from "./App.module.css";
import Calculator from "./components/Calculator/Calculator";
const App = () => {
  return (
    <div className={styles.main}>
      <Calculator />
    </div>
  );
};

export default App;
