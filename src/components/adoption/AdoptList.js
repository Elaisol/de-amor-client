import React, { Component } from 'react';
import axios from 'axios';

class AdoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTheAnimals: [],
    };
  }

  getAllAnimals = () => {
    axios.get(`http://localhost:5000/adote`)
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
    return (
      <div>
        <div>
          {this.state.allTheAnimals.map(animal => {
            return (
              <div key={animal._id}>

                <h3>{animal.name}</h3>
                <img src={animal.imageUrl} alt = {animal.name} style={{ width: '80px', height: '80px' }}/> 
                <ul>
                <li>{animal.type}</li>
                <li>{animal.gender}</li>
                <li>{animal.color}</li>
                <li>{animal.age}</li>
                <li>{animal.size}</li>
                <li>{animal.breed}</li>
                <li>{animal.location.address}</li>
                <li>{animal.location.city}</li>
                <li>{animal.contacts}</li>
                <li>{animal.description}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AdoteList;
