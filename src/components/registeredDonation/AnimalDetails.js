import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getSingleAnimal();
  }

  getSingleAnimal = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/animal/${params.id}`, { withCredentials: true })
      .then(response => {
        console.log('animal carregado', response.data)
        this.setState(response.data, () => { console.log('state depois do carregamento', this.state) });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteAnimal = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/animal/${params.id}`, {
        withCredentials: true
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/cadastro");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { type, gender, name, color, age, size, breed, description, address, city, contacts } =  this.state;
    
    axios.put(`http://localhost:5000/animal/${this.state._id}`, { type, gender, name, color, age, size, breed, description, address, city, contacts }, { withCredentials: true })
      .then(() => {
        this.props.getSingleAnimal();
      })
      .catch(error => console.log(error));
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  };

  render() {
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
          <label>Dados para Contato:</label>
          <input
            type="text"
            name="contacts"
            value={this.state.contacts}
            onChange={e => this.handleChange(e)}
          />
          <label>Outras Informaçōes:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
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

