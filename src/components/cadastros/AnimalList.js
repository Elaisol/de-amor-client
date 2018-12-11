import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../auth/auth-service';

import AddAnimal from './AddAnimal';

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAnimals: this.props.loggedInUser.animal,
      user: this.props.loggedInUser
    };
    this.service = new AuthService();
  }

  getPopulatedAnimals = () => {
    this.service.loggedin().then(response => {
      axios.get(`http://localhost:5000/doe/${response._id}`)
        .then(res => {
          this.setState({
            listOfAnimals: res.data
          });
        });

    });
    // axios.get(`http://localhost:5000/loggedin/`)
    // .then(res => {
    //   this.setState({
    //     user: res.data
    //   })
    //   console.log('truta', this.state.user);
    //   }).catch(err => console.log(err));
  }

  getAllAnimals = () => {
    axios.get(`http://localhost:5000/doe`)
      .then(res => {
        this.setState({
          allTheAnimals: res.data
        })
      })
  }

  componentDidMount() {
    this.getPopulatedAnimals();
  }

  render() {
    return (
      <div>
        <div style={{ width: '60%', float: "left" }}>
          {this.state.listOfAnimalsthis && this.state.listOfAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <Link to={`/doe/${animal._id}`}>
                  <h3>{animal.name}</h3>
                </Link>
                <p style={{ maxWidth: '400px' }} >{animal.description} </p>
              </div>
            )
          })
          }
        </div>
        <div style={{ width: '40%', float: "right" }}>
          <AddAnimal getData={this.getAllAnimals} />
        </div>
      </div>
    )
  }
}

export default AnimalList;