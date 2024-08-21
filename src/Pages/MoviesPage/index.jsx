 
import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper';
import SearchMovie from '../../components/SearchMovie';
import FilterMovie from '../../components/FilterMovie';
import MovieList from '../../components/MovieList';
import { useMovieContext } from '../../contexts/MovieContext';

const MoviesPage = () => {
  const { movies, setMovies, loading, setLoading, error, setError } = useMovieContext();

  const handleSearch = (query) => {
    // Fetch movies based on search query
    setLoading(true);
    setError(null);
    // Example API call (adjust this to fit your API structure)
    fetch(`https://api.example.com/movies?search=${query}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleFilter = (filter) => {
    // Fetch movies based on filter
    setLoading(true);
    setError(null);
    // Example API call (adjust this to fit your API structure)
    fetch(`https://api.example.com/movies?filter=${filter}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <PageWrapper>
      <h1>Browse Movies</h1>
      <SearchMovie onSearch={handleSearch} />
      <FilterMovie onFilter={handleFilter} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </PageWrapper>
  );
};

export default MoviesPage;


