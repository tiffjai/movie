import React, { useEffect } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieList from '../../components/MovieList';

const MoviesPage = () => {
  const { movies, loading, error, fetchTrendingMovies } = useMovieContext();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

