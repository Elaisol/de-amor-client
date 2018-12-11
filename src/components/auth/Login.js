import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="email" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
        <p>Não tem cadastro?
            <Link to={'/signup'}> Clique aqui </Link>

        </p>
      </div>
    )
  }
}

export default Login;