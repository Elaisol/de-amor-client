import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div className="format">
          <nav className="navbar navbar-expand-md navbar-light bg-dark">
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
      );
    } else {
      return (
        <div className="format">
          <div className="logo">
            <img src="images/logo2sol.png" alt="logo" width="20%" />
          </div>
          <nav className="navbar navbar-expand-md">
            <div className="navbar-nav pos-nav">
              <Link className="nav-item nav-link nav-dec" to="/">
                Home
              </Link>

              <Link className="nav-item nav-link nav-dec" to="/login">
                Adote
              </Link>

              <Link className="nav-item nav-link nav-dec" to="/login/">
                Doe
              </Link>

              <Link className="nav-item nav-link nav-dec" to="/login">
                Entre
              </Link>
            </div>
          </nav>
          <div className="box-position">
            <div className="position">
              <h1>"Os animais esperam de nós o que nós esperamos dos Anjos"</h1>
            </div>
          </div>
          <div className="box-footer">
            <div className="footer-logout">
              <ul>
                <li className="no_dec">© Copyright 2018</li>
                <li className="no_dec">Fale Conosco</li>
                <li className="no_dec">(11)2222-2222</li>
              </ul>

              <i className="fab fa-facebook-f bolder" />
              <i className="fab fa-instagram bolder" />
              <h4>Venha dar ou receber AMOR ♥ </h4>
            </div>
          </div>
          <div
            id="carouselExampleIndicators carousel-container"
            className="carousel slide "
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 imagem-slide"
                  src="images/cachorro.jpg"
                  alt="Cachorro"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 imagem-slide"
                  src="images/calopsita.jpg"
                  alt="Calopsita"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 imagem-slide"
                  src="images/coelho.jpg"
                  alt="Coelho"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 imagem-slide"
                  src="images/gato-sol.jpg"
                  alt="Gato"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Home;



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import AuthService from '../auth/auth-service';
// import './Home.css';


// class Home extends Component {
//   constructor(props){
//     super(props);
//     this.state = { loggedInUser: null };
//     this.service = new AuthService();
//   }  

//   componentWillReceiveProps(nextProps) {
//     this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
//   }

//   logoutUser = () =>{
//     this.service.logout()
//     .then(() => {
//       this.setState({ loggedInUser: null });
//       this.props.getUser(null);  
//     })
//   }

//   render(){
//     if(this.state.loggedInUser){
//       return(
//         <nav>
//           <ul>
//             <li>Olá, {this.state.loggedInUser.name}</li>
//             <li><Link to='/cadastro'>Doe</Link></li>
//             <li><Link to='/adote'>Adote</Link></li>
//             <li>
//               <Link to='/'>
//                 <button onClick={() => this.logoutUser()}>Sair</button>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )
//     } else {
//       return ( 
//         <nav>
//           <ul>
//             <li><Link to='/login'>Login</Link></li>
//             <li><Link to='/signup'>Signup</Link></li>
//           </ul>
//         </nav>
//       )
//     }
//   }
// }

// export default Home;
