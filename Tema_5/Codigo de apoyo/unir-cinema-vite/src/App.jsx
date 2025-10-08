import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CineSelector from './components/CineSelector';
import Pelicula from './components/Pelicula';
import {citiesData} from './data/moviesData';

function App() {

    const [selectedCity, setSelectedCity] = useState('barcelona');


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /** Función para cargar las películas con un retardo simulado */
    const loadMovies = async () => {
        setIsLoading(true);

        // Simular retardo de 2 segundos
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Cargar las películas de la ciudad seleccionada
        const currentCityData = citiesData[selectedCity];
        setMovies(currentCityData.movies);
        setIsLoading(false);
    };

    // Simular carga de películas con retraso
    useEffect(() => {
        loadMovies();
    }, [selectedCity]); // Se ejecuta cuando cambia la ciudad seleccionada

    const handleCityChange = (cityKey) => {
        setSelectedCity(cityKey);
    };

    return (
        <div className="App">
            <Header/>

            <div className="landing">
                <CineSelector
                    selectedCity={selectedCity}
                    onCityChange={handleCityChange}
                    cities={citiesData}
                />

                {isLoading ? (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Cargando películas...</p>
                    </div>
                ) : (
                    movies.map((movie) => <Pelicula key={movie.id} movie={movie}/>)
                )}
            </div>

            <Footer/>
        </div>
    );
}

export default App;
