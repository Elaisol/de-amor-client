import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD:src/components/adote/AdoteList.js
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import "./Adote.css";
import Navbar from "../../components/navbar/Navbar";
=======
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89:src/components/adoption/AdoptList.js

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
              <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}
              />
              <div key={animal._id}>

                <h3>{animal.name}</h3>
<<<<<<< HEAD:src/components/adote/AdoteList.js
                <p>{animal.description}</p>
                <Link to={`/`}>Quero Adotar</Link>
=======
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
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89:src/components/adoption/AdoptList.js
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AdoteList;
