import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <MovieContext.Provider value={{
      movies, setMovies, selectedMovie, setSelectedMovie, loading, setLoading, error, setError
    }}>
      {children}
    </MovieContext.Provider>
  );
};
