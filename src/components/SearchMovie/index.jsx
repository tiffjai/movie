import React, { useState } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MoviesList from '../MovieList';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
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
  };

  const handleSearch = () => {
    onSearch(query);
  };

  console.log(filteredMovies); // For debugging purposes

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
      <MoviesList movies={filteredMovies} />
    </div>
  );
};

export default SearchMovie;