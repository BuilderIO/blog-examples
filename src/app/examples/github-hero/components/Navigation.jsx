import React from "react";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "Blog", href: "#blog" },
    { id: 3, text: "Features", href: "#features" },
  ];

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={styles.navLink}
              aria-current={item.id === 1 ? "page" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
