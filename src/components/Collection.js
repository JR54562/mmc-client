import React from "react";
import './Collection.css';
import { Link } from 'react-router-dom'



function Collection(props) {
    console.log(props);
    
   
  return (
    <div className="parent">
          <div>
          <Link to="/movies/search">    
         <button class="btn btn-lg btn-primary" type="button">Search Movies?</button>
      </Link>
          </div>
          <table data-toggle="table" id="mt" class="table table-responsive table-hover table-bordered border-primary .w-auto">
            <thead>
                  <tr class="table-primary">
                  <th scope="col">Delete?</th>
                <th data-sortable="true" data-field="id" scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Rated</th>
                <th scope="col">Runtime</th>
                <th scope="col">Genre</th>
                <th scope="col">Actors</th>
                <th scope="col" >Plot</th>
                <th scope="col">Poster</th>
                <th scope="col">Box Office</th>
              </tr>
            </thead>
      {props.movies.map((movie, index) => {
        return (
          // <div>{movie.title}</div>
            <tr class="table-active">
              <td onClick={props.deleteMovie}><button type="button"  class="btn btn-danger disabled">Delete!</button></td>
              <td><h2>{movie.title}</h2></td>
              <td><p><strong>{movie.year}</strong></p></td>
              <td><p><strong>{movie.rating}</strong></p></td>
              <td><p><strong>{movie.runtime}</strong></p></td>
              <td><h6>{movie.genre}</h6></td>
              <td><h5>{movie.actors}</h5></td>
              <td ><h4>{movie.plot}</h4></td>
              <td><img id="poster" src={movie.poster} alt="" /></td>
              <td><p><strong>{movie.box_office}</strong></p></td>
            </tr>
        );
      })}
          </table>
          <div>
          
          </div>
    </div>
  );
}
export default Collection;
