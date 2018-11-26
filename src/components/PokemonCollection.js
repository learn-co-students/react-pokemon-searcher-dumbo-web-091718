import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // 'this.props.pokes' will either give entire data or filtered data
    let pokeArr = this.props.pokes.map(pokeObj => {
      return (
        <div>
          <PokemonCard pokemon={pokeObj} />
        </div>
      )
    })

    return (
      // <Card.Group itemsPerRow={6}>
      <div>
        <h1>Hello From Pokemon Collection</h1>
        {pokeArr}
      </div>
      // </Card.Group>
    )
  }
}

export default PokemonCollection
