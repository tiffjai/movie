
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import * as Pages from './Pages';  
import './app.css';

const App = () => (
  <MovieProvider>
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/about" element={<Pages.AboutPage />} />
      <Route path="/movies" element={<Pages.MoviesPage />} />
      <Route path="/movies/:id" element={<Pages.MovieDetails />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  </MovieProvider>
);

export default App;
