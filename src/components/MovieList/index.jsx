import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard';
import { useMovieContext } from '../../contexts/MovieContext';
import FilterMovie from '../FilterMovie';

const MovieList = () => {
  const { movies } = useMovieContext();
  const [query, setQuery] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(movies)
  const [noMatches, setNoMatches] = useState(false); 

  const [actionOnly, setActionOnly] = useState(false);
  const [animationOnly, setAnimationOnly] = useState(false);
  const [comedyOnly, setComedyOnly] = useState(false);

  
  const onSearch = (query) => {
    let filtered;
    if (query.trim() === "" && !actionOnly && !animationOnly && !comedyOnly ) {
        filtered = movies;
    } 
    else if (query.trim() === "" && (actionOnly || animationOnly || comedyOnly)) {
      filtered = movies.filter(movie => !actionOnly || movie.genre_ids.some(id => id === 28) )
                        .filter(movie => !animationOnly || movie.genre_ids.some(id => id === 16))
                        .filter(movie => !comedyOnly || movie.genre_ids.some(id => id === 35))
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
  
  const handleReset =()=>{
    setQuery('');
    setActionOnly(false);
    setAnimationOnly(false);
    setComedyOnly(false);
    setSearchedMovies(movies);
    setSearchInitiated(false);
  }
  useEffect(() => {
    onSearch(query);
  }, [actionOnly, animationOnly, comedyOnly]);
  
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
<<<<<<< HEAD
       
=======
>>>>>>> 8bf54df8689e7b9dc0654ae438eb529ee2b83a24
        {noMatches && searchInitiated &&( 
            <p>No matches found</p>
          )}
      </div>
      <FilterMovie  actionOnly={actionOnly} setActionOnly={setActionOnly}
        animationOnly={animationOnly} setAnimationOnly={setAnimationOnly}
        comedyOnly={comedyOnly} setComedyOnly={setComedyOnly}
<<<<<<< HEAD
        />
=======
      />
>>>>>>> 8bf54df8689e7b9dc0654ae438eb529ee2b83a24
      <div className="movie-list">
        {searchedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;


