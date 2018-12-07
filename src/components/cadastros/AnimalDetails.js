import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditAnimal from "./EditAnimal";


class AnimalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.species, 
      sexo: this.props.sexo,
      name: this.props.name,
      color: this.props.color, 
      age: this.props.age,
      porte: this.props.porte,
      raça: this.props.raça, 
      description: this.props.description,
      avatarUrl: this.props.avatarUrl,
      address: this.props.address, 
      city: this.props.city
    };
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const username = this.state.username;
  //   const password = this.state.password;

  //   this.service.login(username, password)
  //   .then( response => {
  //       this.setState({ username: "", password: "" });
  //       this.props.getUser(response)
  //   })
  //   .catch( error => console.log(error) )
  // }
    
  // handleChange = (event) => {  
  //   const {name, value} = event.target;
  //   this.setState({[name]: value});
  // }


  componentDidMount() {
    this.getSingleAnimal();
  }

  getSingleAnimal = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/doe/${params.id}`, {withCredentials:true})
      .then(responseFromAuth => {
        const theAnimal = responseFromAuth.data;
        this.setState(theAnimal);
        console.log(this.state);
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
    return (
      <div>
        {/* <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
      <div> </div> */}
      <EditAnimal
        theAnimal={this.state}
        getTheAnimal={this.getSingleAnimal}
      />
        <button onClick={() => this.deleteAnimal(this.state._id)}>Deletar Animal</button>
        <Link to={"/doe"}>Voltar para o início</Link>
      </div>
    );
  }
}
export default AnimalDetails;
