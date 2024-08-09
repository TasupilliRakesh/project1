import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png" alt="Google Chrome" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

