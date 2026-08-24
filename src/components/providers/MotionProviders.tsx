"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";
import "lenis/dist/lenis.css";

/**
 * スムーススクロール（Lenis）と framer-motion のグローバル設定をまとめる client 境界。
 *
 * layout.tsx から children を props として受け取るため、配下のセクションは
 * Server Component のままレンダリングされる。
 *
 * MotionConfig には transition を渡さない。グローバルな transition は
 * layout アニメーション（Projects カード→モーダルの共有レイアウト遷移）の
 * 既定値も上書きしてしまうため、各所で明示指定する方針。
 */
const MotionProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        // 控えめな慣性。既定の 0.1 よりわずかに追従を速くして粘りを減らす
        lerp: 0.12,
        smoothWheel: true,
        // モバイルはネイティブスクロールに任せる（慣性の二重化と 100vh 問題の回避）
        syncTouch: false,
        // アンカーは Header 側で明示制御する（next/link との競合を避けるため）
        anchors: false,
        // モーダル内など入れ子のスクロール要素をネイティブに任せる
        allowNestedScroll: true,
        // prefers-reduced-motion: reduce では慣性なしの即時スクロールにフォールバックする
        respectReducedMotion: true,
        autoRaf: true,
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
};

export default MotionProviders;
