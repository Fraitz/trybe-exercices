import React from 'react';
// import Pokemon from './pokemon.jsx'

class Pokedex extends React.Component {
  render() {
    function Pokemon (pokeInfo) {
        return (
          <div key={pokeInfo.id}>
           <p>{ pokeInfo.name }</p>
           <p>{ pokeInfo.type }</p>
           <p>{`Peso ${pokeInfo.averageWeight.value}, ${pokeInfo.averageWeight.measurementUnit}` }</p>
           <img src={ pokeInfo.image } alt={ pokeInfo.name } />
         </div>
       ) 
      }
    const { pokemonsInfo } = this.props;
    return (
      <div className="pokedex">
        {pokemonsInfo.map((pokemon) => Pokemon(pokemon))}
      </div>
    );
  }
}

export default Pokedex;