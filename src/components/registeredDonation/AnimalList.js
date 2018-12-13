import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddAnimal from './AddAnimal';

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAnimals: [],
    };
  }

  getAllAnimals = () => {
    axios.get(`http://localhost:5000/cadastro/${this.props.loggedInUser._id}`, {withCredentials:true})
    .then(res => {
      this.setState({
        listOfAnimals: res.data
      });
    });
  }

  componentDidMount() {
    this.getAllAnimals();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <Link to={`animal/${animal._id}`}>
                  <h5>{animal.name}</h5>
                </Link>
                <img src={animal.imageUrl} alt = {animal.name} style={{ width: '50px', height: '70px' }}/> 
                <p >{animal.description} </p>
              </div>
            )
          })}
        </div>
          <div style={{ width: '40%', float: "right" }}>
            <AddAnimal getData={this.getAllAnimals} />
          </div>
      </div>
    )
  }
}
    
export default AnimalList;