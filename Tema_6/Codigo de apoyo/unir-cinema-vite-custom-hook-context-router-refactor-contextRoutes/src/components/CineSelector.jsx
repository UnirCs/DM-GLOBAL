import React from 'react';
import { useMovies } from '../hooks/useMovies';

const CineSelector = () => {
  const { city, changeCity, darkMode } = useMovies();

  const cities = [
    { value: 'madrid', label: 'Madrid' },
    { value: 'barcelona', label: 'Barcelona' },
    { value: 'valencia', label: 'Valencia' },
    { value: 'sevilla', label: 'Sevilla' }
  ];

  return (
    <div className={`cine-selector ${darkMode ? 'dark' : ''}`}>
      <label htmlFor="city-select">
        Selecciona tu ciudad:
      </label>
      <select
        id="city-select"
        value={city}
        onChange={(e) => changeCity(e.target.value)}
      >
        {cities.map((cityOption) => (
          <option key={cityOption.value} value={cityOption.value}>
            {cityOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CineSelector;
