import React, { useState, useEffect } from 'react';
import '../App.css';

function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/une1.webp',
    '/images/une2.webp', 
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [images.length]);
  return (
    <div className="HomePage-container">
      <img
        src={images[currentImage]}
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