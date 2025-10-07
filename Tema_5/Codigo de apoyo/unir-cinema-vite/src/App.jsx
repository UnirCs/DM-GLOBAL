import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CineSelector from './components/CineSelector';
import Pelicula from './components/Pelicula';
import { citiesData } from './data/moviesData';

function App() {
  const [selectedCity, setSelectedCity] = useState('barcelona');

  const handleCityChange = (cityKey) => {
    setSelectedCity(cityKey);
  };

  const currentCityData = citiesData[selectedCity];

  return (
    <div className="App">
      <Header />

      <div className="landing">
        <CineSelector
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          cities={citiesData}
        />

        {currentCityData.movies.map((movie) => (
          <Pelicula key={movie.id} movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
