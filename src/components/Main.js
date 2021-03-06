import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <div class="card text-white bg-primary mb-3">
      <div class="card-header">
        <h3>Login to view and add to your collection or Signup to start.</h3>
      </div>
      <div class="card-body">
        <Link to="/user/login">
          <button id="main_btns" type="button" class="btn btn-lg btn-info">
            Login
          </button>
        </Link>

        <Link to="/user/signup">
          <button id="main_btns" type="button" class="btn btn-lg btn-success">
            Signup
          </button>
        </Link>
        <br />
        <br />
        <h4>
          Let the "virtual shelf" help you organize your collection of movies.{" "}
        </h4>
        <img
          className="collection"
          src="/images/collection.png"
          alt="collection of movies"
        />
      </div>
      <div></div>
    </div>
  );
}
