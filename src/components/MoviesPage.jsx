import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../contexts/MovieContext';

const MoviesPage = () => {
  const { movies, setMovies, loading, setLoading, error, setError } = useMovieContext();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}/movies/trending`, {
          headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': API_KEY
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [setMovies, setLoading, setError]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div key={movie.movie.ids.trakt} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{movie.movie.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Year: {movie.movie.year}</p>
              <Link
                to={`/movies/${movie.movie.ids.trakt}`}
                className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
