import React from 'react';
import "../App.css";

export default function Main(props) {
    return (
        <div class="card text-white bg-primary mb-3" >
  <div class="card-header"><h3>Login to view and add to your collection or Signup to start.</h3></div>
  <div class="card-body" >
                <button id="main_btns" type="button" class="btn btn-info">Login</button>
                <button id="main_btns" type="button" class="btn btn-success">Signup</button>
                <br /><br />
    <img
						className="collection"
						src="/images/collection.png"
						alt="collection of movies"
					/> 
  </div>
</div>
    );
}

