import React from 'react';

const CineSelector = ({ selectedCity, onCityChange, cities }) => {
  return (
    <div className="cine-selector">
      <label htmlFor="city-select">Selecciona tu ciudad:</label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
      >
        {Object.entries(cities).map(([key, city]) => (
          <option key={key} value={key}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CineSelector;
