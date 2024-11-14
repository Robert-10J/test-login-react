import { useEffect, useState } from 'react';
import Header from '../components/Header'
import useAuthRedirect from '../hooks/useAuthRedirect'
import { DataPokemon, DataPokemones } from '../types';
import CardPokemon from '../components/CardPokemon';

const Homepage = () => {
  useAuthRedirect('/homepage');
  const [pokemones, setPokemones] = useState<DataPokemon[]>([]);

  useEffect(() => {
    function fetchPokemonData(pokemon: DataPokemones) {
      let url = pokemon.url;

      fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
          setPokemones(prevPokemones => [...prevPokemones, pokeData]);
        })
        .catch(error => console.error(error))
    }

    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
      .then(function (allPokemon) {
        allPokemon?.results?.forEach(function (pokemon: DataPokemones) {
          fetchPokemonData(pokemon)
        });
      })
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
      <Header />

      <main className='container mt-5'>
        <div className='row gap-4 align-items-center justify-content-center'>
          {pokemones.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))
          }
        </div>
      </main>
    </>
  )
}

export default Homepage