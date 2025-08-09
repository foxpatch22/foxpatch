'use client';

import {
  useMemo,
  useState,
  type ReactElement,
  type SVGProps,
} from 'react';
import { Permanent_Marker } from 'next/font/google';
import LiquidTabs from '@/components/visuals/LiquidTabs';

const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' });

/* ----------------------- Types ----------------------- */
type StackKey = 'webflow' | 'shopify' | 'custom';

type Card = {
  title: string;
  points: string[];
  icon: keyof typeof Icons;
};

type Stack = {
  label: string;
  accent: string;          // hex
  textOnActive: string;
  cards: [Card, Card, Card];
};

/* ------------------- Card Icons --------------------- */
const Icons = {
  rocket: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M5 15l4 4m10-14c-2-1-6 1-9 4l-4 4c-3 3-5 7-4 9 2 1 6-1 9-4l4-4c3-3 5-7 4-9z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  bolt: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  search: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  package: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  chart: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M3 3v18h18M7 16v-6M12 19v-9M17 14V7"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  shield: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  cpu: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  sparkles: (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M5 12l3-1 1-3 1 3 3 1-3 1-1 3-1-3-3-1zm10-8l1.5 3 3 1.5-3 1.5L15 13l-1.5-3-3-1.5 3-1.5L15 4z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
};

/* -------------------- Content ---------------------- */
const STACKS: Record<StackKey, Stack> = {
  webflow: {
    label: 'Webflow',
    accent: '#4353FF',
    textOnActive: '#ffffff',
    cards: [
      { icon: 'rocket', title: 'Launch Fast', points: ['Fully responsive layouts', 'Webflow CMS for your team', 'No‑code publishing & updates'] },
      { icon: 'bolt',   title: 'Smooth Interactions', points: ['Engaging animations', 'Micro‑interactions tuned', 'Tasteful scroll / reveal effects'] },
      { icon: 'search', title: 'SEO Ready', points: ['Semantic structure & meta', 'Optimized media + lazy load', 'Clean URLs & sitemap'] },
    ],
  },
  shopify: {
    label: 'Shopify',
    accent: '#22A45A',
    textOnActive: '#ffffff',
    cards: [
      { icon: 'package', title: 'E‑commerce Focused', points: ['Trusted checkout', 'Product & variant management', 'Subscriptions, reviews, discounts'] },
      { icon: 'shield',  title: 'Inventory & Orders', points: ['Real‑time stock tracking', 'Order & shipping automation', 'Multi‑location fulfillment'] },
      { icon: 'chart',   title: 'Sales Optimization', points: ['Analytics & insights', 'Abandoned cart recovery', 'Email flows & CRM'] },
    ],
  },
  custom: {
    label: 'Custom Code',
    accent: '#111111',
    textOnActive: '#ffffff',
    cards: [
      { icon: 'cpu',      title: 'Fully Tailored', points: ['100% custom features', 'Design system components', 'Unique visuals & motion'] },
      { icon: 'shield',   title: 'Secure & Scalable', points: ['Next.js on Vercel', 'Best‑practice security & auth', 'Ready for spikes & growth'] },
      { icon: 'sparkles', title: 'Performance Driven', points: ['Lightweight code & caching', 'Core Web Vitals in the green', 'Search, i18n, analytics'] },
    ],
  },
};

/* ----------------- Helpers / Theme ------------------ */
function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
const rgba = (c: { r: number; g: number; b: number }, a: number) =>
  `rgba(${c.r},${c.g},${c.b},${a})`;

/** Ultra‑subtle Liquid‑Glass theme (almost clear) */
function useGlassTheme(accentHex: string) {
  return useMemo(() => {
    const c = hexToRgb(accentHex);

    return {
      tint: rgba(c, 0.04),
      tintHover: rgba(c, 0.08),
      border: rgba(c, 0.12),
      glow: rgba(c, 0.10),
      icon: rgba(c, 0.65),
      blobs: `
        radial-gradient(60% 80% at 20% 15%, ${rgba(c, 0.06)} 0%, transparent 60%),
        radial-gradient(70% 90% at 85% 80%, ${rgba(c, 0.05)} 0%, transparent 65%)
      `,
    };
  }, [accentHex]);
}

/* ------------------ Glass Card --------------------- */
function GlassCard({
  title,
  points,
  icon: Icon,
  theme,
}: {
  title: string;
  points: string[];
  icon: (p: SVGProps<SVGSVGElement>) => ReactElement;
  theme: ReturnType<typeof useGlassTheme>;
}) {
  return (
    <div
      className="
        group relative rounded-[28px] p-7 md:p-8
        transition-transform duration-300
        hover:scale-[1.015]
      "
      style={{
        background: `${theme.blobs}, ${theme.tint}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: `0 12px 40px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,.18)`,
        border: `1px solid ${theme.border}`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,.25) 0%, rgba(255,255,255,0) 40%)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-10">
        <div
          className="mb-5 inline-flex items-center justify-center rounded-2xl"
          style={{
            background: 'rgba(255,255,255,.16)',
            padding: '12px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,.30)',
          }}
        >
          <Icon className="w-8 h-8" style={{ color: theme.icon }} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#141414] leading-snug">
          {title}
        </h3>

        <ul className="mt-4 space-y-2.5 text-[#1f2937] text-base">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-0.5">✅</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: theme.tintHover }}
      />
    </div>
  );
}

/* -------------------- Section ---------------------- */
export default function HowWeBuildCards() {
  const [active, setActive] = useState<StackKey>('webflow');
  const stack = STACKS[active];
  const theme = useGlassTheme(stack.accent);

  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#141414] leading-snug">
          <span className="block md:inline">We Help </span>
          <span className={`${permanentMarker.className} cartoon-text animate-glow text-5xl md:text-6xl`}>
            You Choose
          </span>
          <span className="block md:inline"> Wisely.</span>
        </h2>

        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto leading-relaxed text-lg">
          We match your goals with the right platform for a site that fits perfectly.
        </p>

        <div className="mt-8">
          <LiquidTabs value={active} onChange={(v) => setActive(v as StackKey)} className="mx-auto" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {stack.cards.map((c) => {
            const Icon = Icons[c.icon];
            return (
              <GlassCard
                key={c.title}
                title={c.title}
                points={c.points}
                icon={Icon}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}