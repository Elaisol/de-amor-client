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
        avatarUrl: this.props.theAnimal.avatarUrl,
        address: this.props.thAnimal.address, 
        city: this.props.theAnimal.city
    }
  }

    
  handleFormSubmit = (event) => {
    const species = this.state.species;
    const sexo = this.state.sexo;
    const name = this.state.name;
    const color = this.state.color;
    const age = this.state.age;
    const porte = this.state.porte;
    const raça = this.state.raça;
    const description = this.state.description;
    const avatarUrl = this.state.avatarUrl;
    const address = this.state.address;
    const city = this.state.city;;

    event.preventDefault();

    axios.put(`http://localhost:5000/doe/doe/${this.props.theAnimal._id}`, { species, sexo, name, color, age, porte, raça, description, avatarUrl, address, city }, {withCredentials:true})
    .then( () => {
        this.props.getTheAnimal();
    })
    .catch( error => console.log(error) )
  }

  handleChangeSpecies = (event) => {  
    this.setState({
      species:event.target.value
    })
  }

  handleChangeSexo = (event) => {  
    this.setState({
      sexo:event.target.value
    })
  }

  handleChangeName = (event) => {  
    this.setState({
      name:event.target.value
    })
  }

  handleChangeColor = (event) => {  
    this.setState({
      color:event.target.value
    })
  }

  handleChangeAge = (event) => {  
    this.setState({
      age:event.target.value
    })
  }

  handleChangePorte = (event) => {  
    this.setState({
      porte:event.target.value
    })
  }

  handleChangeRaça = (event) => {  
    this.setState({
      raça:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }

  handleChangeAvatar = (event) => {  
    this.setState({
      avatarUrl:event.target.value
    })
  }

  handleChangeAddress = (event) => {  
    this.setState({
      address:event.target.value
    })
  }

  handleChangeCity = (event) => {  
    this.setState({
      city:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Editar Animal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Espécie:</label>
          <input type="text" name="species" value={this.state.species} onChange={e => this.handleChangeSpecies(e)}/>
          <label>Sexo:</label>
          <textarea name="sexo" value={this.state.sexo} onChange={e => this.handleChangeSexo(e)} />
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChangeName(e)}/>
          <label>Cor:</label>
          <textarea name="cor" value={this.state.cor} onChange={e => this.handleChangeColor(e)} />
          <label>Idade:</label>
          <input type="text" name="age" value={this.state.age} onChange={e => this.handleChangeAge(e)}/>
          <label>Porte:</label>
          <textarea name="porte" value={this.state.porte} onChange={e => this.handleChangePorte(e)} />
          <label>Raça:</label>
          <input type="text" name="raça" value={this.state.raça} onChange={e => this.handleChangeRaça(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          <label>Foto:</label>
          <input type="text" name="avatar" value={this.state.avatarUrl} onChange={e => this.handleChangeAvatar(e)}/>
          <label>Endereço:</label>
          <textarea name="address" value={this.state.address} onChange={e => this.handleChangeAddress(e)} />
          <label>Cidade:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChangeCity(e)}/>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditAnimal;