import React, { useState } from 'react';
import Image from 'next/image';

const baseURL = 'https://cppsoc.xyz/assets/carousel/';
const images = [
  '1.jpg',
  'IMG_3584.JPG',
  'IMG_3604.JPG'
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
    <div className="image-carousel flex items-center">
      <button onClick={prevImage} className="p-2">
        &#9664; {/* Left arrow */}
      </button>
      <Image 
        src={`${baseURL}${images[currentIndex]}`} 
        alt={`Slide ${currentIndex}`} 
        width={800} 
        height={600} 
        className="carousel-image mx-4" 
      />
      <button onClick={nextImage} className="p-2">
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel;