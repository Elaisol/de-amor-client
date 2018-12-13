import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleAnimal();
  }

  getSingleAnimal = () => {
    const { params } = this.props.match;
    // const url = `http://localhost:5000/doe/animal/${params.id}`;
    // console.log('url do get', url) 
    axios
      .get(`http://localhost:5000/doe/animal/${params.id}`, { withCredentials: true })
      .then(responseFromAuth => {
        console.log('animal carregado', responseFromAuth.data)
        this.setState(responseFromAuth.data, () => { console.log('state depois do carregamento', this.state) });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteAnimal = id => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:5000/doe/animal/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromAuth => {
        console.log(responseFromAuth);
        this.props.history.push("/doe");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const filePath =  this.state.filePath;
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
    
    axios.put(`http://localhost:5000/doe/animal/${this.state._id}`, { 
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
      }, { withCredentials: true })
      .then(() => {
        this.props.getSingleAnimal();
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  };

  render() {
        // console.log('render do edit', this.props.state)
    // console.log("state", this.state);
    return (
      <div>
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
        <button onClick={() => this.deleteAnimal(this.state.id)}> Deletar Animal
        </button>
        <Link to={"/cadastro"}>Voltar</Link>
        <hr />
      </div>
    );
  }
}

export default AnimalDetails;
