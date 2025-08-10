import { useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const containerDisplayStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightblue",
  height: "25rem",
  width: "25rem",
  borderRadius: "20px",
};

const counterDisplayStyle = {
  fontFamily: "sans-serif",
  fontSize: "8rem",
  marginBottom: "1rem",
};

const containerButtonsStyle = {
  display: "flex",
  gap: "1rem",
};

const buttonStyle = {
  backgroundColor: "#f5f5f5",
  border: "none",
  borderRadius: "10px",
  padding: "10px",
  cursor: "pointer",
  fontSize: "1rem",
  textAlign: "center",
};

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

  return (
    <div style={containerStyle}>
      <div style={containerDisplayStyle}>
        <span style={counterDisplayStyle}>{count}</span>
        <div style={containerButtonsStyle}>
          <button style={buttonStyle} onClick={() => setCount((c) => c + 1)}>
            ➕
          </button>
          <button style={buttonStyle} onClick={handleReset}>
            Reset
          </button>
          <button style={buttonStyle} onClick={handleDecrease}>
            ➖
          </button>
        </div>
      </div>
    </div>
  );
}
