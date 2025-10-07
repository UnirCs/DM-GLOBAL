import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CineSelector from './components/CineSelector';
import Pelicula from './components/Pelicula';
import { useMovies } from './hooks/useMovies';

function App() {
  const {
    selectedCity,
    movies,
    loading,
    changeCity,
    getCurrentCityName,
    getCities
  } = useMovies();

  return (
    <div className="App">
      <Header />

      <div className="landing">
        <CineSelector
          selectedCity={selectedCity}
          onCityChange={changeCity}
          cities={getCities()}
          currentCityName={getCurrentCityName()}
        />

        {loading ? (
          <div className="loading">
            Cargando películas de {getCurrentCityName()}...
          </div>
        ) : (
          movies.map((movie) => (
            <Pelicula key={movie.id} movie={movie} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
