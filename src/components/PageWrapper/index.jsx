 
import React from 'react';
import Navbar from '../ Navbar';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <footer> {/* Footer content goes here */} </footer>
    </>
  );
};

export default PageWrapper;
