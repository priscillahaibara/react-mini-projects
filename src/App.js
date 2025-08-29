import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Projects from "./pages/Projects.js";
import Calculator from "./basics/calculator/App.js";
import Counter from "./basics/counter/App.js";
import DogGenerator from "./api/dog-generator/App.js";
import Todo from "./basics/todo/App.js";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dog-generator" element={<DogGenerator/>}/>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}
