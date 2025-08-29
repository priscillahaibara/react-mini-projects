import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
