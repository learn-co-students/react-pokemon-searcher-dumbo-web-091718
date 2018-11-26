import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    ifClicked: true
  }

  render() {
    const hp = this.props.pokemon.stats.length - 1
    return (
      <Card>
        <div onClick={this.spriteHandler}>
          <div className="image">
            <img src={ this.state.ifClicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back } alt="oh no!" />
          </div>

          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>

          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[hp].value}
            </span>
          </div>

        </div>
      </Card>
    )
  }

  spriteHandler = () => {
    this.setState({
      ifClicked: !this.state.ifClicked
    })
  }


}

export default PokemonCard
