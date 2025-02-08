import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [city, setCity] = useState('madrid');
  const [darkMode, setDarkMode] = useState(false);
  // Nuevo estado para la preferencia de idioma en sesiones
  const [sessionLanguage, setSessionLanguage] = useState("todos"); // "todos", "castellano", "vose"

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const changeCity = (newCity) => {
    setCity(newCity);
  };

  const changeSessionLanguage = (newLanguage) => {
    setSessionLanguage(newLanguage);
  };

  return (
      <GlobalContext.Provider value={{ city, darkMode, sessionLanguage, toggleDarkMode, changeCity, changeSessionLanguage }}>
        {children}
      </GlobalContext.Provider>
  );
};
