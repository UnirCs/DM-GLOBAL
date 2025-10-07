import React from 'react';
import { useMovies } from '../hooks/useMovies';

const Header = () => {
  const { getCurrentCityName, darkMode, toggleDarkMode } = useMovies();

  return (
    <header className={darkMode ? 'dark' : ''}>
      <div className="header-content">
        <h1>🎬 UNIR Cinema - {getCurrentCityName()}</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
    </header>
  );
};

export default Header;
