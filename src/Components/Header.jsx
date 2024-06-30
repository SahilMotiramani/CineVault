import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const magniicon = "https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"

function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={`${styles.link} ${styles.logo}`}>CineVault</Link></li>
          <li><Link to="/movies" className={styles.link}>Movies</Link></li>
          <li><Link to="/tv" className={styles.link}>TV</Link></li>
          <input id={styles.searchBar} type="text" placeholder='Search'/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
