"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import ScrambleText from '../ui/ScrambleText';
import CountUp from '../ui/CountUp';
import { heroStats } from '@/data/profile';
import { HERO, heroArrow, heroContainer, heroItem } from '@/lib/motion';

/**
 * 方眼グリッドの端をやわらげるフェード。グリッド自体に掛ける（黒=表示 / 透明=非表示）。
 *
 * 縦半径を 50% にすることで上下端でちょうど透明になり、次セクションとの境目が
 * 罫線でぶつ切りにならない。横半径は 65% と広めに取り、左右は完全には消さずに
 * 中央帯の方眼をしっかり見せる。
 */
const GRID_FADE =
  'radial-gradient(ellipse 65% 50% at 50% 50%, black 40%, transparent 100%)';

const HeroSection = () => {
  return (
    <Section
      id="hero"
      className="relative isolate flex items-center justify-center min-h-[calc(100vh-4rem)] pt-0 pb-0 overflow-hidden"
    >
      {/* Background Grid（罫色は gray-border トークンと同色。端は GRID_FADE で白へ抜く） */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB 1px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: GRID_FADE,
          WebkitMaskImage: GRID_FADE,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-text-dark mb-4"
          variants={heroItem}
        >
          <ScrambleText
            text="AI-Driven Problem Solving"
            duration={HERO.scrambleDuration}
            delay={HERO.at(0)}
          />
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-text-main mb-8 max-w-2xl mx-auto"
          variants={heroItem}
        >
          生成AIを使いこなして素早く形にする開発力と、課題を要件に落とし込む力で、ビジネス課題を解決します。
        </motion.p>
        <motion.p
          className="font-bold text-xl text-text-dark"
          variants={heroItem}
        >
          Mine Hiraku
        </motion.p>

        {/* Stats */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-gray-border"
          variants={heroItem}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="sm:px-10">
              <p className="font-mono text-2xl md:text-3xl font-medium text-accent">
                {stat.countTo === undefined ? (
                  stat.value
                ) : (
                  <CountUp
                    value={stat.value}
                    to={stat.countTo}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={HERO.countDuration}
                    delay={HERO.at(3) + 0.1}
                  />
                )}
              </p>
              <p className="mt-1 text-xs text-gray-subtext">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Arrow Down */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        variants={heroArrow}
        initial="hidden"
        animate="visible"
      >
        <ArrowDown className="w-6 h-6 text-gray-subtext motion-safe:animate-bounce" />
      </motion.div>
    </Section>
  );
};

export default HeroSection;
