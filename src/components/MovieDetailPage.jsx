import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMovieContext } from '../contexts/MovieContext';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { selectedMovie, setSelectedMovie, loading, setLoading, error, setError } = useMovieContext();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}/movies/${id}?extended=full`, {
          headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': API_KEY
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setSelectedMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, setSelectedMovie, setLoading, setError]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!selectedMovie) return null;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Link to="/movies" className="text-blue-500 mb-4 inline-block">&larr; Back</Link>
        <h1 className="text-2xl font-bold mb-2">{selectedMovie.title}</h1>
        <p className="text-gray-600 mb-4">Year: {selectedMovie.year}</p>
        <p className="mb-4">{selectedMovie.overview}</p>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">{selectedMovie.title}</h3>
          <p className="text-sm text-gray-600 mb-2">Year: {selectedMovie.year}</p>
          <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
