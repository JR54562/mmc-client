import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "bootswatch/dist/yeti/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Results from "./components/Results";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmedpassword: "",
      userData: [],
      isLoggedIn: false,
      movie: {},
      title: "",
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
  };

  handleSignup = (e) => {
    console.log("signup");
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    axios
      .post("http://localhost:3000/user/signup", data)
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true });
        this.props.history.push(`/user/profile/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // Make api call for movie title
  getMovie = (e) => {
    let title = this.state.title;
    var replaced = title.split(" ").join("+");
    console.log(title, replaced);
    axios
      .get(`http://www.omdbapi.com/?apikey=c145aa9c&t=${replaced}`)
      .then((response) => {
        this.setState({ movie: response.data });
        console.log("this.state.movie", this.state.movie);
      });
  };
  // Login script
  logMeIn = (e) => {
    console.log("login function:");
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    axios
      .post("http://localhost:3000/user/login", data)
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true });
        this.props.history.push(`/user/profile/${response.data.id}`);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // rendering below this line
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Route exact path="/" render={() => <Main />} />
        <Route
          path="/user/signup"
          render={(routerProps) => (
            <Signup
              {...this.state}
              {...routerProps}
              handleChange={this.handleChange}
              handleSignup={this.handleSignup}
            />
          )}
        />
        <Route
          path="/user/login"
          render={(routerProps) => (
            <Login
              {...this.state}
              {...routerProps}
              handleChange={this.handleChange}
              logMeIn={this.logMeIn}
            />
          )}
        />
        <Route
          path="/user/profile/:id"
          render={(routerProps) => (
            <Profile
              {...this.state}
              {...routerProps}
              userData={this.state.userData}
            />
          )}
        />
        <Route
          path="/movies/search"
          render={(routerProps) => (
            <Search
              {...this.state}
              {...routerProps}
              handleChange={this.handleChange}
              getMovie={this.getMovie}
            />
          )}
        />

        <Route
          exact
          path="/movie/detail"
          render={(routerProps) => (
            <Results
              {...this.state}
              {...routerProps}
              movie={this.state.movie}
            />
          )}
        />
      </div>
    );
  }
}
export default withRouter(App);
