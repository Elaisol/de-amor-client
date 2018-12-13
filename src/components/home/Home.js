import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import './Home.css';


class Home extends Component {
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
        <nav>
          <ul>
            <li>Olá, {this.state.loggedInUser.name}</li>
            <li><Link to='/cadastro'>Doe</Link></li>
            <li><Link to='/adote'>Adote</Link></li>
            <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Sair</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return ( 
        <nav>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/adote'>Adote</Link></li>
          </ul>
        </nav>
      )
    }
  }
}




// const home = () => {
//   return (
//     <div id="container">
//       <section class="box">
//         <div>
//           <img
//             class="logo"
//             src="images/logo2sol.png"
//             alt="logo"
//             width="300px"
//           />
//         </div>
//         <div class="navigation">
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/adote">Adote</a>
//             </li>
//             <li>
//               <a href="/doe">Doe</a>
//             </li>
//             <li>
//               <a href="/login">Entre</a>
//             </li>
//           </ul>
//         </div>
//         <div
//           id="carouselExampleIndicators"
//           class="carousel slide"
//           data-ride="carousel"
//         >
//           <ol class="carousel-indicators">
//             <li
//               data-target="#carouselExampleIndicators"
//               data-slide-to="0"
//               class="active"
//             />
//             <li data-target="#carouselExampleIndicators" data-slide-to="1" />
//             <li data-target="#carouselExampleIndicators" data-slide-to="2" />
//           </ol>
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img
//                 class="d-block w-100"
//                 src="images/cachorro.jpg"
//                 alt="First slide"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 class="d-block w-100"
//                 src="images/gato.jpg"
//                 alt="Second slide"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 class="d-block w-100"
//                 src="images/coelho (1).jpg"
//                 alt="Third slide"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 class="d-block w-100"
//                 src="images/calopsita (1).jpg"
//                 alt="Second slide"
//               />
//             </div>
//           </div>
//           <a
//             class="carousel-control-prev"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true" />
//             <span class="sr-only">Anterior</span>
//           </a>
//           <a
//             class="carousel-control-next"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true" />
//             <span class="sr-only">Próximo</span>
//           </a>
//         </div>

//         <div class="position">
//           <h1>"Os animais esperam de nós o que nós esperamos dos anjos!"</h1>
//         </div>
//         <div class="footer">
//           <ul>
//             <li class="no_dec">© Copyright 2018</li>
//             <li class="no_dec">Fale Conosco</li>
//             <li class="no_dec">(11)2222-2222</li>
//           </ul>
//           <h4>Venha dar ou receber AMOR ♥ </h4>
//         </div>
//       </section>
//     </div>
//   );
// };

export default Home;

// <div class="box">
//   <div class="perto-logo">
//     <h3>Venha dar ou receber AMOR</h3>
//   </div>
//   <div class="frase">
//     <h1>"Os animais esperam de nós o que nós esperamos dos anjos!"</h1>
//   </div>
//   <div class="footer">
//     <div class="footer-1">
//       <li>
//         <ul>© Copyright 2018</ul>
//         <ul>Fale Conosco</ul>
//         <ul>(11)2222-2222</ul>
//       </li>
//     </div>
//   </div>
// </div>
// "Ninguém nunca vai entender o que você sente e o que você faz, até
// passar pela mesma situação. Vergonha é ver seu animal sofrendo e não
// fazer nada."
