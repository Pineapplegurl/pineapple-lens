import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <div className="HomePage-container">
      {/* Image de fond */}
      <img
        src="/images/une1.webp" // Assure-toi que cette image est dans le dossier public/images
        alt="Good Films Make Your Life Better"
        className="HomePage-image"
      />

      {/* Texte superposé */}
      <div className="HomePage-text">
        <h1 className="HomePage-title">Good Films Make Your Life Better</h1>
      </div>
    </div>
  );
}

export default HomePage;