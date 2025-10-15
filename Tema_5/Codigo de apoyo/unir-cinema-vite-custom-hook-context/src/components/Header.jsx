import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";

const Header = () => {

    const {city, darkMode, toggleDarkMode} = useContext(GlobalContext);

    return (
        <header className={darkMode ? 'dark' : ''}>
            <div className="header-content">
                <h1>🎬 UNIR Cinema - {city}</h1>
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
                </button>
            </div>
        </header>
    );
};

export default Header;
