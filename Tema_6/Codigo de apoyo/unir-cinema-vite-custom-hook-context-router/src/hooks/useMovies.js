import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { moviesDataBarcelona } from '../data/moviesDataBarcelona';
import { moviesDataMadrid } from '../data/moviesDataMadrid';
import { moviesDataSevilla } from '../data/moviesDataSevilla';
import { moviesDataValencia } from '../data/moviesDataValencia';

// Custom hook que utiliza el contexto global y maneja las películas
export const useMovies = () => {
  const { city, darkMode, toggleDarkMode, changeCity } = useContext(GlobalContext);

  const citiesData = {
    barcelona: {
      name: 'Barcelona',
      movies: moviesDataBarcelona
    },
    madrid: {
      name: 'Madrid',
      movies: moviesDataMadrid
    },
    sevilla: {
      name: 'Sevilla',
      movies: moviesDataSevilla
    },
    valencia: {
      name: 'Valencia',
      movies: moviesDataValencia
    }
  };

  const getCurrentMovies = () => {
    return citiesData[city]?.movies || [];
  };

  const getCurrentCityName = () => {
    return citiesData[city]?.name || '';
  };

  const getCities = () => {
    return Object.entries(citiesData).map(([key, cityData]) => ({
      key,
      name: cityData.name
    }));
  };

  const getMovieById = (id) => {
    // Buscar en todas las ciudades para encontrar la película por ID
    const allMovies = Object.values(citiesData).flatMap(cityData => cityData.movies);
    return allMovies.find(movie => movie.id === parseInt(id));
  };

  const getAllMovies = () => {
    return Object.values(citiesData).flatMap(cityData => cityData.movies);
  };

  return {
    // Estado del contexto
    city,
    darkMode,

    // Funciones del contexto
    changeCity,
    toggleDarkMode,

    // Datos de películas
    movies: getCurrentMovies(),
    getCurrentCityName,
    getCities,
    getMovieById,
    getAllMovies,
    citiesData
  };
};
