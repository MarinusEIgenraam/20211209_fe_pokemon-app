///////////////////////
//// Build
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

///////////////////////
//// Environmental
import './App.scss';
import PageHero from "./components/layout/PageHero/PageHero";
import PokemonDeck from "./components/Pages/PokemonDeck/PokemonDeck";


function App() {
    return (
        <Router>
            <PageHero/>


            <Routes>
                <Route path="/" element={<PokemonDeck/>}/>
            </Routes>

        </Router>
    );
}

export default App;
