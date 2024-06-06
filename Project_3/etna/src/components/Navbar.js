import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <Link to="/" className="navbar-logo">
            On Click
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="navbar-menu">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/gallery" className="navbar-item">
              Gallery
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
