import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from './pages/Contact';
import Calculator from "./projects/basics/calculator/App";
import Counter from "./projects/basics/counter/App";
import DogGenerator from "./projects/api/dog-generator/App";
import Todo from "./projects/basics/todo/App";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dog-generator" element={<DogGenerator/>}/>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}
