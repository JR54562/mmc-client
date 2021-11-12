import React from "react";
import "../App.css";

function Signup(props) {
  return (
    <form className="signupPage">
      <fieldset>
        <legend>Signup</legend>

        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            name="username"
            value={props.username}
            onChange={props.handleChange}
            autoComplete="off"
          />

          <small id="emailHelp" class="form-text text-muted">
            Pick a username for your account.
          </small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            autoComplete="off"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            autoComplete="off"
          />
        </div>
      </fieldset>
    </form>
  );
}

export default Signup;
