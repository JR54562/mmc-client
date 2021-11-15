import React from "react";

export default function Profile(props) {
  console.log(props);

  return (
    <div className="profilePage">
      <div className="profileShow">
        <h1>Profile Page</h1>
        <form className="signupPage">
          <fieldset>
            <legend>Change password </legend>

            {/* <div class="form-group">
          <label  class="form-label mt-4">
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
            Enter username for your account.
          </small>
        </div> */}

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
            <button class="btn btn-lg btn-primary" type="button">
              Submit
            </button>
          </div>
              </form>
              <br/>
              <button type="button" id="main_btns"class="btn btn-primary btn-lg">Search Titles</button>
              <button type="button" id="main_btns" class="btn btn-primary btn-lg">View My Movies</button>
      </div>
    </div>
  );
}
