import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useMovies } from '../hooks/useMovies';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const { darkMode } = useMovies();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login - usuarios de ejemplo
    if (username === 'admin' && password === 'admin') {
      setUser({ name: 'Administrador', role: 'admin' });
      navigate('/');
    } else if (username === 'user' && password === 'user') {
      setUser({ name: 'Usuario', role: 'user' });
      navigate('/');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <p>Accede a tu cuenta de UNIR Cinema</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>

        <div className="login-help">
          <p><strong>Usuarios de prueba:</strong></p>
          <p>Admin: usuario = "admin", contraseña = "admin"</p>
          <p>Usuario: usuario = "user", contraseña = "user"</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
