import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/pokemon" className={`navbar-link ${isActive('/pokemon') ? 'active' : ''}`}>Pokémon Gallery</Link>
      </div>
    </nav>
  );
};

export default Navbar;
