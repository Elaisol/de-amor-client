import React, { Component } from "react";
import Home from "./components/home/Home";
<<<<<<< HEAD
import "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import AnimalDetails from "./components/cadastros/AnimalDetails";
import AnimalList from "./components/cadastros/AnimalList";
=======
import "./components//home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import AnimalDetails from "./components/registeredDonation/AnimalDetails";
import AnimalList from "./components/registeredDonation/AnimalList";
import Navbar from "./components/navbar/Navbar";
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/protected-route";
<<<<<<< HEAD
import AdoteList from "./components/adote/AdoteList";
import Navbar from "./components/navbar/Navbar"
=======
import AdoptList from "./components/adoption/AdoptList";
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
<<<<<<< HEAD
        <div>
           <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />

          <Switch>
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/doe/animal/:id"
=======
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Redirect from="/login" to="/cadastro" />
          <Switch>
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/animal/:id"
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89
              component={AnimalDetails}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/cadastro"
              component={AnimalList}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/adote"
              component={AdoptList}
            />
          </Switch>
        </div>
      );
    } else {
      return (
<<<<<<< HEAD
        <div>
=======
        <div className="App">
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89
          <Switch>
            
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
<<<<<<< HEAD
             <Route
              exact
              path="/adote"
              component={AdoteList}
=======
            {/* <Route
              exact
              path="/adote"
              component={AdoptList}
            /> */}
            <Route
              exact
              path="/"
              component={Home}
>>>>>>> 5980640c452820772d2305c4690c8ffe12fded89
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
