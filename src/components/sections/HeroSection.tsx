"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2, // Staggered items finish around 1.1s
      duration: 0.5,
    },
  },
};

const HeroSection = () => {
  return (
    <Section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] pt-0 pb-0 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-[-2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB 1px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gradient Mask */}
      <div className="absolute inset-0 z-[-1] bg-light-gray [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <motion.div 
        className="text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-montserrat text-text-dark mb-4"
          variants={itemVariants}
        >
          AI-Driven Problem Solving
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-text-main mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          AIを活用して、ビジネス課題を解決するエンジニアを目指しています。
        </motion.p>
        <motion.p 
          className="font-bold text-xl font-montserrat text-text-dark"
          variants={itemVariants}
        >
          Mine Hiraku
        </motion.p>
      </motion.div>
      
      {/* Arrow Down */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
      >
        <ArrowDown className="w-6 h-6 text-gray-subtext animate-bounce" />
      </motion.div>
    </Section>
  );
};

export default HeroSection; 