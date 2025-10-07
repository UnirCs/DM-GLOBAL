import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';

const Pelicula = ({ movie }) => {
  const { darkMode } = useMovies();

  return (
    <div className={`movie ${darkMode ? 'dark' : ''}`}>
      <h2>{movie.title}</h2>
      <p><strong>Género:</strong> {movie.genre}</p>
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p><strong>Clasificación:</strong> {movie.rating}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Año:</strong> {movie.year}</p>
      <p><strong>Sinopsis:</strong> {movie.synopsis}</p>

      <div className="sessions">
        {movie.showtimes?.map((time, index) => (
          <Link
            key={index}
            to={`/movie/${movie.id}/session/${time}`}
          >
            {time}
          </Link>
        ))}
      </div>

      <Link to={`/movie/${movie.id}`} className="nav-button">
        Ver más detalles
      </Link>
    </div>
  );
};

export default Pelicula;
