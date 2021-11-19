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
import Collection from "./components/Collection";
import "bootstrap-table/dist/bootstrap-table.min.css"


let BASE_URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3000";
} else {
  BASE_URL = "https://my-movies-jr.herokuapp.com";
}

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
      user_id: "",
      movies: {},
      delMovie:"",
    };
  }

  deleteMovie = (e) => {
    console.log("deleteMovie")
    const delMovie = this.state.movies[0].id
    console.log(delMovie)
    axios.delete(`${BASE_URL}/movie/${delMovie}`)
    .then((response) => {
      console.log(response);
      // need to refresh the collection!
      // this.getCollection() //
    })
    .catch((error) => {
      console.log(error);
    });
}

  addMovie = (e) => {
    console.log("adding movie", this.state.movie);
    const movies = {
      user_id: this.state.user_id,
      title: this.state.movie.Title,
      year: this.state.movie.Year,
      rating: this.state.movie.Rated,
      runtime: this.state.movie.Runtime,
      genre: this.state.movie.Genre,
      actors: this.state.movie.Actors,
      plot: this.state.movie.Plot,
      poster: this.state.movie.Poster,
      box_office: this.state.movie.BoxOffice
    };
    console.log('this is the new movie added', movies)
    axios.post(`${BASE_URL}/movie/`, movies)
    .then((response) => {
      console.log(response);
      this.props.history.push(`/user/profile/${response.data.user_id}`); // change to movie index
    })
    .catch((error) => {
      console.log(error);
    });
};

  getCollection = (e) => {
    console.log(e.target.dataset.id);
    axios.get(`${BASE_URL}/user/profile/${e.target.dataset.id}/movies`)
      .then((response) => {
        console.log(response);
        this.setState({ movies: response.data });
        console.log("this.state.movies", this.state.movies);
        this.props.history.push('/profile/:index/movies');
        })
      .catch((error) => {
        console.log(error);
      });
  }


  handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
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
      .post(`${BASE_URL}/user/signup`, data)
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true, user_id: response.data.id});
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
      .post(`${BASE_URL}/user/login`, data)
      .then((response) => {
        console.log(response);
        this.setState({ isLoggedIn: true, user_id: response.data.id });
        this.props.history.push(`/user/profile/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Change PW script
pwChange = (e) => {
  console.log("pwChange function:");
  e.preventDefault();
  const data = {
    username: this.state.username,
    password: e.target.password.value,
  };
  console.log(data);
  axios.put(`${BASE_URL}/user/profile/${e.target.id}`, data)
    .then((response) => {
      console.log(response);
      this.setState({ isLoggedIn: true });
      this.props.history.push(`/user/profile/${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("finished pw change")
};

  // rendering below this line
render(){
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
              handleChange={this.handleChange}
              pwChange={this.pwChange}
              getCollection={this.getCollection}
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
              addMovie={this.addMovie}
            />
          )}
        />

<Route
          exact
          path="/profile/:index/movies"
          render={(routerProps) => (
            <Collection
              {...this.state}
              {...routerProps}
              movies={this.state.movies}
              delMovie={this.state.delMovie}
              deleteMovie={this.deleteMovie}
              getCollection={this.getCollection}
            />
          )}
        />

      </div>
    );
  }
}
export default withRouter(App);
