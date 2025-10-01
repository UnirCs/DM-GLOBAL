import React from 'react';

const CineSelector = () => {
    return (
        <div className="cine-selector">
            <label htmlFor="cine">Selecciona un cine: </label>
            <select id="cine">
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
            </select>
        </div>
    );
};

export default CineSelector;
