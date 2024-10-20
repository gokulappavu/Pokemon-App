import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardComponent.css';

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      const pokemonData = await Promise.all(
        result.results.map(async (pokemon) => {
          const pokemonDetailResponse = await fetch(pokemon.url);
          if (!pokemonDetailResponse.ok) {
            throw new Error(`Failed to fetch details for ${pokemon.name}`);
          }
          return await pokemonDetailResponse.json();
        })
      );
      setData(pokemonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {!data.length && !loading && !error && (
        <div className="info-text">
          <h1>Welcome to the Pokémon Gallery</h1>
          <p>Explore a collection of Pokémon characters below. Click the button to fetch and display their details!</p>
          <button onClick={fetchData} className="fetch-button">Fetch Pokémon Characters</button>
        </div>
      )}
      
      {loading && <p className="loading-text">Loading Pokémon characters...</p>}

      {error && <p className="error-text">Error: {error}</p>}

      {data.length > 0 && (
        <div className="grid-container">
          {data.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="pokemon-card-container">
              <div className="glass-card">
                <div className="card-content">
                  <h2 className="pokemon-name">{pokemon.name}</h2>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
