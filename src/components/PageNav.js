import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
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
          <NavLink to='/projects' className={styles.ctaLink}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
