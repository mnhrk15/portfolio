"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Screenshot {
  src: string;
  caption: string;
}

interface ImageSliderProps {
  screenshots: Screenshot[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!screenshots || screenshots.length === 0) {
    return <div className="text-center">No images to display.</div>;
  }
  
  return (
    <div className="relative w-full">
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-2">
        <Image
          src={screenshots[currentIndex].src}
          alt={screenshots[currentIndex].caption || `Screenshot ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 ease-in-out object-contain"
        />
      </div>
      
      {/* Navigation Buttons */}
      {screenshots.length > 1 && (
        <>
            <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            >
            <ChevronLeft size={24} />
            </button>
            <button 
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            >
            <ChevronRight size={24} />
            </button>
        </>
      )}

      {/* Caption */}
      <div className="text-center text-sm text-gray-subtext h-8">
        <p>{screenshots[currentIndex].caption}</p>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-2">
          {screenshots.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-accent' : 'bg-gray-border'}`}
              />
          ))}
      </div>
    </div>
  );
};

export default ImageSlider; 