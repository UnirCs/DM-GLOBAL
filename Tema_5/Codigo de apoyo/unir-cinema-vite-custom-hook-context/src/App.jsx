import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import {GlobalContext, GlobalProvider} from './context/GlobalContext';
import { useMovies } from './hooks/useMovies';

function AppContent() {

    const { darkMode } = useContext(GlobalContext);

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
