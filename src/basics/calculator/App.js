import { useState } from "react";
import { evaluate } from "mathjs";
import styles from './App.module.css';
import PageNav from "../../components/PageNav";

const buttons = [
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "*", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "0", type: "number" },
  { label: "/", type: "operator" },
  { label: "C", type: "action" },
  { label: "=", type: "action" },
];

export default function Calculator() {
  const [input, setInput] = useState("");

  function selectButton(label) {

    if (label === 'C') {
      setInput('')
      return;
    }

    if (label === '=') {
      try {
        const result = evaluate(input);
        setInput(result.toString());
        return;

      } catch (error) {
        setInput('Error');
        return;
      }
    }

    setInput((prev) => {
      if (prev === 'Error') {
        return label;
      } else {
        return prev + label;
      }
    });
  }

  return (
    <main className={styles.main}>
      <PageNav />
      <div className={styles.mainContainer}>
        <div className={styles.calculatorContainer}>
          <div className={styles.display}>{input || 0}</div>
          {buttons.map((button) => (
            <button
              className={styles.button}
              key={button.label}
              onClick={() => selectButton(button.label)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
