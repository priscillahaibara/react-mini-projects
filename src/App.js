import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from './pages/Contact.js';
import Calculator from "./projects/basics/calculator/App.js";
import Counter from "./projects/basics/counter/App.js";
import DogGenerator from "./projects/api/dog-generator/App.js";
import Todo from "./projects/basics/todo/App.js";


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
