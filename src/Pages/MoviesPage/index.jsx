import React, { useEffect } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieList from '../../components/MovieList';
import PageWrapper from '../../components/PageWrapper';

import '../../App.css';   

const MoviesPage = () => {
  const { movies, loading, error, fetchTrendingMovies } = useMovieContext();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <PageWrapper>
      <div className="movies-page">
        <div className="header">
          <h2 className="title">Trending Movies</h2>
        </div>
        <MovieList movies={movies} />
      </div>
    </PageWrapper>
  );
};

export default MoviesPage;
