 
import React from 'react';

const MovieVote = ({ movie, onVote }) => {
  return (
    <button onClick={() => onVote(movie.id)}>Vote for {movie.title}</button>
  );
};

export default MovieVote;
