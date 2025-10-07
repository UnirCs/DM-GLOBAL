import React from 'react';
import CineSelector from '../components/CineSelector';
import Pelicula from '../components/Pelicula';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
  const { movies, darkMode } = useMovies();

  return (
    <div className={`home-page ${darkMode ? 'dark' : ''}`}>
      <CineSelector />

      {movies.map((movie) => (
        <Pelicula key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
