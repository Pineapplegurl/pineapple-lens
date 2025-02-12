
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import CategoryGallery from './components/CategoryGallery';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/landscapes/:subcategory" element={<CategoryGallery />} />
          <Route path="/gallery/portraits" element={<CategoryGallery />} />
          <Route path="/gallery/mini-evo" element={<CategoryGallery />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;