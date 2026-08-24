"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  /** 全文字が確定するまでの秒数 */
  duration?: number;
  /** 開始までの待ち時間（秒） */
  delay?: number;
  className?: string;
}

/** 位置を固定する文字。単語の塊とハイフンの造形を最初から保つ */
const FIXED_CHARS = new Set([" ", "-", "　"]);

/** ノイズの更新間隔（ミリ秒）。毎フレーム更新すると落ち着きが無くなる */
const NOISE_INTERVAL_MS = 42;

function shuffle<T>(input: T[]): T[] {
  const a = [...input];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * テキストがシャッフル状態から1文字ずつ確定していく演出。マウント時に一度だけ実行する。
 *
 * 置換文字をランダムな英数字にせず「表示対象の文字列自身の並べ替え」に限定しているのが要点。
 * IBM Plex Sans JP はプロポーショナルフォントのため、無関係な文字に差し替えると
 * 行幅が毎フレーム変わり、モバイルでは折り返し位置まで動いてしまう。
 * 文字の多重集合を保てば総アドバンス幅がほぼ一致し、レイアウトシフトが起きない。
 *
 * SSR と初回クライアントレンダリングでは最終テキストを出力する（ハイドレーション一致・SEO対策）。
 */
const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 1.2,
  delay = 0,
  className,
}) => {
  const [display, setDisplay] = useState(text);
  const shouldReduceMotion = useReducedMotion();

  // 依存はいずれも安定しているため、マウントごとに一度だけ実行される。
  // hover などで再生されることはない（再生用のハンドラを持たない）。
  useEffect(() => {
    if (shouldReduceMotion) return;

    const chars = [...text];
    const movable = chars
      .map((char, index) => ({ char, index }))
      .filter(({ char }) => !FIXED_CHARS.has(char));

    let rafId = 0;
    let lastNoiseAt = 0;

    const tick = (now: number, startedAt: number) => {
      const progress = Math.min((now - startedAt) / (duration * 1000), 1);
      const lockedCount = Math.floor(progress * movable.length);

      if (now - lastNoiseAt > NOISE_INTERVAL_MS || progress === 1) {
        lastNoiseAt = now;
        const next = [...chars];
        const unlocked = movable.slice(lockedCount);
        const shuffled = shuffle(unlocked.map(({ char }) => char));
        unlocked.forEach(({ index }, i) => {
          next[index] = shuffled[i];
        });
        setDisplay(next.join(""));
      }

      if (progress < 1) {
        rafId = requestAnimationFrame((t) => tick(t, startedAt));
      } else {
        setDisplay(text);
      }
    };

    const timerId = window.setTimeout(() => {
      const startedAt = performance.now();
      rafId = requestAnimationFrame((t) => tick(t, startedAt));
    }, delay * 1000);

    return () => {
      window.clearTimeout(timerId);
      cancelAnimationFrame(rafId);
    };
  }, [text, duration, delay, shouldReduceMotion]);

  return (
    <span className={className}>
      {/* 支援技術・翻訳ツール・クローラには常に最終テキストのみを読ませる */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
};

export default ScrambleText;
