import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { GlobalContext } from '../context/GlobalContext';

const MovieDetails = () => {
    const { cinema, movieId } = useParams();
    const { movies, loading } = useMovies(cinema);
    const { sessionLanguage } = useContext(GlobalContext);

    if (loading) {
        return (
            <div className="loading-container" style={{ textAlign: 'center', padding: '2rem' }}>
                <div className="spinner"></div>
                <p>Cargando...</p>
            </div>
        );
    }

    const movie = movies.find(m => m.id.toString() === movieId);
    if (!movie) {
        return <div>Pelicula no encontrada.</div>;
    }

    // Filtrar sesiones según la preferencia
    const filteredSessions = sessionLanguage === "todos"
        ? movie.sessions
        : movie.sessions.filter(session => session.language === sessionLanguage);

    return (
        <div className="movie-details" style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>{movie.name}</h2>
            {/* Trailer de ejemplo */}
            <div className="trailer" style={{ margin: '2rem auto', maxWidth: '640px' }}>
                <iframe
                    width="100%"
                    height="360"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actores:</strong> {movie.actors}</p>
            <p><strong>Categorías:</strong> {movie.categories}</p>
            <div className="sessions" style={{ marginTop: '1rem' }}>
                {filteredSessions.map((session, index) => (
                    <Link key={index} to={`/cines/${cinema}/movie/${movie.id}/session/${encodeURIComponent(session.hour)}`}>
                        <button style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                            {session.hour} ({session.language})
                        </button>
                    </Link>
                ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
                <Link to={`/cines/${cinema}`}>
                    <button>Volver a la lista</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieDetails;
