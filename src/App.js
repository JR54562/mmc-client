
import React, { Component } from "react";
import "bootswatch/dist/yeti/bootstrap.min.css";
import Header from './components/Header';
import "./App.css";

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

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        </div>
        )
        }
}


