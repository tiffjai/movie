import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard';

const MovieList = ({ movies }) => {
  const handleVote = async (movieId) => {
    try {
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Capture any error message from the response
        throw new Error(`Failed to cast vote: ${errorMessage}`);
      }
  
      console.log(`Successfully voted for movie with ID: ${movieId}`);
    } catch (error) {
      console.error('Error in handleVote:', error.message);
      throw error; // Re-throw the error to let child component handle it
    }
  };
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onVote={handleVote} />
      ))}
    </div>
  );
};

export default MovieList;


