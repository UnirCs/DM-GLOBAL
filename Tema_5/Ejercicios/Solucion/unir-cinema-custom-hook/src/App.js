import React, { useState } from 'react';
import Header from './components/Header';
import CineSelector from './components/CineSelector';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
    const [city, setCity] = useState('madrid');
    const [darkMode, setDarkMode] = useState(false);

    const handleCityChange = (newCity) => {
        setCity(newCity);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header city={city} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <CineSelector city={city} onCityChange={handleCityChange} />
            <Landing city={city} darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    );
}

export default App;
