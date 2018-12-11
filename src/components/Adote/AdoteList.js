import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTheAnimals: [],
    };
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
    return (
      <div>
        <div style={{ width: '60%', float: "left" }}>
          {this.state.allTheAnimals.map(animal => {
            return (
              <div key={animal._id}>
                <Link to={`/adote/${animal._id}`}>
                  <h3>{animal.name}</h3>
                </Link>
                <p style={{ maxWidth: '400px' }} >{animal.description} </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AdoteList;
