import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddAnimal from './AddAnimal';

class AnimalList extends Component {
  constructor(props){
      super(props);
      this.state = { 
        listOfAnimals: []
      };
  }

  getAllAnimals = () =>{
    axios.get(`http://localhost:5000/cadastro/${this.props.loggedInUser._id}`, {withCredentials:true})
    .then(responseFromDoe => {
      this.setState({
        listOfAnimals: responseFromDoe.data
      })
    })
  }

  componentDidMount() {
    this.getAllAnimals();
  }

  render(){
    return(
      <div>
        <div>
          { this.state.listOfAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <Link to={`/doe/animal/${animal._id}`}>
                  <h3>{animal.name}</h3>
                </Link>
                <p>{animal.description} </p>
              </div>
            )})
          }
        </div>
        <div>
            <AddAnimal getData={this.getAllAnimals}/>
        </div>
      </div>
    )
  }
}

export default AnimalList;