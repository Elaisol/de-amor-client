import React, { Component } from 'react';
import axios from 'axios';

class AddAnimal extends Component {
  constructor(props){
      super(props);
      this.state = { filePath: "", species: "", sexo: "", name: "", color: "", age: "", size: "", raça: "", description: "", address: "", city: ""};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const filePath = this.state.filePath;
    const type = this.state.type;
    const gender = this.state.gender;
    const name = this.state.name;
    const color = this.state.color;
    const age = this.state.age;
    const size = this.state.size;
    const breed = this.state.breed;
    const description = this.state.description;
    const address = this.state.address;
    const city = this.state.city;

    axios.post("http://localhost:5000/cadastro/", { filePath, type, gender, name, color, age, size, breed, description, address, city }, {withCredentials:true})
    .then( () => {
      this.props.getData();
      this.setState({ filePath: "", species: "", sexo: "", name: "", color: "", age: "", porte: "", raça: "", description: "", address: "", city: ""});
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
          <label>Tipo do Animal:</label>
          <input type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)}/>
          <label>Sexo:</label>
          <input type="text" name="gender" value={this.state.gender} onChange={ e => this.handleChange(e)} />
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Cor:</label>
          <input type="text" name="color" value={this.state.color} onChange={ e => this.handleChange(e)} />
          <label>Idade:</label>
          <input type="number" name="age" value={this.state.age} onChange={ e => this.handleChange(e)}/>
          <label>Porte:</label>
          <input type="text" name="size" value={this.state.size} onChange={ e => this.handleChange(e)} />
          <label>Raça:</label>
          <input type="text" name="breed" value={this.state.breed} onChange={ e => this.handleChange(e)}/>
          <label>Descrição:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <label>Endereço:</label>
          <input type="text" name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddAnimal;