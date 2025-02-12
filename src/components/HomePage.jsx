import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <div className="HomePage-container">
      <img
        src="/images/une1.webp" 
        alt="Good Films Make Your Life Better"
        className="HomePage-image"
      />

      <div className="HomePage-text">
        <h1 className="HomePage-title">Good Films Make Your Life Better</h1>
      </div>
    </div>
  );
}

export default HomePage;