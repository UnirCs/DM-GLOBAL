import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SeatSelection = () => {
    const { cinema, movieId, sessionHour } = useParams();
    const rows = 10;
    const cols = 10;

    // Inicializamos una matriz 10x10 con 'false' (no seleccionado)
    const initialSeats = Array.from({ length: rows }, () => Array(cols).fill(false));
    const [seats, setSeats] = useState(initialSeats);

    const toggleSeat = (row, col) => {
        const newSeats = seats.map((r, i) =>
            r.map((seat, j) => (i === row && j === col ? !seat : seat))
        );
        setSeats(newSeats);
    };

    return (
        <div className="seat-selection" style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Selecciona tus asientos</h2>
            <p><strong>Cine:</strong> {cinema.charAt(0).toUpperCase() + cinema.slice(1)}</p>
            <p><strong>Pelicula ID:</strong> {movieId}</p>
            <p><strong>Hora:</strong> {sessionHour}</p>
            <div className="screen" style={{ margin: '1rem auto', width: '60%', padding: '0.5rem', backgroundColor: '#ccc' }}>
                Pantalla
            </div>
            <div className="seats" style={{ display: 'inline-block' }}>
                {seats.map((row, i) => (
                    <div key={i} style={{ display: 'flex' }}>
                        {row.map((seat, j) => (
                            <div
                                key={j}
                                onClick={() => toggleSeat(i, j)}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    margin: '5px',
                                    backgroundColor: seat ? '#007bff' : '#ddd',
                                    cursor: 'pointer',
                                    border: '1px solid #999'
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
                <button>Comprar Entradas</button>
            </div>
            <div style={{ marginTop: '1rem' }}>
                <Link to={`/cines/${cinema}/movie/${movieId}`}>
                    <button>Volver a la película</button>
                </Link>
            </div>
        </div>
    );
};

export default SeatSelection;
