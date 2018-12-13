import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

class AdoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTheAnimals: [],
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  getAllAnimals = () => {
    axios.get(`http://localhost:5000/adote/`)
      .then(res => {
        this.setState({
          allTheAnimals: res.data
        })
      })
  }

  componentDidMount() {
    this.getAllAnimals();
  }

  render() {
    if (this.state.loggedInUser) {
    return (
      <div>
        <div>
          {this.state.allTheAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <h3>{animal.name}</h3>
                <img src={animal.imageUrl} alt = {animal.name} style={{ width: '800px', height: '80px' }}/> 
                <p>{animal.description}</p>
                <Link to={`/`}>Entrar em contato </Link>
              </div>
            )
          })}
        </div>
      </div>
    )} else {
    return (
      <div>
        <div>
          {this.state.allTheAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <h3>{animal.name}</h3>
                <img src={animal.imageUrl} alt = {animal.name} style={{ width: '800px', height: '80px' }}/> 
                <p>{animal.description}</p>
                <Link to={`/login`}>Quero Adotar</Link>
              </div>
            )
          })}
        </div>
      </div>
    )}
  }
}

export default AdoteList;