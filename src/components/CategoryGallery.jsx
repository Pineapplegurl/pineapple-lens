import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import photos from "../data/photos.json";
import "../App.css";
import "../CategoryGallery.css";
import AdSlide from "./AdSlide"; // Import du composant AdSlide

function CategoryGallery() {
  const { subcategory } = useParams();

  const data = subcategory
    ? photos.landscapes[subcategory.toLowerCase()] || photos[subcategory.toLowerCase()]
    : window.location.pathname.includes("mini-evo")
    ? photos["mini-evo"]
    : photos["portraits"];

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-red-500">
        No photos available for this category.
      </p>
    );
  }

  // Ajout de publicités après chaque 4 photos
  const interleavedSlides = data.flatMap((image, idx) =>
    (idx + 1) % 4 === 0
      ? [
          image,
          { isAd: true, id: `ad-${idx}` }, // Place un objet "publicité"
        ]
      : [image]
  );

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">
        Explore the Stunning Beauty of {subcategory?.toUpperCase() || "Portraits"}
      </h1>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          grabCursor={true}
          style={{
            width: "85%",
            margin: "0 auto",
          }}
        >
          {interleavedSlides.map((item, idx) => (
            <SwiperSlide
              key={item.isAd ? item.id : idx}
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.isAd ? (
                <AdSlide /> // Affiche le composant publicitaire
              ) : (
                <img
                  src={item.url}
                  alt={item.alt || `Image ${idx + 1}`}
                  style={{
                    width: "auto",
                    height: "70vh",
                    objectFit: "contain",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoryGallery;