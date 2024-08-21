import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailPage from './components/MovieDetailPage';
import { MovieProvider } from './contexts/MovieContext';

const App = () => (
  <MovieProvider>
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  </MovieProvider>
);

export default App;
