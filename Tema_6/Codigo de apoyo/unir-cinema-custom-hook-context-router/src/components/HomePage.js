import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const cinemas = ['madrid', 'barcelona', 'valencia', 'sevilla'];

    return (
        <div className="home-page" style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Seleccione el cine al que desea acceder:</h2>
            <div className="cinema-buttons" style={{ marginTop: '2rem' }}>
                {cinemas.map((cinema) => (
                    <Link key={cinema} to={`/cines/${cinema}`}>
                        <button style={{ margin: '0.5rem', padding: '1rem 2rem' }}>
                            {cinema.charAt(0).toUpperCase() + cinema.slice(1)}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
