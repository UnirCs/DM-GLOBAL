import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';

const Header = () => {
  const { getCurrentCityName, darkMode, toggleDarkMode } = useMovies();

  return (
    <header className={darkMode ? 'dark' : ''}>
      <div className="header-content">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>🎬 UNIR Cinema - {getCurrentCityName()}</h1>
        </Link>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
    </header>
  );
};

export default Header;
