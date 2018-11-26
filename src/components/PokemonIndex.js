import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const pokes_Url = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {

   state = {
     pokemons: []
   }

   handleSearchChange = (e, { value }) => {
     console.log('valllllll', value)
    this.setState({ value })

    setTimeout(() => {
      //if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(this.state.value, 'i')
      //const isMatch = result => re.test(result.name)

      this.setState({
        //isLoading: false,
        pokemons: this.state.pokemons.filter(p => re.test(p.name))
      })
    }, 300)
  }

  componentDidMount(){
    fetch(pokes_Url)
    .then(res => res.json())
     .then(res => this.setState({
       pokemons: res
     }))


  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
        <br />
        <PokemonForm  />
      </div>
    )
  }
}

export default PokemonPage
