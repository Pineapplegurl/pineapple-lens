import React, { useState } from "react";
import { useParams } from "react-router-dom";
import photos from "../data/photos.json";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "../App.css";

function CategoryGallery() {
  const { subcategory } = useParams();

  let data = subcategory
    ? photos.landscapes[subcategory.toLowerCase()] || photos[subcategory.toLowerCase()]
    : photos["portraits"];

  if (!subcategory && window.location.pathname.includes("mini-evo")) {
    data = photos["mini-evo"];
  }

  console.log("subcategory:", subcategory);
  console.log("data:", data);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-red-500">
        No photos available for this category.
      </p>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modern-carousel">
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        <HiOutlineChevronLeft size={30} />
      </button>

      <div className="carousel-images">
        {data.map((item, idx) => {
          const position =
            idx === currentIndex
              ? "active"
              : idx === (currentIndex - 1 + data.length) % data.length
              ? "prev"
              : idx === (currentIndex + 1) % data.length
              ? "next"
              : "hidden";

          return (
            <img
              key={idx}
              src={item.url}
              alt={item.alt}
              className={`carousel-image ${position}`}
            />
          );
        })}
      </div>

      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        <HiOutlineChevronRight size={30} />
      </button>
    </div>
  );
}

export default CategoryGallery;