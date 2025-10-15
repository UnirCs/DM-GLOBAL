import React, {useContext} from 'react';
import CineSelector from './CineSelector';
import Pelicula from './Pelicula';
import { useMovies } from '../hooks/useMovies';
import {GlobalContext} from "../context/GlobalContext.jsx";

const Landing = () => {
  const { movies } = useMovies();
    const { city, darkMode, toggleDarkMode } = useContext(GlobalContext);

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
