// src/ActressList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ActressList.css'; // Create and style this CSS file as needed
import './MovieCard.css'; // Create and style this CSS file as needed
// import Header from './Header';
import customImages from './customImages';

const ActressList = ({ movies }) => {
  // Extract unique actresses from movies data
  const actresses = ["Priya Mishra","Aliya Naaz","Sneha Paul", "Nehal Vadoliya","Bharti Jha", "Shyna Khatri", "Priya Gamree", "Ayushi Jaiswal", "Ruks","Hiral","Ayesha Pathan", "Rajsi", "Ridhima Tiwari","Noor Malabika","Rani Pari", "Jayshree","Jinnie Jaaz","Pihu Singh","Mahi Kaur", "Kamalika Chanda", "Rekha Mona Sarkar", "Ritu Rai", "Muskan Agrawal", "Tina Nandi", "Neha Gupta", "Malvika Tomar", "Priyanka Chaurasia","Pari Paswan", "Mehreen Pirzada", "Anupriya Goenka", "Mouni Roy", "Kaira Sehgal", "Sejal Shah", "Pakhi", "Tanushree", "Bipasha", "Bobby"
];

const getImageSrc = (actress) => {
          // Find the custom image link for the actress
          const customImage = customImages.find(image => image.actressName === actress);
          if (customImage) {
            return customImage.imageLink;
          }
          // Fallback to default image from movies data
          const defaultImage = movies.find(movie => movie.stars.includes(actress));
          return  defaultImage.imgUrl;
        };

  return (
          <>
   
           {/* <Header/> */}
           <div className="actress-list">
      {actresses.map((actress, index) => {
        // Find the first movie with the actress to get the image
        const movieWithActress = movies.find(movie => movie.stars.includes(actress));
        
        if (!movieWithActress) return null; // If no movie is found, skip rendering

        return (
       <div>
     
            <Link to={`/actress/${actress}`}>   
    <div className="movie-card" key={index}>
      <div className="movie-thumbnail-container">
        <img 
          style={{ cursor: "pointer",    height: "15rem",
            width: "9rem", borderRadius:"5px",paddingTop: "10px" }} 
          src={getImageSrc(actress)} alt={actress} 
          className="movie-card-thumbnail" 
        />
      </div>
      <div className="movie-card-content">
      <p>{actress}</p>
      </div>
    </div>
        </Link>
          
          </div>

        );
      })}
    </div>
  
    </>
  );
};

export default ActressList;
