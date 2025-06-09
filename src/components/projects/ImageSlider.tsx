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
    return (
      <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-gray-700">No images to display.</p>
      </div>
    );
  }
  
  return (
    <div className="relative w-full">
      <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-200">
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
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-md backdrop-blur-sm border border-gray-200"
            aria-label="前の画像"
            >
            <ChevronLeft size={24} />
            </button>
            <button 
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-md backdrop-blur-sm border border-gray-200"
            aria-label="次の画像"
            >
            <ChevronRight size={24} />
            </button>
        </>
      )}

      {/* Caption */}
      <div className="text-center px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[2.5rem] flex items-center justify-center">
        <p className="text-sm text-gray-700 font-medium leading-relaxed">
          {screenshots[currentIndex].caption}
        </p>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
          {screenshots.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 border ${
                  currentIndex === index 
                    ? 'bg-blue-600 border-blue-600 shadow-sm scale-110' 
                    : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
                aria-label={`スクリーンショット ${index + 1} を表示`}
              />
          ))}
      </div>
    </div>
  );
};

export default ImageSlider; 