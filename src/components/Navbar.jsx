import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="container navbar">
        <div className="logo">
          <Link to="/">NUDAM.</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="btn-contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;