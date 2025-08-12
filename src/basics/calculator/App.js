import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

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
    setInput((prev) => prev + label);

    if (label === 'C') {
      setInput('')
      return;
    }
  }

  return (
    <div className="mainContainer">
      <div className="calculatorContainer">
        <div className="display">{input || 0}</div>

        {buttons.map((button) => (
          <button
            className="button"
            key={button.label}
            onClick={() => selectButton(button.label)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
