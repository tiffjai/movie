import React, { useEffect } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieList from '../../components/MovieList';
import PageWrapper from '../../components/PageWrapper';

const MoviesPage = () => {
  const { movies, loading, error, fetchTrendingMovies } = useMovieContext();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <PageWrapper>
      <div>
        <h1>Trending Movies</h1>
        <MovieList movies={movies} />
      </div>
    </PageWrapper>
  );
};

export default MoviesPage;

