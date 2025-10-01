import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Specials from './components/Specials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App(props) {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Menu />
            <Specials />
            <About />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
