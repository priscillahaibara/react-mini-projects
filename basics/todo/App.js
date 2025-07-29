export default function App() {
  return (
    <>
      <Header />
      <Input />
      <TaskList />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>To-do List</h1>
    </div>
  );
}

function Input() {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add your task..."
        className="task-input"
      ></input>
      <button className="add-button">Add</button>
    </div>
  );
}

function TaskList() {
  return(
    <div className="results-container">
      <ul>

      </ul>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      You have completed X tasks
    </div>
  )
}
