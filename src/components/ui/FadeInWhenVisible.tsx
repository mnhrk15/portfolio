"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  /** 発火からの遅延（秒） */
  delay?: number;
  /** 発火に必要な可視割合。既定は VIEWPORT.amount */
  amount?: number;
}

/**
 * ビューポートに入ったら下から16pxフェードインする。
 *
 * whileInView は内部の IntersectionObserver で完結し React state を更新しないため、
 * 再レンダリングは発生しない。
 */
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
  amount,
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, ...(amount !== undefined && { amount }) }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
