import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieVote from '../../components/MovieVote';
import PageWrapper from '../../components/PageWrapper';




const MovieDetailsPage = () => {
 const { id } = useParams();
 const { selectedMovie, loading, error, fetchMovieDetails } = useMovieContext();


 useEffect(() => {
   fetchMovieDetails(id);
 }, [id]);


 // Placeholder function for onVote
 const handleVote = (movieId) => {
   console.log(`Voted for movie with ID: ${movieId}`);
   // Add your voting logic here
 };


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;


 return (
   <PageWrapper>
     <div>
       {selectedMovie && (
         <>
           <h1>{selectedMovie.title}</h1>
           <p>Release Date: {selectedMovie.release_date}</p>
           <p>{selectedMovie.overview}</p>
           <MovieVote movie={selectedMovie} onVote={handleVote} />
         </>
       )}
     </div>
     </PageWrapper>
 );
};


export default MovieDetailsPage;


