"use client";

import { motion } from "framer-motion";
import { drawRule, VIEWPORT } from "@/lib/motion";

/**
 * SectionTitle 直下のアクセント罫線。左から引かれる。
 *
 * scaleX はレイアウトを起こさないため CLS は発生しない。
 * whileInView が client 専用のため、SectionTitle 本体を Server Component に
 * 保ったままこの要素だけを client に切り出している。
 */
const SectionRule = () => {
  return (
    <motion.span
      aria-hidden="true"
      className="block w-10 h-px bg-accent mx-auto mt-5 origin-left"
      variants={drawRule}
      initial="hidden"
      whileInView="visible"
      // 高さ1pxの要素なので「完全に見えたら」発火させる
      viewport={{ ...VIEWPORT, amount: 1 }}
    />
  );
};

export default SectionRule;
