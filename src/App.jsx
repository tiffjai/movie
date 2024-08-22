import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import * as Pages from './Pages';  
import './App.css';

const App = () => (
  <MovieProvider>
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/about" element={<Pages.AboutPage />} />
      <Route path="/movies">
        <Route index element={<Pages.MoviesPage />} />
        <Route path=":id" element={<Pages.MovieDetails />} />
      </Route>
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  </MovieProvider>
);

export default App;
