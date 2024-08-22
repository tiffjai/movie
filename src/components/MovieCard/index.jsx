import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/";
  const file_size = "w500";
  const imageUrl = `${base_url}${file_size}${movie.poster_path}`;

 



  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} className="movie-poster" />
      <p>Release Date: {movie.release_date}</p>
      <Link to={`/movies/${movie.id}`}>Movie Details and Vote</Link>
      
    </div>
  );
};

export default MovieCard;


