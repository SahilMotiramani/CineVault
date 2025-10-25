import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchValue.trim() !== '') {
      navigate(`/search/${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header>
      <nav className={styles.header}>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={`${styles.link} ${styles.logo}`}>CineVault</Link></li>
          <li><Link to="/watch-later" className={styles.link}>Watch Later</Link></li>
          <input id={styles.searchBar} className='inputbox' type="text" placeholder='Search' value={searchValue} onChange={handleChange} onKeyDown={handleKeyPress} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
