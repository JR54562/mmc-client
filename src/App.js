import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootswatch/dist/yeti/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmedpassword: "",
      userData: [],
      isLoggedIn: false,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
    console.log("username", this.state.username);
    console.log("password", this.state.password);
    console.log("confirm", this.state.confirmedpassword);
  };

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Route exact path="/" render={() => <Main />} />
        <Route
          path="/user/signup"
          render={(routerProps) => (
            (
              <Signup
                {...this.state}
                {...routerProps}
                handleChange={this.handleChange}
                handleSignup={this.handleSignup}
              />              
            )           
          )}
        />
<Route
          path="/user/login"
          render={(routerProps) => (
            (
              <Login
                {...this.state}
                {...routerProps}
                handleChange={this.handleChange}
                handleLogin={this.handleSignup}
              />              
            )           
          )}
        />

      </div>
    );
  }
}
