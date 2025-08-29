import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import img from "../assets/coding.png";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <main className={styles.projects}>
      <PageNav />
      <section className={styles.section}>
        <div>
          <h1>Projects List</h1>
          <ul>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/dog-generator">Dog Generator</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </div>
        <img
          src={img}
          alt="girl coding on laptop"
          className={styles.projectsImg}
        />
      </section>
    </main>
  );
}

export default Projects;
