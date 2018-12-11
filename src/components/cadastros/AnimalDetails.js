import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditAnimal from "./EditAnimal";

class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theAnimal: {}
    };
  }

  componentDidMount() {
    this.getSingleAnimal();
  }

  getSingleAnimal = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/doe/${params.id}`, { withCredentials: true })
      .then(responseFromAuth => {
        console.log('animal carregado', responseFromAuth.data)
        this.setState(responseFromAuth.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteAnimal = id => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:5000/doe/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromAuth => {
        console.log(responseFromAuth);
        this.props.history.push("/doe");
      })
      .catch(err => {
        console.log(err);
      });
  };

  ownershipCheck = (animal) => {
    if (this.props.loggedInUser && animal.owner === this.props.loggedInUser._id) {
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button onClick={() => this.deleteProject(this.state._id)}>Delete project</button>
        </div>
      )
    }
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <div> {this.ownershipCheck(this.state)}</div>
        <EditAnimal theAnimal={this.state.theAnimal} />
        <button onClick={() => this.deleteAnimal(this.state._id)}>
          Deletar Animal
        </button>
        <Link to={"/"}>Voltar para o início</Link>
        <div />
      </div>
    );
  }
}
export default AnimalDetails;
