import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container mx-auto px-6 py-8">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Movie Database</h1>
      <p className="mb-6 text-gray-600">Explore our collection of movies and vote for your favorites!</p>
      <Link to="/movies" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Browse Movies
      </Link>
    </div>
  </div>
);

export default HomePage;
