import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const {pokemons} = this.props //destructed 
    const mappedPokes = pokemons.map(poke =>{
      return <PokemonCard poke={poke}/>
    });
    return (
      <Card.Group itemsPerRow={6}>
         {mappedPokes}
      </Card.Group>
    )
  }
}

export default PokemonCollection
