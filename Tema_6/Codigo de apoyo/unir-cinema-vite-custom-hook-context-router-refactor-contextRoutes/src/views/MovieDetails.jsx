import React from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getMovieById, darkMode } = useMovies();

  const movie = getMovieById(id);
  const selectedDate = searchParams.get('date');

  if (!movie) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="movie-details">
          <h1>Película no encontrada</h1>
          <Link to="/" className="nav-button">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="movie-details">
        <button
          onClick={() => navigate(-1)}
          className="nav-button"
          style={{ marginBottom: '2rem' }}
        >
          ← Volver
        </button>

        <h1>{movie.title}</h1>

        <div className="movie-info-grid">
          <div className="info-item">
            <strong>Género</strong><br/>
            {movie.genre}
          </div>
          <div className="info-item">
            <strong>Duración</strong><br/>
            {movie.duration}
          </div>
          <div className="info-item">
            <strong>Valoración</strong><br/>
            ⭐ {movie.rating}
          </div>
          <div className="info-item">
            <strong>Año</strong><br/>
            {movie.year}
          </div>
          <div className="info-item">
            <strong>Director</strong><br/>
            {movie.director}
          </div>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Reparto:</h3>
          <p>{movie.cast.join(', ')}</p>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Sinopsis:</h3>
          <p>{movie.synopsis}</p>
        </div>

        {selectedDate && (
          <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0', borderRadius: '8px' }}>
            <p><strong>Fecha seleccionada:</strong> {selectedDate}</p>
          </div>
        )}

        <div className="sessions">
          <h3>Seleccionar horario:</h3>
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
      </div>
    </div>
  );
};

export default MovieDetails;
