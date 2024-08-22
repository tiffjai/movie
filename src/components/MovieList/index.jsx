import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard';
import { useMovieContext } from '../../contexts/MovieContext';

const MovieList = () => {
  const { movies } = useMovieContext();
  const [query, setQuery] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(movies)
  const [isChecked, setChecked] = useState(false)
  const [noMatches, setNoMatches] = useState(false); 
  
  const onSearch = (query) => {
    let filtered;
    if (query.trim() === "" && !isChecked) {
        filtered = movies;
    } 
    else if (query.trim() === "" && isChecked) {
      filtered = movies.filter(movie => movie.genre_ids.some(id => id === 28));
      // setSearchedMovies(filtered);
    }
    else {
      const lowerCaseQuery = query.toLowerCase();
      filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery)
      );
    }
    if (filtered.length === 0) {
      setNoMatches(true);
      filtered = movies; 
    }
    else {
      setNoMatches(false);
    }
    setSearchedMovies(filtered);
    setSearchInitiated(true);
    setQuery('');
  };

  const handleSearch = () => {
    onSearch(query);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleCheckboxChange =()=>{
    setChecked(!isChecked);
  }
  const handleReset =()=>{
    setQuery('');
    setChecked(false);
    setSearchedMovies(movies);
    setSearchInitiated(false);
  }
  useEffect(() => {
    onSearch(query);
  }, [isChecked]);

  const handleVote = async (movieId) => {
    try {
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to cast vote: ${errorMessage}`);
      }
  
      console.log(`Successfully voted for movie with ID: ${movieId}`);
    } catch (error) {
      console.error('Error in handleVote:', error.message);
      throw error;
    }
  };
  
  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search for a movie..."
          />
          <button className="search-movie-button" onClick={handleSearch}>Search</button>
          {searchInitiated && searchedMovies.length < movies.length && ( 
            <button className="search-movie-button" onClick={handleReset}>Reset</button>)}
        </div>
        <p>Pick you favorite genre</p>
        <div className="custom-checkbox">
  <input
    type="checkbox"
    id="Action"
    name="action"
    value="Action"
    checked={isChecked}
    onChange={handleCheckboxChange}
  />
  <span className="checkmark"></span>
  <label htmlFor="Action"> Action </label>
</div>

      
        {/* <input type="checkbox" id="Comedy" name="comedy" value="Comedy" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="Comedy"> Comedy </label>
        <input type="checkbox" id="Animation" name="animation" value="Animation" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="Animation"> Animation </label> */}
        {noMatches && searchInitiated &&( 
            <p>No matches found</p>
          )}
      </div>
      <div className="movie-list">
        {searchedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onVote={handleVote} />
        ))}
      </div>
    </>
  );
};

export default MovieList;


