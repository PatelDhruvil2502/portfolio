// Header.jsx
import styles from "./HeaderStyles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
