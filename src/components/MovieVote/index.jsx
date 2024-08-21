import React, { useState } from 'react';

const MovieVote = ({ movie }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = async () => {
    let guestSessionId = localStorage.getItem('guest_session_id');

    // Create a new guest session if one doesn't exist
    if (!guestSessionId) {
      try {
        const apiKey = process.env.VITE_TMDB_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to create guest session');
        }

        guestSessionId = data.guest_session_id;
        localStorage.setItem('guest_session_id', guestSessionId);
        localStorage.setItem('guest_session_expiry', data.expires_at); // Store the expiry time

      } catch (error) {
        console.error('Error fetching guest session ID:', error.message);
        setError('Failed to create guest session');
        return;
      }
    }

    // Proceed with voting
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=59f05c6fe45713e1a1a3ed214d1260fd&guest_session_id=${guestSessionId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value: rating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to cast vote');
      }

      setHasVoted(true);
      console.log(`Successfully voted for movie with ID: ${movie.id}`);
    } catch (err) {
      console.error('Error voting for movie:', err.message);
      setError('Failed to cast vote');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(parseFloat(e.target.value))}
        min="0.5"
        max="10"
        step="0.5"
        disabled={hasVoted}
        placeholder="Rate 0.5 - 10"
      />
      <button onClick={handleVote} disabled={hasVoted}>
        {hasVoted ? `Voted for ${movie.title}` : `Vote for ${movie.title}`}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MovieVote;
