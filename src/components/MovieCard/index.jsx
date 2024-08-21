 
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
