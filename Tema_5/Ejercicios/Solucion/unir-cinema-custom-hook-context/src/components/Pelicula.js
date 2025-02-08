import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Pelicula = ({ movie }) => {
    const { sessionLanguage } = useContext(GlobalContext);

    // Filtrar las sesiones según la preferencia:
    // Si sessionLanguage es "todos", se muestran todas; de lo contrario, solo las que coinciden.
    const filteredSessions = sessionLanguage === "todos"
        ? movie.sessions
        : movie.sessions.filter(session => session.language === sessionLanguage);

    return (
        <div className="movie">
            <h2>{movie.name}</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actores:</strong> {movie.actors}</p>
            <p><strong>Categorías:</strong> {movie.categories}</p>
            <div className="sessions">
                {filteredSessions.map((session, index) => (
                    <button key={index}>
                        {session.hour} ({session.language})
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pelicula;
