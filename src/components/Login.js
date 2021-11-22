import React from "react";
import "../App.css";

export default function Login(props) {
  return (
    <form className="signupPage" onSubmit={props.logMeIn}>
      <fieldset>
        <legend>Login</legend>

        <div class="form-group">
          <label class="form-label mt-4">Username</label>
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
            Enter username for your account.
          </small>
        </div>

        <div class="form-group">
          <label class="form-label mt-4">Password</label>
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
      <br />
      <br />
      <div class="d-grid gap-2">
        <input class="btn btn-lg btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  );
}
