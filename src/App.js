import React, { Component } from "react";
// import "./App.css";
import Home from "./components/home/Home";
import "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import AnimalDetails from "./components/cadastrosDoacao/AnimalDetails";
import AnimalList from "./components/cadastrosDoacao/AnimalList";
// import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/protected-route";
import AdoteList from "./components/adocao/AdoteList";

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
          <Home
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/animal/:id"
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
              component={AdoteList}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Home
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
            <Route
              exact
              path="/adote"
              component={AdoteList}
            />
          </Switch>
          {/* <Home /> */}
        </div>
      );
    }
  }
}

export default App;
