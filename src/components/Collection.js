import React from 'react';

function Collection(props) {
    console.log(props)
    

    return (
        <div className="parent">
            <div>
                <h1>Collection Page</h1>
            </div>
            {props.movies.map((movie, index) => {
                return (
                    <div>{ movie.title }</div>
                )
             })}
        </div>
    )
    }
export default Collection;