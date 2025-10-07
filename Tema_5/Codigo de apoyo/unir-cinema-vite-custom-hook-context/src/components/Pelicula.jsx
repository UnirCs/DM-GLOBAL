import React from 'react';

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
          <button key={index}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pelicula;
