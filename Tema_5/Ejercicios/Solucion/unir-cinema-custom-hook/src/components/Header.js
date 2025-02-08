import React from 'react';

const Header = ({ city, darkMode, toggleDarkMode }) => {
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <header>
            <div className="header-controls">
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="slider round"></span>
                </label>
            </div>
            <h1>Cine Entradas - {capitalizedCity}</h1>
        </header>
    );
};

export default Header;
