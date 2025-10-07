import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { GlobalProvider } from './context/GlobalContext';
import { useMovies } from './hooks/useMovies';

function AppContent() {
  const { darkMode } = useMovies();

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
