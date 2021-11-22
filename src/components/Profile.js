import React from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {
  console.log(props);

  return (
    <div className="profilePage">
      <div className="profileShow">
        <h1>{props.username}'s Profile Page</h1>
        <form id={props.match.params.id} className="signupPage" onSubmit={props.pwChange}>
          <fieldset>
            <legend>Change password? </legend>

           

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
              <br />
              <Link to="/movies/search">
              <button type="button" id="main_btns"class="btn btn-primary btn-lg">Search Titles</button>
              </Link>
        <button type="button" id="main_btns" data-id={ props.match.params.id } class="btn btn-primary btn-lg" onClick={props.getCollection}>View My Movies</button>
      </div>
    </div>
  );
}
