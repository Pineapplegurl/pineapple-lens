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

function CategoryGallery() {
  const { subcategory } = useParams();

  // Récupération des données en fonction de la sous-catégorie ou catégorie principale
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

  const getTitle = (subcategory) => {
    switch (subcategory?.toLowerCase()) {
      case "slovenia":
        return "Slovenia : A Land of Wonders";
      case "tunisia":
        return "Tunisia : From Sandy Shores to Rich Culture";
      case "spain":
        return "Spain : Vibrant Colors and Timeless Charm";
      case "mini-evo":
        return "Mini Evo : A Vintage Treasure";
      case "morocco":
        return "It's not beautiful, it's just Morocco";  
      case "france":
        return "France : Where Romance Meets Adventure";
      case "portraits":
        return "Portraits : A Glimpse into the Soul";  
      default:
        return "Mini Evo : A Vintage Treasure";
    }
  };
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">
        {getTitle(subcategory)}
      </h1>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20} // Espace esthétique entre les images
          slidesPerView={"auto"} // Permet de scroller horizontalement
          centeredSlides={true} // Centre la vue sur une image
          pagination={{ clickable: true }}
          navigation // Active les flèches
          loop={true} // Boucle infinie
          grabCursor={true} // Change le curseur pour l'effet de drag
          style={{
            width: "85%",
            margin: "0 auto",
          }}
        >
          {data.map((image, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: "auto", // Conserve la largeur naturelle des images
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={image.url}
                alt={image.alt || `Image ${idx + 1}`}
                style={{
                  width: "auto",
                  height: "70vh", // Adapte la hauteur à la vue
                  objectFit: "contain", // Conserve la proportion naturelle
                  borderRadius: "10px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Ombre légère
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoryGallery;