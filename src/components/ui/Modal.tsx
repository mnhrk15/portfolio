"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { X } from 'lucide-react';
import { TRANSITION } from '@/lib/motion';

interface ModalProps {
  onClose: () => void;
  /** header 内の見出しに付けた id。aria-labelledby に使う */
  labelledBy: string;
  /** sticky ヘッダー左側の内容（見出しなど） */
  header: React.ReactNode;
  children: React.ReactNode;
}

/**
 * オーバーレイ表示の汎用モーダルシェル。
 *
 * 呼び出し側で条件レンダリングし、AnimatePresence 配下に置くことで
 * 開閉アニメーションと共有レイアウト遷移（layoutId）が成立する。
 *
 * 重要な制約: オーバーレイとパネルには transform 系のアニメーション
 * （scale / y など）を付けないこと。子要素の layoutId による projection と
 * 二重に掛かって morph が破綻する。登場・退場は opacity のみで行う。
 */
const Modal: React.FC<ModalProps> = ({ onClose, labelledBy, header, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // マウントされている間 = 開いている間だけ登録される。
  // aria-modal を宣言している以上、Tab もパネル内に閉じ込める必要がある
  // （モーダルは portal ではなくページ内に置かれるため、素の Tab は背景へ抜けてしまう）。
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !panel.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // 背景のスクロールロック。
  // lenis.stop() はホイールと慣性を止めるが、タッチ・スクロールバードラッグ・
  // キーボードは止まらないため body の overflow と併用する。
  // スクロールバー幅を補償しないとページ幅が変わり、カードの実測矩形がずれて
  // 共有レイアウト遷移の始点が飛ぶ。
  useEffect(() => {
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = 'hidden';
    lenis?.stop();

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
      lenis?.start();
    };
  }, [lenis]);

  // フォーカスを閉じるボタンへ移し、閉じたら元の要素へ戻す
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  return (
    // layoutRoot: position:fixed をレイアウト投影のルートにする。
    // これが無いと共有要素の始点が document の scrollY 分ずれる。
    <motion.div
      layoutRoot
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={TRANSITION.fast}
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        // パネル内をスクロールしてから閉じたときに飛び戻りの始点を正しく測るため
        layoutScroll
        // Lenis を停止していてもパネル内はネイティブスクロールを通す
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-base-white shadow-2xl border border-gray-border"
        style={{ borderRadius: 8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.15, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 p-6 border-b border-gray-border bg-base-white rounded-t-lg">
          <div className="min-w-0">{header}</div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="shrink-0 p-2 rounded-full text-gray-subtext hover:bg-gray-100 hover:text-text-main transition-colors duration-200"
            aria-label="モーダルを閉じる"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 bg-base-white text-text-dark">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
