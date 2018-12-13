import React, { Component } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload'

class AddAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: null, type: "", gender: "", name: "", color: "", age: "", size: "", breed: "", description: "", address: "", city: "", contacts: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {type, gender, name, color, age, size, breed, description, address, city, contacts, } = this.state;
    
    ImageUpload.addPicture(this.state.imageUrl, { type, gender, name, color, age, size, breed, description, address, city, contacts })
    .then(() => {
      this.props.getData();
      this.setState({ species: "", sexo: "", name: "", color: "", age: "", porte: "", raça: "", description: "", address: "", city: "", contacts: "" });
    })
    .catch(error => console.log(error));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'imageUrl') {
      this.setState({ imageUrl: event.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Foto:</label>
          <input type="file" name="imageUrl" onChange={ e => this.handleChange(e)}/>
          <label>Tipo do Animal:</label>
          <input type="text" name="type" value={this.state.type} onChange={e => this.handleChange(e)} />
          <label>Sexo:</label>
          <input type="text" name="gender" value={this.state.gender} onChange={e => this.handleChange(e)} />
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Cor:</label>
          <input type="text" name="color" value={this.state.color} onChange={e => this.handleChange(e)} />
          <label>Idade:</label>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)} />
          <label>Porte:</label>
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChange(e)} />
          <label>Raça:</label>
          <input type="text" name="breed" value={this.state.breed} onChange={e => this.handleChange(e)} />
          <label>Endereço:</label>
          <input type="text" name="address" value={this.state.address} onChange={e => this.handleChange(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />
          <label>Outras Informaçōes:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <label>Dados para Contato::</label>
          <input type="text" name="contacts" value={this.state.contact} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddAnimal;