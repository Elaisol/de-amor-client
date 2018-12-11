import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {name: "", username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, username, password } = this.state;

    this.service.signup(name, username, password)
      .then( response => {
        console.log(response);
        this.setState({
          name: "",
          username: "",
          password: "",
        });
        this.props.getUser(response)
        console.log('oi')
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
          <input
            type="string"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

        <label>Email:</label>
          <input
            type="email"
            name="username"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />

          <label>Password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>
          Já é cadastrado?
          <Link to={'/login'}> Faça seu login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
