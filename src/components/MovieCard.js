import {React, useEffect} from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onSelectMovie }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="movie-card">
      <div className="movie-thumbnail-container">
        <img 
          style={{ cursor: "pointer",    height: "15rem",
            width: "9rem", borderRadius:"5px",paddingTop: "10px" }} 
          onClick={() => onSelectMovie(movie)}  
          src={movie.imgUrl} 
          alt={movie.title} 
          className="movie-card-thumbnail" 
        />
        <p className="movie-duration"><i className="fa fa-regular fa-clock"></i> {movie.duration}</p>
        <div className="hd-label"> HD</div>
      </div>
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        {/* <div className="movie-card-buttons">
          <button className="movie-button" onClick={() => onSelectMovie(movie)}>Watch</button>
          <button className="movie-button" onClick={() => window.open(movie.shortenUrl, '_blank')}>Download</button>
        </div> */}
      </div>
    </div>
  );
};

export default MovieCard;
