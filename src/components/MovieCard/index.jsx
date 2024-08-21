import React from 'react';
import { Link } from 'react-router-dom';
import MovieVote from '../MovieVote';

const MovieCard = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/";
  const file_size = "w500";
  const imageUrl = `${base_url}${file_size}${movie.poster_path}`;

  const handleVote = async (movieId) => {
    try {
      // Example API call to register the vote
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
      });

      if (!response.ok) {
        throw new Error('Failed to cast vote');
      }

       
      console.log(`Successfully voted for movie with ID: ${movieId}`);
    } catch (error) {
      console.error('Error in handleVote:', error);
      throw error; 
    }
  };



  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} className="movie-poster" />
      <p>Release Date: {movie.release_date}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
      <MovieVote movie={movie} onVote={handleVote} />
    </div>
  );
};

export default MovieCard;


