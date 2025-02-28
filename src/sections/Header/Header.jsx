// Header.jsx
import React, { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting("Good Morning");
      else if (hour < 18) setGreeting("Good Afternoon");
      else setGreeting("Good Evening");
    };

    // Update greeting immediately
    updateGreeting();

    // Set up an interval to update greeting every minute
    const intervalId = setInterval(updateGreeting, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.greetingContainer}>
          <div className={styles.greeting}>{greeting}</div>
        </div>
        <nav className={styles.nav}>
          <div
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </div>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
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
      </div>
    </header>
  );
}

export default Header;
