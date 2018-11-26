import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  filterPokemon() {
    return this.props.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.props.searchQuery)
    })
  }

  render() {
    return (

      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {
          this.filterPokemon().map(
            (pokemon, index) => {
              return <PokemonCard
                key={index}
                name={pokemon.name}
                hp={pokemon.stats[5].hp}
                frontSprite={pokemon.sprites.front}
                backSprite={pokemon.sprites.back} />
          })  
        }
        </Card.Group>
        )
      }
}

export default PokemonCollection