import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useState } from "react";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.ctaLink}>
            Projects
          </NavLink>
        </li>
      </ul>
      <button className={styles.navToggle} onClick={toggleMenu}>
        <ion-icon className={styles.iconMenu} name="menu-outline" style={{ opacity: isOpen ? 0 : 1 }} ></ion-icon>
        <ion-icon className={styles.iconClose} name="close-outline" style={{ opacity: isOpen ? 1 : 0 }} ></ion-icon>
      </button>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
}

export default PageNav;
