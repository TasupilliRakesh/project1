import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Fast, secure, and free web browser built for the modern web.</h1>
        <p>Download Chrome today.</p>
        <button className="download-button">
          <Link to="/features">See Features</Link>
        </button>
      </div>
    </section>
  );
}

export default HomePage;

