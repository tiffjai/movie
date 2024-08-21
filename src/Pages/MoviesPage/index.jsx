import React, { useEffect } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieList from '../../components/MovieList';
import PageWrapper from '../../components/PageWrapper';
import { SearchMovie } from '../../components';

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
        <h2>Trending Movies</h2>
        <SearchMovie />
        <MovieList movies={movies} />
      </div>
    </PageWrapper>
  );
};

export default MoviesPage;

