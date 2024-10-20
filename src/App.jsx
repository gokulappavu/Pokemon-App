import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardComponent from './components/CardComponent';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<CardComponent />} />
        <Route path="pokemon/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </>
  );
};

export default App;
