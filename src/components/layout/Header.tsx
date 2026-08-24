"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useLenis } from 'lenis/react';
import { HEADER_SCROLL_OFFSET, TRANSITION } from '@/lib/motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lenis = useLenis();

  const { scrollY, scrollYProgress } = useScroll();
  // Lenis の慣性と進捗バーの動きを視覚的に揃える
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  // framer-motion の scroll 購読は rAF ベースでバッチされるため、生の scroll リスナより軽い。
  // 同値の setState は React が bail out するので、再レンダリングは境界通過時のみ。
  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 8);
  });

  // 現在地のセクション検出。スクロールの駆動元（Lenis / ネイティブ / キーボード）に
  // 依存せず、毎フレームの計算も発生しない。
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // DOM 順で最初に見えているものを現在地とする
        const current = elements.find((el) => visible.has(el.id));
        setActiveId(current?.id ?? null);
      },
      {
        // 上64pxは固定ヘッダーの分、下60%は無視 → 画面上部1/3のセクションを現在地とみなす
        rootMargin: '-64px 0px -60% 0px',
        threshold: 0,
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // モバイルメニュー展開中は背景のスクロールを止める
  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // md 以上ではハンバーガーもメニューも非表示になるため、開いたままリサイズされると
  // 閉じる手段が無くなり Lenis が停止したまま（html が overflow: clip）になる。
  // ブレークポイントを超えたら強制的に閉じる。
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // 対象セクションが存在しないページ（404 など）では既定の遷移に任せる
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    setIsOpen(false);
    // 慣性スクロールの到着を待たずに下線を移動させる（IO は後から同じ値に追従する）
    setActiveId(href.slice(1));

    if (lenis) {
      // モバイルメニューから遷移する場合、isOpen の state 更新はまだ反映されておらず
      // Lenis は停止したままになる。停止中の scrollTo は破棄されるため先に再開する。
      lenis.start();
      lenis.scrollTo(target, { offset: HEADER_SCROLL_OFFSET });
    } else {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET,
      });
    }
    window.history.replaceState(null, '', href);
  };

  return (
    // layoutRoot: position:fixed の要素をレイアウト投影のルートにして、
    // ページのスクロール量が下線の位置計算に混ざらないようにする
    <motion.header
      layoutRoot
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-base-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* 高さ 64px のバー。モバイルメニュー展開時に進捗バーが下へ流れないよう、
          この wrapper を進捗バーの位置基準にする */}
      <div className="relative">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          {/* トップページでは #hero へスムーススクロールし、
              #hero が存在しないページ（404 など）ではホームへ遷移する */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-mono text-base font-medium tracking-tight text-text-dark"
          >
            Hiraku&apos;s Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeId === id;
              return (
                <div key={link.href} className="relative py-1">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    data-active={isActive}
                    className={[
                      'relative block text-sm font-medium pb-1 transition-colors duration-200',
                      isActive ? 'text-accent' : 'text-text-main hover:text-accent',
                      // hover 時の下線は CSS のみで完結させる（アクティブ下線と役割を分ける）
                      'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left',
                      'after:scale-x-0 after:bg-accent/40 after:transition-transform after:duration-200',
                      'hover:after:scale-x-100 data-[active=true]:after:hidden',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={TRANSITION.base}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-text-main hover:bg-light-gray"
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-base-white shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col items-center px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block w-full text-center py-3 text-text-main hover:bg-light-gray hover:text-accent transition-colors rounded-md"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
