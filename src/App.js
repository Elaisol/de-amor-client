import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

import AnimalDetails from "./components/cadastros/AnimalDetails";
import AnimalList from "./components/cadastros/AnimalList";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/protected-route";

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
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/doe/:id"
              component={AnimalDetails}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/doe"
              component={AnimalList}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
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
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/doe/:id"
              component={AnimalDetails}
            />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/doe"
              component={AnimalList}
            />
          </Switch> */}
          <Home />
        </div>
      );
    }
  }
}

export default App;
