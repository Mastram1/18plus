import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MoviePlayer.css';
import MovieList from './MovieList';

// Function to shuffle the array and get the first `count` items
const getRandomMovies = (movies, count) => {
  // Shuffle the array
  const shuffled = movies.sort(() => 0.5 - Math.random());
  // Return the first `count` movies
  return shuffled.slice(0, count);
};

const MoviePlayer = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const handleSelectMovie = (movie) => {
    const encodedTitle = encodeURIComponent(movie.title);
    navigate(`/movie/${encodedTitle}`);
  };
  
  // Find the movie based on the URL parameter
  const selectedMovie = movies.find(movie => movie.title === decodeURIComponent(title));

  if (!selectedMovie) return <div>Loading...</div>;

  // Filter out the currently selected movie from the recommendations
  const recommendedMovies = movies.filter(movie => movie.title !== selectedMovie.title);

  // Get 10 random movies from the recommendations
  const randomMovies = getRandomMovies(recommendedMovies, 8);

  return (
    <div className="movie-player">
      <h4>{selectedMovie.title}</h4>
      <iframe src={selectedMovie.iframeSrc} title={selectedMovie.title} allowFullScreen></iframe>
      <div className="movie-player-buttons">
        <button className="movie-button-download" onClick={() => window.open(selectedMovie.shortenUrl, '_blank') }>
          Download
        </button>
      </div>

      <h3 className="recommended-videos-title">Recommended Videos</h3>
      <MovieList movies={randomMovies} onSelectMovie={handleSelectMovie} />
    </div>
  );
};

export default MoviePlayer;
