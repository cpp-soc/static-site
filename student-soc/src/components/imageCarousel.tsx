import React, { useState } from 'react';

const baseURL = 'https://cppsoc.xyz/assets/carousel/';
const images = [
  '1.jpg',
  'IMG_3584.jpg',
  'IMG_3604.jpg'
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={`${baseURL}${images[currentIndex]}`} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;