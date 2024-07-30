import {React, useEffect} from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';



const MovieList = ({ movies, onSelectMovie }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
};

export default MovieList;
