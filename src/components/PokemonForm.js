import React from 'react'
import { Form } from 'semantic-ui-react'
const pokes_Url = "http://localhost:3000/pokemon"

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleChange = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    })  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, hp, frontUrl, backUrl} = this.state
    const defaultPokeAttr = {
      "height": 10,
      "weight": 130,
      "abilities": ["overgrow", "chlorophyll"],
      "moves": [],
      "stats": [{
        "value": 80,
        "name": "special-defense"
      },
      {
        "value": 80,
        "name": "special-attack"
      },
      {
        "value": 63,
        "name": "defense"
      },
      {
        "value": 62,
        "name": "attack"
      },
      {
        "value": 60,
        "name": "speed"
      },
      {
        "value": 60,
        "name": "hp"
      }],
      "types": ["grass", "poison"]
    };

    const newPoke =  {name, sprites: {
      front: frontUrl,
      back: backUrl 
    }, ...defaultPokeAttr}

    console.log('fdfsdfs', newPoke)
    // console.log('dfsfssad', a, 'bbbbbbb', b, 'cccccc',  c)
/*    this.setState({
      name: name,
      hp: hp,
      frontUrl:frontUrl,
      backUrl: backUrl
    })*/
    fetch(pokes_Url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify(newPoke)
    })
  
  }


  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp}onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl}onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
