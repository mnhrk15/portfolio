"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import Section from '../layout/Section';
import ScrambleText from '../ui/ScrambleText';
import CountUp from '../ui/CountUp';
import { heroStats } from '@/data/profile';
import { HERO, heroArrow, heroContainer, heroItem } from '@/lib/motion';

/**
 * 方眼グリッドを覆う白いマスク。中心を CSS 変数にしてカーソルへ追従させる。
 * 既存デザインの radial-gradient の「中心」だけを可変にしているため、
 * 追従しない環境ではデフォルト値の 50% が効いて従来と完全に同じ見た目になる。
 */
const MASK_IMAGE =
  'radial-gradient(55% 55% at var(--hero-x, 50%) var(--hero-y, 50%), transparent 15%, black 100%)';

const SPRING_CONFIG = { stiffness: 120, damping: 30, mass: 0.6 } as const;

const HeroSection = () => {
  const maskRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(maskRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // 初期値は中央。useSpring を挟むことで光がわずかに遅れて追従する
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springX = useSpring(pointerX, SPRING_CONFIG);
  const springY = useSpring(pointerY, SPRING_CONFIG);
  const maskX = useTransform(springX, (v) => `${v * 100}%`);
  const maskY = useTransform(springY, (v) => `${v * 100}%`);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;
    // タッチ端末ではリスナーを張らない（CSS変数のデフォルト 50% が効き、従来と同じ見た目になる）
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const el = maskRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width);
      pointerY.set((event.clientY - rect.top) / rect.height);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isInView, shouldReduceMotion, pointerX, pointerY]);

  return (
    <Section
      id="hero"
      className="relative isolate flex items-center justify-center min-h-[calc(100vh-4rem)] pt-0 pb-0 overflow-hidden"
    >
      {/* Background Grid（罫色はトークンより一段淡い #F1F3F6 を意図的に使用） */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F1F3F6 1px, transparent 1px),
            linear-gradient(to bottom, #F1F3F6 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Gradient Mask（カーソル追従） */}
      <motion.div
        ref={maskRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-base-white"
        style={
          {
            '--hero-x': maskX,
            '--hero-y': maskY,
            maskImage: MASK_IMAGE,
            WebkitMaskImage: MASK_IMAGE,
          } as unknown as MotionStyle
        }
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
