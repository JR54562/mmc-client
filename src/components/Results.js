import React from "react";
import { Redirect } from "react-router-dom";

export default function Results(props) {
  if (Object.keys(props.movie).length > 0) {
      const movie = props.movie;
      console.log(movie);
    return (
      <div>
        <div class="card mb-3">
                <h2 class="card-header">{ movie.Title }</h2>
          <div class="card-body">
                    <h5 class="card-title">Released: { movie.Year}</h5>
                    <h6 class="card-subtitle text-muted">Rated: {movie.Rated}</h6>
                    <h5 class="card-title">{movie.Genre}</h5>
                    <h5 id="plot" class="card-title">{ movie.Plot}</h5>
          </div>
                <div class="card-body">
                <img src={movie.Poster} alt="" />     
          </div>
          <div class="card-body">
                    <h4 class="card-title">{movie.Actors}</h4>
                    <h5 class="card-title">Runtime is {movie.Runtime}</h5>
                    <h6 class="card-subtitle text-muted">Box Office earnings: {movie.BoxOffice}</h6>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to={"/movies/search"} />;
  }
}
