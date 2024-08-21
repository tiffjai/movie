import React from 'react';
import { NavLink } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/movies" className="nav-link">Movies</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
      <footer> Copyright </footer>
    </>
  );
};

export default PageWrapper;
