import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const SessionLanguageSelector = () => {
    const { sessionLanguage, changeSessionLanguage } = useContext(GlobalContext);

    const handleChange = (e) => {
        changeSessionLanguage(e.target.value);
    };

    return (
        <div className="session-language-selector" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <label htmlFor="sessionLanguage">Filtrar sesiones por idioma: </label>
            <select id="sessionLanguage" value={sessionLanguage} onChange={handleChange}>
                <option value="todos">Todos</option>
                <option value="castellano">Castellano</option>
                <option value="vose">VOSE</option>
            </select>
        </div>
    );
};

export default SessionLanguageSelector;
