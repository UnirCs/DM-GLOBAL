import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Coffee House</h1>
            <nav>
                <ul className="nav-list">
                    <li>Inicio</li>
                    <li>Menú</li>
                    <li>Acerca</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
