import React from 'react';
import { ArrowDown } from 'lucide-react';
import Section from '../layout/Section';

const HeroSection = () => {
  return (
    <Section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] pt-0 pb-0">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-text-dark mb-4">
          AI-Driven Problem Solving
        </h1>
        <p className="text-lg md:text-xl text-text-main mb-8">
          AIを活用した問題解決で、ビジネスの課題を革新します。
        </p>
        <p className="font-bold text-xl font-montserrat text-text-dark">
          Hiraku
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-gray-subtext animate-bounce" />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection; 