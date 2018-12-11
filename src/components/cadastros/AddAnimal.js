import React, { Component } from 'react';
import axios from 'axios';

class AddAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = { filePath: "", type: "", gender: "", name: "", color: "", age: "", size: "", breed: "", description: "", address: "", city: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { filePath, type, gender, name, color, age, size, breed, description, address, city } = this.state;

    axios.post("http://localhost:5000/doe/:id", { filePath, type, gender, name, color, age, size, breed, description, address, city }, { withCredentials: true })
      .then(() => {
        this.props.getData();
        this.setState = ({ filePath: "", type: "", gender: "", name: "", color: "", age: "", size: "", breed: "", description: "", address: "", city: "" });
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleChangeFile(e) {
  //   this.setState({
  //     filePath: e.target.filePath[0],
  //     pictureUrl: URL.createObjectURL(e.target.filePath[0])
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Imagem</label>
          <input type="file" name="filePath" value={this.state.filePath} onChange={(e) => this.handleChange(e)} />
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

export default AddAnimal;