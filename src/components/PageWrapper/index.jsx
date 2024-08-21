import React from 'react';
import { Link } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">Movie Database</Link>
          <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
      <footer> {/* Footer content goes here */} </footer>
    </>
  );
};

export default PageWrapper;
