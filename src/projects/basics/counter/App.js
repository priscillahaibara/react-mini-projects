import { useState } from "react";
import PageNav from "../../../components/PageNav";
import styles from "./App.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }

  function handleIncrease() {
    setCount((c) => c + 1);
  }

  return (
    <main className={styles.main}>
      <PageNav />
      <div className={styles.container}>
        <h1>Counter</h1>
        <div className={styles.containerDisplay}>
          <span className={styles.counterDisplay}>{count}</span>
          <div className={styles.containerButtons}>
            <button
              className={styles.button}
              onClick={handleIncrease}
            >
              ➕
            </button>
            <button className={styles.button} onClick={handleReset}>
              Reset
            </button>
            <button className={styles.button} onClick={handleDecrease}>
              ➖
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
