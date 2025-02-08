import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const Pelicula = ({ movie, cinema }) => {
    const { sessionLanguage } = useContext(GlobalContext);

    // Filtrar las sesiones según la preferencia (si es "todos", se muestran todas)
    const filteredSessions = sessionLanguage === "todos"
        ? movie.sessions
        : movie.sessions.filter(session => session.language === sessionLanguage);

    return (
        <div className="movie">
            <h2>
                <Link to={`/cines/${cinema}/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {movie.name}
                </Link>
            </h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actores:</strong> {movie.actors}</p>
            <p><strong>Categorías:</strong> {movie.categories}</p>
            <div className="sessions">
                {filteredSessions.map((session, index) => (
                    <Link key={index} to={`/cines/${cinema}/movie/${movie.id}/session/${encodeURIComponent(session.hour)}`}>
                        <button style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                            {session.hour} ({session.language})
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Pelicula;
