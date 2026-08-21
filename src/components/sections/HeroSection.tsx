"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { heroStats } from '@/data/profile';

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
      delay: 1.6, // Staggered items finish around 1.5s
      duration: 0.5,
    },
  },
};

const HeroSection = () => {
  return (
    <Section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] pt-0 pb-0 overflow-hidden">
      {/* Background Grid（罫色はトークンより一段淡い #F1F3F6 を意図的に使用） */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F1F3F6 1px, transparent 1px),
            linear-gradient(to bottom, #F1F3F6 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Gradient Mask */}
      <div className="absolute inset-0 z-[-1] bg-base-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <motion.div
        className="text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-text-dark mb-4"
          variants={itemVariants}
        >
          AI-Driven Problem Solving
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-text-main mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          生成AIを使いこなして素早く形にする開発力と、課題を要件に落とし込む力で、ビジネス課題を解決します。
        </motion.p>
        <motion.p
          className="font-bold text-xl text-text-dark"
          variants={itemVariants}
        >
          Mine Hiraku
        </motion.p>

        {/* Stats */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-gray-border"
          variants={itemVariants}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="sm:px-10">
              <p className="font-mono text-2xl md:text-3xl font-medium text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-subtext">{stat.label}</p>
            </div>
          ))}
        </motion.div>
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
