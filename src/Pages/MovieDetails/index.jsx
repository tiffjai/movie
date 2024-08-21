// src/pages/MovieDetails/index.jsx
import React, { useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper';
import MovieVote from '../../components/MovieVote';
import { useParams } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';

const MovieDetails = () => {
  const { id } = useParams();
  const { selectedMovie, setSelectedMovie, loading, setLoading, error, setError } = useMovieContext();

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Fetch movie details by ID
    fetch(`https://api.example.com/movies/${id}`)
      .then(response => response.json())
      .then(data => setSelectedMovie(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [id, setSelectedMovie, setLoading, setError]);

  const handleVote = (movieId) => {
    // Logic to handle voting, e.g., send a POST request to the server
    console.log(`Voted for movie ID: ${movieId}`);
  };

  return (
    <PageWrapper>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {selectedMovie && (
        <div className="movie-details">
          <h1>{selectedMovie.title}</h1>
          <p>Year: {selectedMovie.year}</p>
          <p>{selectedMovie.overview}</p>
          <MovieVote movie={selectedMovie} onVote={handleVote} />
        </div>
      )}
    </PageWrapper>
  );
};

export default MovieDetails;
