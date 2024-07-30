import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import MovieList from './components/MovieList';
import MoviePlayer from './components/MoviePlayer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import moviesData from './data/moviesData';
import ReactPaginate from 'react-paginate';
import ActressList from './components/ActressList';
import ActressVideos from './components/ActressVideos';
import './App.css';


const App = () => {

  const randomMoviesData = getRandomMovies(moviesData, moviesData.length);



  const [filteredMovies, setFilteredMovies] = useState(randomMoviesData);
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 20;
  const navigate = useNavigate();
  const location = useLocation();


  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]); // Dependency on currentPage to trigger scroll when page changes

  function getRandomMovies(movies, count) {
    // Shuffle the array
    const shuffled = movies.sort(() => 0.5 - Math.random());
    // Return the first `count` movies
    return shuffled.slice(0, count);
  };

  const handleSelectMovie = (movie) => {
    const encodedTitle = encodeURIComponent(movie.title);
    navigate(`/movie/${encodedTitle}`);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMovies(filtered);
    setCurrentPage(0); // Reset to the first page on search
  };

  const handleHomeClick = () => {
    setCurrentPage(0); // Reset to the first page
    navigate('/');
  };




  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const currentMovies = filteredMovies.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="app">
      <Navbar onHomeClick={handleHomeClick} />
      <div className="content">
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={currentMovies} onSelectMovie={handleSelectMovie} />}
          />
          <Route
            path="/actresses"
            element={<ActressList movies={moviesData} onSelectMovie={handleSelectMovie} />}
          />
          <Route path="/actress/:name" element={<ActressVideos movies={moviesData} onSelectMovie={handleSelectMovie}  />} />
          <Route
            path="/movie/:title"
            element={<MoviePlayer movies={moviesData} />}
          />
        </Routes>
        {(location.pathname === '/' || location.pathname.startsWith('/movie/')) && (
        
          <div className="pagination-container">
            <ReactPaginate
              pageCount={totalPages}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item previous"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item next"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              forcePage={currentPage} // Ensure pagination component reflects the current page
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
