import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditAnimal from "./EditAnimal";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleAnimal();
  }

  getSingleAnimal = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/doe/${params.id}`, {withCredentials:true})
      .then(responseFromAuth => {
        const theAnimal = responseFromAuth.data;
        this.setState(theAnimal);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditAnimal = () => {
    if (!this.state.name) {
      this.getSingleAnimal();
    } else {
      return (
        <EditAnimal
          theAnimal={this.state}
          getTheAnimal={this.getSingleAnimal}
        />
      );
    }
  };

   deleteAnimal = (id) => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/doe/${params.id}`, {withCredentials:true})
    .then( responseFromAuth =>{
        console.log(responseFromAuth);
        this.props.history.push('/doe');       
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditAnimal()} </div>
        <button onClick={() => this.deleteAnimal(this.state._id)}>Deletar Animal</button>
        <Link to={"/"}>Voltar para o início</Link>
      </div>
    );
  }
}
export default AnimalDetails;
