import React from "react";
import './Collection.css';


function Collection(props) {
    console.log(props);
    
   
  return (
    <div className="parent">
      <div>
        <h1>Collection Page</h1>
      </div>
          <table id="mt" class="table table-striped table-responsive table-hover table-bordered border-primary .w-auto">
            <thead>
              <tr class="table-primary">
                <th scope="col">Title</th>
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
              
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.rating}</td>
              <td>{movie.runtime}</td>
              <td>{movie.genre}</td>
              <td>{movie.actors}</td>
              <td >{movie.plot}</td>
              <td><img src={movie.poster} alt="" /></td>
              <td>{movie.box_office}</td>
            </tr>
        );
      })}
          </table>
    </div>
  );
}
export default Collection;
