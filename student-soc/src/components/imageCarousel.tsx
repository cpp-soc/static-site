import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const baseURL = 'https://cppsoc.xyz/assets/carousel/';
const images = [
  '1.jpg',
  'IMG_3584.JPG',
  'IMG_3604.JPG',
  'carousel4.jpg',
  'IMG_6844.jpg'
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextImage, 5000);
  }, [nextImage]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
  }, [currentIndex, resetTimer]);

  return (
    <div className="image-carousel relative flex flex-col items-center">
      <div className="relative w-[600px] h-[400px]">
        <button 
          onClick={() => { prevImage(); resetTimer(); }} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition z-10"
        >
          &#9664;
        </button>
        <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image 
                src={`${baseURL}${images[currentIndex]}`} 
                alt={`Slide ${currentIndex + 1}`} 
                width={600} 
                height={400} 
                className="w-full h-full object-cover" 
                quality={100}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button 
          onClick={() => { nextImage(); resetTimer(); }} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition z-10"
        >
          &#9654;
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => { goToImage(index); resetTimer(); }}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
