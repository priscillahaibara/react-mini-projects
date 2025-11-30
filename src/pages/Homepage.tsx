import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Welcome to React Mini Projects!</h1>
        <h2>Here you can explore the projects I’ve created while learning and growing as a Front-End developer.</h2>
        <Link to='/projects' className="cta">View Projects</Link>
      </section>
    </main>
  );
}

export default Homepage;
