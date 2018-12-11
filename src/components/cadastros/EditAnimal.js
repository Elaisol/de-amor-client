import React, { Component } from "react";
import axios from "axios";

class EditAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: this.props.theAnimal.filePath,
      type: this.props.theAnimal.type,
      gender: this.props.theAnimal.gender,
      name: this.props.theAnimal.name,
      color: this.props.theAnimal.color,
      age: this.props.theAnimal.age,
      size: this.props.theAnimal.size,
      breed: this.props.theAnimal.breed,
      description: this.props.theAnimal.description,
      address: this.props.theAnimal.address,
      city: this.props.theAnimal.city
    };
  }

  handleFormSubmit = event => {
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

    event.preventDefault();

    axios
      .put(
        `http://localhost:5000/doe/animal/${this.props.theAnimal.id}`,
        {
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
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getTheAnimal();
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  };

  // handleChangeSexo = event => {
  //   this.setState({
  //     sexo: event.target.value
  //   });
  // };

  // handleChangeName = event => {
  //   this.setState({
  //     name: event.target.value
  //   });
  // };

  // handleChangeColor = event => {
  //   this.setState({
  //     color: event.target.value
  //   });
  // };

  // handleChangeAge = event => {
  //   this.setState({
  //     age: event.target.value
  //   });
  // };

  // handleChangePorte = event => {
  //   this.setState({
  //     porte: event.target.value
  //   });
  // };

  // handleChangeRaça = event => {
  //   this.setState({
  //     raça: event.target.value
  //   });
  // };

  // handleChangeDesc = event => {
  //   this.setState({
  //     description: event.target.value
  //   });
  // };

  // handleChangeAvatar = event => {
  //   this.setState({
  //     avatarUrl: event.target.value
  //   });
  // };

  // handleChangeAddress = event => {
  //   this.setState({
  //     address: event.target.value
  //   });
  // };

  // handleChangeCity = event => {
  //   this.setState({
  //     city: event.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <hr />
        <h3>Editar Animal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Tipo do Animal:</label>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={e => this.handleChange(e)}
          />
          <label>Sexo:</label>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={e => this.handleChange(e)}
          />
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Cor:</label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={e => this.handleChange(e)}
          />
          <label>Idade:</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={e => this.handleChange(e)}
          />
          <label>Porte:</label>
          <input
            type="text"
            name="size"
            value={this.state.size}
            onChange={e => this.handleChange(e)}
          />
          <label>Raça:</label>
          <input
            type="text"
            name="breed"
            value={this.state.breed}
            onChange={e => this.handleChange(e)}
          />
          <label>Descrição:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <label>Endereço:</label>
          <textarea
            name="address"
            value={this.state.address}
            onChange={e => this.handleChange(e)}
          />
          <label>Cidade:</label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditAnimal;
