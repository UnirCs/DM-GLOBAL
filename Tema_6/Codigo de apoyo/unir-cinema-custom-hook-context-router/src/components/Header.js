import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useParams, Link } from 'react-router-dom';

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(GlobalContext);
    const { cinema } = useParams();
    const currentCinema = cinema ? (cinema.charAt(0).toUpperCase() + cinema.slice(1)) : '';

    // Lista de cines disponibles
    const cinemas = ["madrid", "barcelona", "valencia", "sevilla"];

    return (
        <header className="header">
            <div className="header-left">
                <h1>UNIR Cinema {currentCinema && `- ${currentCinema}`}</h1>
            </div>
            <nav className="header-menu">
                {cinemas.map(c => (
                    <Link
                        key={c}
                        to={`/cines/${c}`}
                        className={`menu-item ${cinema === c ? "active" : ""}`}
                    >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                    </Link>
                ))}
                {/* Se coloca el slider al lado del último cine */}
                <div className="dark-mode-toggle">
                    <label className="switch">
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </nav>
        </header>
    );
};

export default Header;
