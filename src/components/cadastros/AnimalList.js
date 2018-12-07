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
    axios.get(`http://localhost:5000/doe/${this.props.loggedInUser._id}`, {withCredentials:true})
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
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <Link to={`/doe/${animal._id}`}>
                  <h3>{animal.name}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{animal.description} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddAnimal getData={this.getAllAnimals}/>
        </div>
      </div>
    )
  }
}

export default AnimalList;