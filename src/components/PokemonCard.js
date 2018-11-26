import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    src: this.props.poke.sprites.front
  }

  showBack = () => {
   const back = this.props.poke.sprites.back
    this.setState({
      src: back
    })
  }
  render() {
   // console.log('ardddddd', this.props.poke)
    const poke = this.props.poke
    const pokeHp = poke.stats.find(p => p.name == "hp");
    return (
   
      <Card>
        <div onClick={this.showBack}>
          <div className="image">
            <img src={this.state.src} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {pokeHp.name} - {pokeHp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
