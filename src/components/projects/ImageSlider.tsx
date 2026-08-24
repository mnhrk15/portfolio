"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Screenshot {
  src: string;
  caption: string;
}

interface ImageSliderProps {
  screenshots: Screenshot[];
  /**
   * 共有レイアウト遷移用。プロジェクトカードのサムネイル枠と同じ layoutId を渡すと、
   * カードの画像枠がそのままこのビューポート枠へ morph する。
   */
  frameLayoutId?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ screenshots, frameLayoutId }) => {
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
      <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-border">
        <p className="text-text-main">No images to display.</p>
      </div>
    );
  }
  
  return (
    <div className="relative w-full">
      {/*
        前後ボタンの位置基準。以前は最も外側の div を基準にしていたため、
        top-1/2 がキャプション・ドットを含む全体の中央になり、
        ボタンが画像枠の中心より下にずれていた。
        なお枠（共有レイアウト要素）の内側には入れない。morph 中に枠へ掛かる
        scale がボタンにもそのまま乗ってしまうため。
      */}
      <div className="relative mb-4">
        {/* 角丸は borderRadius を数値で指定する。Tailwind の rounded-lg だと
            共有レイアウト遷移中に framer-motion の scale 補正が効かず角丸が歪む */}
        <motion.div
          layoutId={frameLayoutId}
          style={{ borderRadius: 8 }}
          className="relative w-full h-96 overflow-hidden bg-gray-50 border border-gray-border"
        >
          <Image
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].caption || `Screenshot ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain"
          />
        </motion.div>

        {/* Navigation Buttons */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-base-white/90 text-text-main p-2 rounded-full hover:bg-base-white transition-all duration-200 backdrop-blur-sm border border-gray-border"
              aria-label="前の画像"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-base-white/90 text-text-main p-2 rounded-full hover:bg-base-white transition-all duration-200 backdrop-blur-sm border border-gray-border"
              aria-label="次の画像"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="text-center px-4 py-3 bg-gray-50 rounded-lg border border-gray-border min-h-[2.5rem] flex items-center justify-center">
        <p className="text-sm text-text-main font-medium leading-relaxed">
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
                    ? 'bg-accent border-accent scale-110'
                    : 'bg-base-white border-gray-300 hover:border-accent/50'
                }`}
                aria-label={`スクリーンショット ${index + 1} を表示`}
              />
          ))}
      </div>
    </div>
  );
};

export default ImageSlider; 