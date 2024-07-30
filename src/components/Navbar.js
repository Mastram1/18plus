import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onHomeClick }) => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onHomeClick(); // Call the onHomeClick prop to reset pagination
  };

  return (
    <nav className="navbar">
      {/* <div className="navbar-brand" onClick={handleHomeClick}>UlluHub</div> */}
      <Link to="/" className="navbar-brand " onClick={handleHomeClick}> <div class="logo">
        <span class="ullu">Adult</span><span class="hub">Hub</span>
    </div></Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link" onClick={handleHomeClick}>Home</Link>
        <Link to="/actresses" className="navbar-link" onClick={handleHomeClick}>Top Stars</Link>
      <a href="https://t.me/ullu_exclusive" className="navbar-link" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
    </nav>
  );
};

export default Navbar;
