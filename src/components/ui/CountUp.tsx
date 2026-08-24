"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface CountUpProps {
  /** 最終的な表示テキスト。a11y 用ラベルとして常に DOM に載せる */
  value: string;
  /** カウントアップの終着値 */
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * 数値を 0 から指定値までカウントアップする。
 *
 * MotionValue を直接レンダリングするため、カウント中に React の再レンダリングは発生しない。
 *
 * MotionValue の初期値を終着値にしているのが要点。こうすると SSR と初回クライアント
 * レンダリングがどちらも最終テキストになり、reduced motion の有無で DOM 構造が
 * 分岐しないためハイドレーション不一致が起きない。カウントは effect 内で
 * 0 に戻してから開始する。
 */
const CountUp: React.FC<CountUpProps> = ({
  value,
  to,
  prefix = "",
  suffix = "",
  duration = 1.2,
  delay = 0,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(to);
  const digits = useTransform(count, (v) => `${Math.round(v)}`);

  useEffect(() => {
    if (shouldReduceMotion) return;
    count.set(0);
    const controls = animate(count, to, {
      duration,
      delay,
      ease: EASE_OUT_EXPO,
    });
    return () => controls.stop();
  }, [count, to, duration, delay, shouldReduceMotion]);

  return (
    <span className={`inline-block ${className ?? ""}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {prefix}
        {/*
          幅の予約は数字部分だけに掛ける。font-mono（IBM Plex Mono）の数字は 1文字 = 1ch
          なので、終着値の桁数ぶんを確保すれば桁が増えてもレイアウトシフトが起きない。
          prefix/suffix は全角を含みうる（"約" / "件"）ため ch 換算できず、
          アニメーションしない静的テキストとして枠の外に置く。
        */}
        <motion.span
          className="inline-block text-center tabular-nums"
          style={{ minWidth: `${String(to).length}ch` }}
        >
          {digits}
        </motion.span>
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
