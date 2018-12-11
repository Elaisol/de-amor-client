import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render(){
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.name}</li>
            <li><Link to='/doe' style={{ textDecoration: 'none' }}>Doe</Link></li>
            <li><Link to='/adote' style={{ textDecoration: 'none' }}>Adote</Link></li>
            <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return ( 
        <nav className="nav-style">
          <ul>
          {/* <li><Link to='/' style={{ textDecoration: 'none' }}>Sobre Nós</Link></li>
          <li><Link to='/adote' style={{ textDecoration: 'none' }}>Adote</Link></li> */}
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Doe</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Entre</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;
