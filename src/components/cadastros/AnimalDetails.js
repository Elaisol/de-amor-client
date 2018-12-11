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
    axios.get(`http://localhost:5000/doe/animal/${params.id}`, { withCredentials: true })
      .then(res => {
        this.setState({ theAnimal: res });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
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
    axios.delete(`http://localhost:5000/doe/animal/${params.id}`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.props.history.push('/doe');
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
    return (
      <div>
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
          <div >
            {this.ownershipCheck(this.state)}
          </div>
          <Link to={"/doe"}>Voltar</Link>
        </div>
        <div style={{ width: '40%', float: "right" }}>
          <EditAnimal theAnimal={this.state.theAnimal} />
        </div>
      </div>

    );
  }
}

export default AnimalDetails;
