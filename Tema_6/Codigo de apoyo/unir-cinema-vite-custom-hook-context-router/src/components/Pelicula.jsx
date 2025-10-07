import React from 'react';
import { Link } from 'react-router-dom';

const Pelicula = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <p><strong>Género:</strong> {movie.genre}</p>
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p><strong>Valoración:</strong> {movie.rating}</p>
      <p><strong>Sinopsis:</strong> {movie.synopsis}</p>

      <div className="sessions">
        {movie.showtimes.map((time, index) => (
          <Link
            key={index}
            to={`/movie/${movie.id}/session/${time}`}
            className="sessions button"
          >
            {time}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/movie/${movie.id}`} className="nav-button">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Pelicula;
