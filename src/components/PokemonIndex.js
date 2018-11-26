import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      searchQuery: ''
    }
  }

  async fetchPokemon() {
    const POKEMON_URL = 'http://localhost:3000/pokemon'
    const response = await fetch(POKEMON_URL)
    const data = await response.json()
    return data 
  }

  async componentDidMount() {
    const pokemon = await this.fetchPokemon()
    pokemon.forEach(pokemon => {
      this.setState((prevState) => ({ pokemon: prevState.pokemon.concat(pokemon) }))
    })
  }
  
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} searchQuery={this.state.searchQuery} />
        <br />
        <PokemonForm handleFilter={this.handleFilter} pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonPage