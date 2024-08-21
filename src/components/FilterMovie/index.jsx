 
import React from 'react';

const FilterMovie = ({ onFilter }) => {
  return (
    <div>
      {/* Add your filter options here */}
      <button onClick={() => onFilter('popular')}>Popular</button>
      <button onClick={() => onFilter('recent')}>Recent</button>
    </div>
  );
};

export default FilterMovie;
