import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useMovies} from "../hooks/useMovies.js";

const CineSelector = () => {

    const { city, changeCity } = useContext(GlobalContext);

    //useMovies
    const { getCities } = useMovies();

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
