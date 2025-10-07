import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import { GlobalProvider } from './context/GlobalContext';
import { useMovies } from './hooks/useMovies';

function AppContent() {
  const { darkMode } = useMovies();

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/session/:time" element={<SeatSelection />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppContent />
      </Router>
    </GlobalProvider>
  );
}

export default App;
