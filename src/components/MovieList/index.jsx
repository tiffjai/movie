import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard';
import { useMovieContext } from '../../contexts/MovieContext';

const MovieList = () => {
  const { movies } = useMovieContext();
  const [query, setQuery] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(movies)
  
  const onSearch = (query) => {
    if (query.trim() === "") {
      setSearchedMovies(movies);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery)
      );
      setSearchedMovies(filtered);
    }
    setSearchInitiated(true);
    setQuery('');
  };

  const handleSearch = () => {
    onSearch(query);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
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
    <>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search for a movie..."
          />
          <button className="search-movie-button" onClick={handleSearch}>Search</button>
          {searchInitiated && searchedMovies.length < movies.length && ( 
            <button className="search-movie-button" onClick={handleSearch}>Reset</button>)}
        </div>
        {searchedMovies.length === 0 && searchInitiated && ( 
            <p>No matches found</p>
          )}
        
      </div>
      <div className="movie-list">
        {searchedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onVote={handleVote} />
        ))}
      </div>
    </>
  );
};

export default MovieList;


