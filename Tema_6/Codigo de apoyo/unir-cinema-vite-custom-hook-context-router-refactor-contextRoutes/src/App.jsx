import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { GlobalProvider } from './context/GlobalContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutUs from './views/AboutUs';
import CinemaDetail from './views/CinemaDetail';
import MovieDetails from './views/MovieDetails';
import Login from './views/Login';
import SeatSelection from './components/SeatSelection';
import { useMovies } from './hooks/useMovies';

// Página de administración protegida
const AdminPage = () => {
  const { darkMode } = useMovies();

  return (
    <PrivateRoute>
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="movie-details">
          <h1>Panel de Administración</h1>
          <p>Contenido solo para administradores</p>

          <div className="movie-info-grid">
            <div className="info-item">
              <strong>Usuarios registrados</strong><br/>
              4 usuarios
            </div>
            <div className="info-item">
              <strong>Películas</strong><br/>
              12 títulos
            </div>
            <div className="info-item">
              <strong>Ciudades</strong><br/>
              4 ubicaciones
            </div>
            <div className="info-item">
              <strong>Reservas hoy</strong><br/>
              156 entradas
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

function AppContent() {
  const { darkMode } = useMovies();

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/cinema/:city"
          element={
            <PrivateRoute>
              <CinemaDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/movie/:id/session/:time"
          element={
            <PrivateRoute>
              <SeatSelection />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <AppContent />
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
