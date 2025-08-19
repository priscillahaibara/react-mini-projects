import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./basics/calculator/App.js";
import Counter from "./basics/counter/App.js";
import DogGenerator from "./api/dog-generator/App.js";
import Todo from "./basics/todo/App.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 style={{textAlign: 'center', margin: '2rem', fontSize: '3rem'}}>Welcome to React Mini Projects!</h1>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dog-generator" element={<DogGenerator/>}/>
        <Route path="/todo" element={<Todo />} />
      </Routes>

      <div style={{height: '100vh'}}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '60rem', margin: '0 auto', cursor: 'pointer' }}>
          <li style={{fontSize: '1.6rem'}}><Link to="/">Home</Link></li>
          <li style={{fontSize: '1.6rem'}}><Link to="/calculator">Calculator</Link></li> 
          <li style={{fontSize: '1.6rem'}}><Link to="/counter">Counter</Link></li> 
          <li style={{fontSize: '1.6rem'}}><Link to="/dog-generator">Dog Generator</Link></li> 
          <li style={{fontSize: '1.6rem'}}><Link to="/todo">Todo</Link></li> 
        </ul>
      </div>
    </Router>
  );
}
