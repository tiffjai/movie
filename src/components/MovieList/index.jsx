import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard';

const MovieList = ({ movies, onVote }) => {

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onVote={onVote} />
      ))}
    </div>
  );
};

export default MovieList;

