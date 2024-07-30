import React from 'react';
import styles from './Header.module.css'; // Create a CSS module for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>KukuFM</div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
