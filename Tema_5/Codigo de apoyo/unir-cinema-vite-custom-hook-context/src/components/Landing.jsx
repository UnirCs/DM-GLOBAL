import React from 'react';
import CineSelector from './CineSelector';
import Pelicula from './Pelicula';
import { useMovies } from '../hooks/useMovies';

const Landing = () => {
  const { movies, darkMode } = useMovies();

  return (
    <div className={`landing ${darkMode ? 'dark' : ''}`}>
      <CineSelector />

      {movies.map((movie) => (
        <Pelicula key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Landing;
