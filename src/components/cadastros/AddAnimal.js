import React, { Component } from 'react';
import axios from 'axios';

class AddAnimal extends Component {
  constructor(props){
      super(props);
      this.state = { species: "", sexo: "", name: "", color: "", age: "", porte: "", raça: "", description: "", address: "", city: ""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const species = this.state.species;
    const sexo = this.state.sexo;
    const name = this.state.name;
    const color = this.state.color;
    const age = this.state.age;
    const porte = this.state.porte;
    const raça = this.state.raça;
    const description = this.state.description;
    // const avatarUrl = this.state.avatarUrl;
    const address = this.state.address;
    const city = this.state.city;

    axios.post("http://localhost:5000/doe", { species, sexo, name, color, age, porte, raça, description, address, city }, {withCredentials:true})
    .then( () => {
      this.setState({ species: "", sexo: "", name: "", color: "", age: "", porte: "", raça: "", description: "", address: "", city: ""});
    })
    .catch( error => console.log( error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-animal">
        <form onSubmit={this.handleFormSubmit}>
          <label>Espécie:</label>
          <input type="text" name="species" value={this.state.species} onChange={ e => this.handleChange(e)}/>
          <label>Sexo:</label>
          <input type="text" name="sexo" value={this.state.sexo} onChange={ e => this.handleChange(e)} />
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Cor:</label>
          <input type="text" name="color" value={this.state.color} onChange={ e => this.handleChange(e)} />
          <label>Idade:</label>
          <input type="number" name="age" value={this.state.age} onChange={ e => this.handleChange(e)}/>
          <label>Porte:</label>
          <input type="text" name="porte" value={this.state.porte} onChange={ e => this.handleChange(e)} />
          <label>Raça:</label>
          <input type="text" name="raça" value={this.state.raça} onChange={ e => this.handleChange(e)}/>
          <label>Descrição:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          {/* <label>Foto:</label>
          <input type="text" name="title" value={this.state.avatarUrl} onChange={ e => this.handleChange(e)}/> */}
          <label>Endereço:</label>
          <input type="text" name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" onClick={() => this.props.getData} />
        </form>
      </div>
    )
  }
}

export default AddAnimal;