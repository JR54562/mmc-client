import React from "react";

export default function Search(props) {
  return (
    <div className="profileShow">
      {/* <h1>Profile Page</h1> */}
      <form className="signupPage">
        <fieldset>
          <legend>Search by Title </legend>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="title"
              value={props.title}
              onChange={props.handleChange}
              autoComplete="off"
            />
          </div>
        </fieldset>
        <br />
        <br />
        <div class="d-grid gap-2">
          <button
            class="btn btn-lg btn-info"
            type="button"
            onClick={() => {
              props.getMovie();
              props.history.push("/movie/detail");
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
