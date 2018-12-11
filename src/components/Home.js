import React from "react";

const home = () => {
  return (
    <div id="container">
      <section class="box">
        <div>
          <img
            class="logo"
            src="images/logo2sol.png"
            alt="logo"
            width="300px"
          />
        </div>
        <div class="navigation">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/adote">Adote</a>
            </li>
            <li>
              <a href="/doe">Doe</a>
            </li>
            <li>
              <a href="/login">Entre</a>
            </li>
          </ul>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="images/cachorro.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="images/gato.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="images/coelho (1).jpg"
                alt="Third slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="images/calopsita (1).jpg"
                alt="Second slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Anterior</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Próximo</span>
          </a>
        </div>

        <div class="position">
          <h1>"Os animais esperam de nós o que nós esperamos dos anjos!"</h1>
        </div>
        <div class="footer">
          <ul>
            <li class="no_dec">© Copyright 2018</li>
            <li class="no_dec">Fale Conosco</li>
            <li class="no_dec">(11)2222-2222</li>
          </ul>
          <h4>Venha dar ou receber AMOR ♥ </h4>
        </div>
      </section>
    </div>
  );
};

export default home;

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
