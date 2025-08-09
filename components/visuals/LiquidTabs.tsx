'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

/** ---------------------------------------------------------
 * Tab configuration
 * --------------------------------------------------------- */
type TabKey = 'webflow' | 'shopify' | 'custom';

type TabDef = {
  key: TabKey;
  label: string;
  /** Primary accent used by the active capsule + text */
  accent: string;
  /** Secondary tone for gradients/highlights */
  accentSoft: string;
  /** Whether text on the active capsule should be light or dark */
  onAccent: 'light' | 'dark';
  /** Path in /public for the logo */
  iconSrc: string; // e.g. /logos/webflow.svg
};

const TABS: TabDef[] = [
  {
    key: 'webflow',
    label: 'Webflow',
    accent: '#4353FF',
    accentSoft: '#7C86FF',
    onAccent: 'light',
    iconSrc: '/logos/webflow.svg',
  },
  {
    key: 'shopify',
    label: 'Shopify',
    accent: '#22A45A',
    accentSoft: '#49C37A',
    onAccent: 'light',
    iconSrc: '/logos/shopify.svg',
  },
  {
    key: 'custom',
    label: 'Custom Code',
    accent: '#111111',
    accentSoft: '#3A3A3A',
    onAccent: 'light',
    iconSrc: '/logos/code.svg', // put your custom icon here
  },
];

/** ---------------------------------------------------------
 * LiquidTabs
 * --------------------------------------------------------- */
type Props = {
  value: TabKey;
  onChange: (key: TabKey) => void;
  className?: string;
};

export default function LiquidTabs({ value, onChange, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState({ left: 0, width: 0 });

  const activeIndex = useMemo(
    () => Math.max(0, TABS.findIndex(t => t.key === value)),
    [value]
  );

  // Measure active button for slider geometry
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const btns = Array.from(el.querySelectorAll<HTMLButtonElement>('[data-tab]'));
    const activeBtn = btns[activeIndex];
    if (!activeBtn) return;

    const update = () => {
      const r = activeBtn.getBoundingClientRect();
      const parent = el.getBoundingClientRect();
      setSlider({ left: r.left - parent.left, width: r.width });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    ro.observe(activeBtn);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [activeIndex]);

  const activeTab = TABS[activeIndex];

  return (
    <div className={className}>
      {/* Gooey filter (softens the capsule edges) */}
      <svg width="0" height="0">
        <filter id="goo-blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      {/* Track */}
      <div
        ref={containerRef}
        className="
          relative
          inline-flex w-full max-w-[640px] items-center gap-0
          rounded-[20px] p-1
          bg-[rgba(245,245,245,0.85)]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_6px_24px_rgba(0,0,0,0.08)]
          backdrop-blur-md
        "
        style={{
          border: '1px solid rgba(0,0,0,0.08)',
          WebkitMaskComposite: 'source-over',
          filter: 'url(#goo-blob)',
        }}
      >
        {/* Liquid capsule */}
        <div
          className="absolute top-1 bottom-1 rounded-[16px] transition-all duration-400 ease-out will-change-transform"
          style={{
            left: `${slider.left}px`,
            width: `${slider.width}px`,
            background: `linear-gradient(145deg, ${activeTab.accent} 0%, ${activeTab.accentSoft} 100%)`,
            boxShadow:
              activeTab.key === 'custom'
                ? '0 8px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,.18)'
                : `0 10px 28px ${hexToRgba(activeTab.accent, 0.35)}, inset 0 1px 0 rgba(255,255,255,.22)`,
          }}
        >
          {/* inner sheen */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[16px]"
            style={{
              background:
                'linear-gradient( to bottom, rgba(255,255,255,.22), rgba(255,255,255,0) 45% )',
              mixBlendMode: 'screen',
            }}
          />
          {/* fine grain on capsule */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[16px] opacity-15"
            style={{
              background:
                'radial-gradient(1px 2px at 20% 30%, rgba(255,255,255,.8) 0, transparent 60%), radial-gradient(1px 1.5px at 70% 60%, rgba(255,255,255,.8) 0, transparent 55%)',
            }}
          />
        </div>

        {/* Buttons */}
        {TABS.map((t) => {
          const isActive = t.key === value;
          const activeText = t.onAccent === 'light' ? '#FFFFFF' : '#111111';
          return (
            <button
              key={t.key}
              data-tab={t.key}
              onClick={() => onChange(t.key)}
              className="
                relative z-10 flex-1 select-none
                rounded-[14px] px-4 py-2.5
                flex items-center justify-center gap-2
                transition-colors duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                ring-offset-transparent
              "
              style={{
                color: isActive ? activeText : '#111111',
              }}
              aria-pressed={isActive}
            >
              {/* Logo */}
              <img
                src={t.iconSrc}
                alt={`${t.label} logo`}
                className="h-5 w-5 object-contain"
                style={{
                  // turn white on active for contrast over colored capsule
                  filter: isActive ? 'brightness(0) invert(1)' : 'none',
                  opacity: 0.95,
                }}
              />
              <span className="text-sm md:text-base font-semibold tracking-[-0.01em]">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** ---------------------------------------------------------
 * Helpers
 * --------------------------------------------------------- */
function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}