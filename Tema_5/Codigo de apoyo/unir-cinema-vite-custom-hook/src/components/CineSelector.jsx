import React from 'react';

const CineSelector = ({ selectedCity, onCityChange, cities, currentCityName }) => {
  return (
    <div className="cine-selector">
      <label htmlFor="city-select">
        Selecciona tu ciudad: {currentCityName && `(Actual: ${currentCityName})`}
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city.key} value={city.key}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CineSelector;
