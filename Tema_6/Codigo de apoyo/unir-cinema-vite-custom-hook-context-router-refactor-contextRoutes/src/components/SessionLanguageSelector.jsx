import React, { useState } from 'react';

const SessionLanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('español');

  const languages = [
    { value: 'español', label: 'Español' },
    { value: 'catalán', label: 'Catalán' },
    { value: 'inglés', label: 'Inglés (V.O.)' },
    { value: 'inglés-sub', label: 'Inglés Subtitulado' }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  return (
    <div className="cine-selector">
      <label htmlFor="language-select">
        Idioma de la sesión:
      </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SessionLanguageSelector;
