import type { Easing, Transition, Variants } from "framer-motion";

/**
 * サイト全体のモーショントークン。
 *
 * 型のみを import しているため実行時の依存は無く、Server Component からも読める。
 * 演出強度は「標準」（洗練された静けさを保ちつつ、気づくところはしっかり動く）。
 */

/* ─────────── Easing ─────────── */

/** expo out。立ち上がりが速く着地が静か。本サイトの基準カーブ */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const satisfies Easing;

/** easeOutCubic。hover など小さなUI反応向けの素直なカーブ */
export const EASE_OUT_SOFT = [0.33, 1, 0.68, 1] as const satisfies Easing;

/* ─────────── Duration（秒） ─────────── */

export const DURATION = {
  fast: 0.2, // hover・色・下線
  base: 0.4, // 汎用（UIの出現・消失）
  slow: 0.6, // セクションのreveal など「読ませる」動き
} as const;

/* ─────────── Transition ─────────── */

export const TRANSITION = {
  fast: { duration: DURATION.fast, ease: EASE_OUT_SOFT },
  base: { duration: DURATION.base, ease: EASE_OUT_EXPO },
  slow: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
} satisfies Record<string, Transition>;

/* ─────────── whileInView の既定値 ─────────── */

/**
 * amount: 要素の15%が見えたら発火（framer-motion 12 では threshold ではなく amount）。
 * margin: 画面下端から12%内側で発火させ、慣性スクロール中に「後追いで出てくる」違和感を消す。
 */
export const VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -12% 0px",
} as const;

/* ─────────── 共通 Variants ─────────── */

/** 下から16pxのフェードイン。custom で delay（秒）を受ける */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...TRANSITION.slow, delay },
  }),
};

/** 子を stagger させる親。親自身は動かさない。custom で間隔（秒）を受ける */
export const staggerContainer: Variants = {
  hidden: {},
  visible: (stagger: number = 0.06) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

/** staggerContainer の子 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.slow },
};

/** SectionTitle 直下の罫線を左から引く */
export const drawRule: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...TRANSITION.slow, delay: 0.15 },
  },
};

/* ─────────── Hero のタイムライン ─────────── */

/**
 * Hero の各要素の開始時刻を一元管理する。
 * ScrambleText / CountUp の delay を at() から導出することで、
 * stagger 値を変えたときに演出の開始タイミングが自動追従する。
 */
export const HERO = {
  delayChildren: 0.1,
  stagger: 0.12,
  /** index: 0=見出し 1=リード文 2=名前 3=実績数字 */
  at: (index: number) => 0.1 + index * 0.12,
  scrambleDuration: 1.2,
  countDuration: 1.2,
} as const;

export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: HERO.stagger,
      delayChildren: HERO.delayChildren,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.slow },
};

export const heroArrow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...TRANSITION.base, delay: HERO.at(3) + DURATION.slow + 0.15 },
  },
};

/** 固定ヘッダー（h-16 = 64px）の分だけ手前でアンカースクロールを止めるオフセット */
export const HEADER_SCROLL_OFFSET = -64;
