import React, { useState, useEffect } from "react";

const StarRating = ({ rating, setRating, hasVoted }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    if (!hasVoted) {
      setRating(index + 1);
    }
  };

  const handleMouseEnter = (index) => {
    if (!hasVoted) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!hasVoted) {
      setHoverRating(0);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {[...Array(10)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: hasVoted ? "not-allowed" : "pointer",
            color: (hoverRating || rating) > index ? "#FFD700" : "#ccc",
            fontSize: "2rem",
            marginRight: "5px",
          }}
        >
          ★
        </span>
      ))}
      <span>{rating}</span>
    </div>
  );
};

const MovieVote = ({ movie }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkGuestSessionExpiry = () => {
      const expiryTime = localStorage.getItem("guest_session_expiry");
      if (expiryTime && new Date(expiryTime) < new Date()) {
        localStorage.removeItem("guest_session_id");
        localStorage.removeItem("guest_session_expiry");
      }
    };

    checkGuestSessionExpiry();
  }, []);

  const handleVote = async () => {
    let guestSessionId = localStorage.getItem("guest_session_id");

    // Create a new guest session if one doesn't exist
    if (!guestSessionId) {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Adjusted for Vite environment
        const response = await fetch(
          `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to create guest session");
        }

        guestSessionId = data.guest_session_id;
        localStorage.setItem("guest_session_id", guestSessionId);
        localStorage.setItem("guest_session_expiry", data.expires_at); // Store the expiry time
      } catch (error) {
        console.error("Error fetching guest session ID:", error.message);
        setError("Failed to create guest session");
        return;
      }
    }

    // Proceed with voting
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Adjusted for Vite environment
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=${apiKey}&guest_session_id=${guestSessionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: rating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Please vote above 0.5 rating");
      }

      setHasVoted(true);
      console.log(`Successfully voted for movie with ID: ${movie.id}`);
    } catch (err) {
      console.error("Error voting for movie:", err.message);
      setError("Please vote above 0.5 rating");
    }
  };

  return (
    <div>
      <div className="star-rating-container">
        <StarRating rating={rating} setRating={setRating} hasVoted={hasVoted} />
      </div>

      <button onClick={handleVote} disabled={hasVoted || rating === 0}>
        {hasVoted
          ? `Voted with rating ${rating}`
          : `Vote for ${movie.title}`}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MovieVote;
