import React from 'react';
import CineSelector from './CineSelector.jsx';
import Pelicula from './Pelicula.jsx';
import {movies} from '../data/moviesData';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Landing = () => {
    return <>
        <Header/>
        <main className="landing">
            <CineSelector/>
            {movies.map((movie) => (
                <Pelicula key={movie.id} movie={movie}/>
            ))}
        </main>
        <Footer/>
    </>;
};

export default Landing;
