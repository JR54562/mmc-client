import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Results(props) {
    if (Object.keys(props.movie).length > 0) {
        const movie = props.movie
        return (
            <div>
                <h1>{ movie.Title}</h1>
            </div>
        );
    } else {
        return <Redirect to={'/movies/search'} />;
    }
}
