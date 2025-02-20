import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2>Inicio</h2>;
}

function AcercaDe() {
    return <h2>Acerca de</h2>;
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                {/* Uso de <Link> para una navegación sin recarga completa */}
                <Link to="/">Inicio</Link> | <Link to="/acerca">Acerca de</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acerca" element={<AcercaDe />} />
            </Routes>
        </BrowserRouter>
    );
}