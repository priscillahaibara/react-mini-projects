const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const containerDisplayStyle = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightblue",
  height: "25rem",
  width: "25rem",
  borderRadius: "20px",
};

const counterDisplayStyle = {
  fontFamily: 'sans-serif',
  fontSize: '8rem',
  marginBottom: '1rem',
}

const containerButtonsStyle = {
  display: 'flex',
  gap: '1rem'
}

const buttonStyle = {
  backgroundColor: '#f5f5f5',
  border: 'none',
  borderRadius: '10px',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '1rem',
  textAlign: 'center',
}

export default function Counter() {
  return (
    <div style={containerStyle}>
      <div style={containerDisplayStyle}>
        <span style={counterDisplayStyle}>0</span>
        <div style={containerButtonsStyle}>
          <button style={buttonStyle}>➕</button>
          <button style={buttonStyle}>Reset</button>
          <button style={buttonStyle}>➖</button>
        </div>
      </div>
    </div>
  );
}
