import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {

  state = {
    pokeArray: []
  }

  render() {
    return (
      <div className="App">
        <PokemonIndex pokemons={this.state.pokeArray} getData={this.getData} />
      </div>
    )
  }

  getData = (array) => {
    this.setState({
      pokeArray: array
    })
  }


}

export default App
