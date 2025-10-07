import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { moviesDataMadrid } from '../data/moviesDataMadrid';
import { moviesDataBarcelona } from '../data/moviesDataBarcelona';
import { moviesDataValencia } from '../data/moviesDataValencia';
import { moviesDataSevilla } from '../data/moviesDataSevilla';

// Custom hook que utiliza el contexto global y maneja las películas
export const useMovies = () => {
  const { city, darkMode, toggleDarkMode, changeCity } = useContext(GlobalContext);

  // Función para obtener películas según la ciudad
  const getMoviesByCity = (cityName) => {
    switch (cityName) {
      case 'madrid':
        return moviesDataMadrid;
      case 'barcelona':
        return moviesDataBarcelona;
      case 'valencia':
        return moviesDataValencia;
      case 'sevilla':
        return moviesDataSevilla;
      default:
        return moviesDataMadrid;
    }
  };

  // Función para obtener el nombre de la ciudad actual
  const getCurrentCityName = () => {
    switch (city) {
      case 'madrid':
        return 'Madrid';
      case 'barcelona':
        return 'Barcelona';
      case 'valencia':
        return 'Valencia';
      case 'sevilla':
        return 'Sevilla';
      default:
        return 'Madrid';
    }
  };

  // Función para obtener una película por ID
  const getMovieById = (id) => {
    const allMovies = [
      ...moviesDataMadrid,
      ...moviesDataBarcelona,
      ...moviesDataValencia,
      ...moviesDataSevilla
    ];
    return allMovies.find(movie => movie.id === parseInt(id));
  };

  return {
    // Estado del contexto
    city,
    darkMode,

    // Funciones del contexto
    changeCity,
    toggleDarkMode,

    // Datos de películas
    movies: getMoviesByCity(city),
    getCurrentCityName,
    getMovieById
  };
};
