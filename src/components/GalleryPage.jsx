import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function GalleryPage() {
  const categories = [
    { name: 'Morocco', path: '/gallery/landscapes/morocco', image: '/images/landscapes/morocco/maroc8.webp' },
    { name: 'Tunisia', path: '/gallery/landscapes/tunisia', image: '/images/landscapes/tunisia/tunisie8.webp' },
    { name: 'Slovenia', path: '/gallery/landscapes/slovenia', image: '/images/landscapes/slovenia/slo5.webp' },
    { name: 'France', path: '/gallery/landscapes/france', image: '/images/landscapes/france/france1.webp' },
    { name: 'Spain', path: '/gallery/landscapes/spain', image: '/images/landscapes/spain/madrid1.webp' },
    { name: 'Portraits', path: '/gallery/portraits', image: '/images/portraits/portrait17.webp' }, 
    { name: 'Mini Evo', path: '/gallery/mini-evo', image: '/images/mini-evo/mini1.webp' },
  ];
  return (
    <div className="gallery-page p-4">
      <h2 className="text-3xl font-bold mb-4">A Journey Through My Lens</h2>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="category-card"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="category-overlay">
              <h3 className="category-name">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;