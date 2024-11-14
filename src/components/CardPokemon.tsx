import { DataPokemon } from '../types';

const CardPokemon = ({ pokemon }: { pokemon: DataPokemon}) => {
  return (
    <div key={pokemon.name} className='col-3 p-1 shadow d-flex flex-column justify-content-center align-items-center'>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className='rounded mx-auto d-block img-thumbnail'/>
      <ul>
        {pokemon.abilities.map(ability => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2 className='text-capitalize'>{pokemon.name}</h2>
    </div>
  )
}

export default CardPokemon