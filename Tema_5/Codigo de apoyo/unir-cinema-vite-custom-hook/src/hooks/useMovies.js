import { useState, useEffect } from 'react';
import { moviesDataBarcelona } from '../data/moviesDataBarcelona';
import { moviesDataMadrid } from '../data/moviesDataMadrid';
import { moviesDataValencia } from '../data/moviesDataValencia';

// Custom hook para gestionar las películas y ciudades
export const useMovies = () => {
  const [selectedCity, setSelectedCity] = useState('barcelona');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const citiesData = {
    barcelona: {
      name: 'Barcelona',
      movies: moviesDataBarcelona
    },
    madrid: {
      name: 'Madrid',
      movies: moviesDataMadrid
    },
    valencia: {
      name: 'Valencia',
      movies: moviesDataValencia
    }
  };

  // Simular carga de datos cuando cambia la ciudad
  useEffect(() => {
    setLoading(true);

    // Simular una pequeña demora para mostrar el estado de loading
    const timer = setTimeout(() => {
      setMovies(citiesData[selectedCity].movies);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCity]);

  const changeCity = (cityKey) => {
    if (citiesData[cityKey]) {
      setSelectedCity(cityKey);
    }
  };

  const getCurrentCityName = () => {
    return citiesData[selectedCity]?.name || '';
  };

  const getCities = () => {
    return Object.entries(citiesData).map(([key, city]) => ({
      key,
      name: city.name
    }));
  };

  const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
  };

  return {
    selectedCity,
    movies,
    loading,
    changeCity,
    getCurrentCityName,
    getCities,
    getMovieById,
    citiesData
  };
};
