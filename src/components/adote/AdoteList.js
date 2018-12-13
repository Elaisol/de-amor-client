import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import "./Adote.css";
import Navbar from "../../components/navbar/Navbar";

class AdoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTheAnimals: [],
      user: this.props.loggedInUser
    };
    this.service = new AuthService();
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
        <div>
          {this.state.allTheAnimals.map(animal => {
            return (
              <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}
              />
              <div key={animal._id}>
                <h3>{animal.name}</h3>
                <p>{animal.description}</p>
                <Link to={`/`}>Quero Adotar</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AdoteList;