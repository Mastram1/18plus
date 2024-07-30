// src/ActressVideos.js
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieList from './MovieList';


const ActressVideos = ({ movies, onSelectMovie  }) => {
  const { name } = useParams();

  // Filter movies to include those that have the actress in their stars array
console.log(movies);

  const filteredMovies = movies.filter(movie =>
    movie.stars.some(star => star.split(',').map(s => s.trim()).includes(name))
  );

  console.log(filteredMovies);

  return (
<>
    {/* <h1>Videos of {name}</h1> */}
      <MovieList movies={filteredMovies} onSelectMovie={onSelectMovie}  />
  </>
  );
};

export default ActressVideos;
