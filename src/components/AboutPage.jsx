import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
  margin-right: 140px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
const PhotoCarousel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80%; /* Enlarged the height of the photos */
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    height: auto;
  }
  img {
    max-width: 120%; /* Enlarged the width of the photos */
    max-height: 100%; /* Enlarged the height of the photos */
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
  }
  img.hidden {
    opacity: 0;
  }
  img.active {
    opacity: 1;
  }
`;
const AboutText = styled.div`
  flex: 1;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  margin-left: 50px; /* Décalage vers la gauche */
  @media (max-width: 768px) {
    margin-left: 0; /* Réinitialisation pour mobile */
  }
  h2 {
    font-size: 2rem; /* Reduced the size of the heading */
    margin-bottom: 10px;
    color: #333;
    text-align: left;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    text-align: justify;
  }
  .contact-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: normal; /* Pas de gras pour un look minimaliste */
  color: black; /* Texte noir */
  background-color: white; /* Fond blanc */
  border: 1px solid black; /* Contour noir */
  border-radius: 4px; /* Légèrement arrondi */
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease; /* Transition fluide pour le survol */
  &:hover {
    background-color: black; /* Fond noir au survol */
    color: white; /* Texte blanc au survol */
  }
}
`;
const AboutPage = () => {
  const photos = [
    "/images/une5.webp",
    "/images/une6.webp",
    "/images/une4.webp",
    "/images/une3.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [photos.length]);
  return (
    <AboutContainer>
      <PhotoCarousel>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Me ${index + 1}`}
            className={currentIndex === index ? "active" : "hidden"}
          />
        ))}
      </PhotoCarousel>
      <AboutText>
        <h2>Through My Lens</h2>
        <p>
          A yet to be software engineer with a deep passion for photography. I've always
          been fascinated by how photography allows us to travel through time
          and relive the beauty of moments. Inspired by everything—landscapes,
          friends, objects—I strive to capture life's fleeting moments and make
          them eternal through my lens.
        </p>
        <a href="mailto:thepineapplegirlofficiel@gmail.com" className="contact-btn">
            Contact Me
          </a>
      </AboutText>
    </AboutContainer>
  );
};
export default AboutPage;