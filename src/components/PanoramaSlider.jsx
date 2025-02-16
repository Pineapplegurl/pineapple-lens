/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../PanoramaSlider.css"; // Créez ce fichier pour personnaliser le style

const PanoramaSlider = ({ images }) => {
  return (
    <div className="panorama-slider">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20} // Espace entre les images
        slidesPerView={"auto"} // Permet de scroller horizontalement
        centeredSlides={true} // Centre la vue sur une image
        pagination={{ clickable: true }}
        loop={true} // Pour un défilement infini
        grabCursor={true} // Changement du curseur pour un effet de "drag"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="panorama-slide">
            <img
              src={image.url}
              alt={image.alt || `Image ${index + 1}`}
              className="panorama-slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PanoramaSlider;*/