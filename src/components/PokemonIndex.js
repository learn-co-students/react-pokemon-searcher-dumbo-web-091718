import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    renderPokes: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      this.setState({
        pokemons: data,
        renderPokes: data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.searchInput(e)} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokes={this.state.renderPokes}/>
      </div>
    )
  }

  searchInput = (e) => {
    console.log(e.target.value);
    let searchArr = [...this.state.pokemons].filter(poke => poke.name.includes(e.target.value))

    this.setState({
      renderPokes: searchArr
    })
  }

}

// <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />

export default PokemonPage
