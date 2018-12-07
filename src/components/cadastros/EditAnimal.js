import React, { Component } from 'react';
import axios from 'axios';

class EditAnimal extends Component {
  constructor(props){
    super(props);
    this.state = {
      species: this.props.theAnimal.species, 
      sexo: this.props.theAnimal.sexo,
      name: this.props.theAnimal.name,
      color: this.props.theAnimal.color, 
      age: this.props.theAnimal.age,
      porte: this.props.theAnimal.porte,
      raça: this.props.theAnimal.raça, 
      description: this.props.theAnimal.description,
      // avatarUrl: this.props.theAnimal.avatarUrl,
      address: this.props.theAnimal.address, 
      city: this.props.theAnimal.city
    }
  }

    
  handleFormSubmit = (event) => {
    const { species,
    sexo,
    name,
    color,
    age,
    porte,
    raça,
    description,
    avatarUrl,
    address,
    city} = this.state;

    event.preventDefault();

    axios.put(`http://localhost:5000/doe/${this.props.theAnimal._id}`, { species, sexo, name, color, age, porte, raça, description, avatarUrl, address, city }, {withCredentials:true})
    .then( () => {
        this.props.getTheAnimal();
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Editar Animal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Espécie:</label>
          <input type="text" name="species" value={this.state.species} onChange={e => this.handleChange(e)}/>
          <label>Sexo:</label>
          <textarea name="sexo" value={this.state.sexo} onChange={e => this.handleChange(e)} />
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <label>Cor:</label>
          <textarea name="cor" value={this.state.cor} onChange={e => this.handleChange(e)} />
          <label>Idade:</label>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)}/>
          <label>Porte:</label>
          <textarea name="porte" value={this.state.porte} onChange={e => this.handleChange(e)} />
          <label>Raça:</label>
          <input type="text" name="raça" value={this.state.raça} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <label>Foto:</label>
          <input type="text" name="avatar" value={this.state.avatarUrl} onChange={e => this.handleChange(e)}/>
          <label>Endereço:</label>
          <textarea name="address" value={this.state.address} onChange={e => this.handleChange(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)}/> 
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditAnimal;