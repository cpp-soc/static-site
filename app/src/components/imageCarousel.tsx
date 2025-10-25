import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const baseURL = '/assets/carousel/';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // new awesome api cause im so tired of updating these images lmfao
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/carousel-images');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data.images);
        setError(null);
      } catch (err) {
        setError('Failed to load carousel images');
        console.error('Error fetching carousel images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (images.length > 1) {
      intervalRef.current = setInterval(nextImage, 5000);
    }
  }, [nextImage, images.length]);

  useEffect(() => {
    if (images.length > 0) {
      resetTimer();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetTimer, images.length]);

  useEffect(() => {
    if (images.length > 0) {
      resetTimer();
    }
  }, [currentIndex, resetTimer, images.length]);

  if (loading) {
    return (
      <div className="image-carousel relative flex flex-col items-center">
        <div className="relative w-[600px] h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-gray-500">Loading images...</div>
        </div>
      </div>
    );
  }

  if (error || images.length === 0) {
    return (
      <div className="image-carousel relative flex flex-col items-center">
        <div className="relative w-[600px] h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-gray-500">{error || 'No images found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="image-carousel relative flex flex-col items-center">
      <div className="relative w-[600px] h-[400px]">
        {images.length > 1 && (
          <button 
            onClick={() => { prevImage(); resetTimer(); }} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
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
        {images.length > 1 && (
          <button 
            onClick={() => { nextImage(); resetTimer(); }} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      {images.length > 1 && (
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
      )}
    </div>
  );
};

export default ImageCarousel;
