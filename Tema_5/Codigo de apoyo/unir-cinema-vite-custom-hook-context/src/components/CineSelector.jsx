import React from 'react';
import { useMovies } from '../hooks/useMovies';

const CineSelector = () => {
  const { city, changeCity, getCities } = useMovies();

  return (
    <div className="cine-selector">
      <label htmlFor="city-select">
        Selecciona tu ciudad:
      </label>
      <select
        id="city-select"
        value={city}
        onChange={(e) => changeCity(e.target.value)}
      >
        {getCities().map((cityOption) => (
          <option key={cityOption.key} value={cityOption.key}>
            {cityOption.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CineSelector;
