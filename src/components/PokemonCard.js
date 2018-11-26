import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick = (e) => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img 
              onClick={this.handleClick}
              src={this.state.clicked ? this.props.backSprite : this.props.frontSprite}
              alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard