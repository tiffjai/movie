import React, { useState } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MoviesList from '../MovieList';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const { movies, filteredMovies, setFilteredMovies } = useMovieContext();

  const onSearch = (query) => {
    if (query.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredMovies(filtered);
    }
    setSearchInitiated(true);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
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
      </div>
      {filteredMovies.length === 0 && searchInitiated && ( 
          <p>No matches found</p>
        )}
      <MoviesList movies={filteredMovies} />
    </div>
  );
};

export default SearchMovie;