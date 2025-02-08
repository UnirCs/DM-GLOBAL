import React from 'react';
import CineSelector from './CineSelector';
import Pelicula from './Pelicula';
import {movies} from '../data/moviesData';
import Header from "./Header";
import Footer from "./Footer";

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
