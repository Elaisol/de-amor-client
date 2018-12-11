import React, { Component } from 'react';
import axios from 'axios';


class EditAnimal extends Component {
  constructor(props){
    super(props);
    this.state = { filePath: this.props.theAnimal.filePath, type: this.props.theAnimal.type, gender: this.props.theAnimal.gender, name: this.props.theAnimal.name, color: this.props.theAnimal.color, age: this.props.theAnimal.age, size: this.props.theAnimal.size, breed: this.props.theAnimal.breed, description: this.props.theAnimal.description, address: this.props.theAnimal.address, city: this.props.theAnimal.city };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { 
      filePath,
      type,
      gender,
      name,
      color,
      age,
      size,
      breed,
      description,
      address,
      city
    } = this.state;

    axios.put(`http://localhost:5000/doe/${this.props.theAnimal}`, { filePath, type, gender, name, color, age, size, breed, description, address, city }, {withCredentials:true})
    .then( () => {
      // this.props.getTheAnimal();
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <hr />
        <h3>Editar Animal</h3>
        <form onSubmit={this.handleFormSubmit}>
          {/* <label>Imagem</label>
          <input type="file" name="filePath" value={this.state.filePath} onChange={(e) => this.handleChange(e)} /> */}
          <label>Espécie:</label>
          <input type="text" name="type" value={this.state.type} onChange={e => this.handleChange(e)} />
          <label>Sexo:</label>
          <input type="text" name="gender" value={this.state.gender} onChange={e => this.handleChange(e)} />
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Cor:</label>
          <input type="text" name="color" value={this.state.color} onChange={e => this.handleChange(e)} />
          <label>Idade:</label>
          <input type="number" name="age" value={this.state.age} onChange={e => this.handleChange(e)} />
          <label>Porte:</label>
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChange(e)} />
          <label>Raça:</label>
          <input type="text" name="breed" value={this.state.breed} onChange={e => this.handleChange(e)} />
          <label>Endereço:</label>
          <input type="text" name="address" value={this.state.address} onChange={e => this.handleChange(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />
          <label>Descrição:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditAnimal;