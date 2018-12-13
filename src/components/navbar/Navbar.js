import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

<<<<<<< HEAD
  render(){
    if(this.state.loggedInUser){
      return(//       <li><Link className="navbar-item navbar-link" to='/cadastro/:id'>Doe</Link></li>
      //       <li><Link className="navbar-item navbar-link" to='/adote'>Adote</Link></li>
      //       <li>
      //         <Link className="navbar-item navbar-link" to='/'>
      //           <button onClick={() => this.logoutUser()}>Logout</button>
      //         </Link>
      //       </li>
      //     </ul>
      
      //   </nav>
      // </div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="#" />
            Olá, {this.state.loggedInUser.name}
            <button 
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMainToggler"
              aria-controls="navbarMainToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <section
              className="collapse navbar-collapse"
              id="navbarMainToggler"
            >
              <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link" to="/cadastro/">
                  Doe
                </Link>
                <Link className="nav-item nav-link" to="/adote">
                  Adote
                </Link>
                <Link
                  className="nav-item nav-link"
                  onClick={() => this.logoutUser()}
                  to="/"
                >
                  Sair
                </Link>
              </div>
            </section>
          </nav>

          <footer>
            <container>
              <i className="fab fa-facebook-f" />
              <i className="fab fa-instagram" />
            </container>
          </footer>
        </div>
=======
  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.name}</li>
            <li><Link to='/cadastro' style={{ textDecoration: 'none' }}>Home</Link></li>
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
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89
      )
    }
  }
}
<<<<<<< HEAD

export default Navbar;

//       <li><Link className="navbar-item navbar-link" to='/cadastro/:id'>Doe</Link></li>
//       <li><Link className="navbar-item navbar-link" to='/adote'>Adote</Link></li>
//       <li>
//         <Link className="navbar-item navbar-link" to='/'>
//           <button onClick={() => this.logoutUser()}>Logout</button>
//         </Link>
//       </li>
//     </ul>
=======
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89

//   </nav>
// </div>
      //   } else {
      //     return ( 
      //       <nav className="nav-style">
      //         <ul>
      //           <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
      //           <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
      //         </ul>
      //       </nav>
      //     )
      //   }
      // }
