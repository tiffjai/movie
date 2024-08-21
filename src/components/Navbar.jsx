import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">Movie Database</Link>
      <div>
        <Link to="/" className="text-gray-800 hover:text-blue-500 mx-4">Home</Link>
        <Link to="/movies" className="text-gray-800 hover:text-blue-500 mx-4">Movies</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
