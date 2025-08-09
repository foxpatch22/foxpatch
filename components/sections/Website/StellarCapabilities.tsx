'use client';

import { ReactNode, useRef } from 'react';
import ParallaxParticles from '@/components/visuals/ParallaxParticles';

/* -------------------------------------------------------
   1) Minimal inline icons (placeholders). Replace freely.
   ------------------------------------------------------- */
const IconUX = (props: any) => (
  <svg viewBox="0 0 24 24" {...props} stroke="currentColor" fill="none" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M7 8h10M7 12h6M7 16h3" />
  </svg>
);
const IconFuture = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <path d="M12 3v6l4 2" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
const IconMotion = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <path d="M4 12h8" />
    <path d="M12 12l6 6M12 12l6-6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconCMS = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M7 10h10M7 14h6" />
  </svg>
);
const IconSEO = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <circle cx="10" cy="10" r="6" />
    <path d="M14 14l7 7" />
  </svg>
);
const Icon3D = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <path d="M12 3l8 5v8l-8 5-8-5V8z" />
    <path d="M12 12l8-4.8" />
    <path d="M12 12L4 7.2" />
  </svg>
);
const IconBackend = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h2M7 17h2" />
  </svg>
);
const IconEngage = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <circle cx="7" cy="8" r="3" />
    <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
    <circle cx="17" cy="8" r="3" />
    <path d="M21 20v-1a6 6 0 0 0-6-6" />
  </svg>
);
const IconSecurity = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <path d="M12 3l7 4v6c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V7z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconPerf = (p: any) => (
  <svg viewBox="0 0 24 24" {...p} stroke="currentColor" fill="none" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12l5-3" />
    <path d="M7 12h2" />
  </svg>
);

/* -------------------------------------------------------
   2) Data for cards: you can swap title, colors, and icon
   ------------------------------------------------------- */
type Card = {
  title: string[];
  icon: ReactNode;
  from: string; // gradient start
  to: string;   // gradient end
  ring: string; // ring gradient color
};

const CARDS: Card[] = [
  { title: ['User', 'Experience'], icon: <IconUX />, from: '#0E2A3C', to: '#0F6D52', ring: '#34F5C5' },
  { title: ['Future‑Proof', 'Design'], icon: <IconFuture />, from: '#11243C', to: '#14705A', ring: '#7AD8FF' },
  { title: ['Motion', 'Design'], icon: <IconMotion />, from: '#152039', to: '#294371', ring: '#B2C0FF' },
  { title: ['CMS‑Driven', 'Content'], icon: <IconCMS />, from: '#103B33', to: '#0E6B44', ring: '#83FFD6' },
  { title: ['SEO‑Ready', 'Architecture'], icon: <IconSEO />, from: '#0E2A3B', to: '#0D5B6B', ring: '#8EE6FF' },
  { title: ['2D & 3D', 'Interactive', 'Animations'], icon: <Icon3D />, from: '#152644', to: '#264A84', ring: '#C9B8FF' },
  { title: ['Backend', 'Integrations'], icon: <IconBackend />, from: '#0E2638', to: '#0B6C70', ring: '#89FFD9' },
  { title: ['Client', 'Engagement', 'Features'], icon: <IconEngage />, from: '#0F2438', to: '#075A8A', ring: '#8BCBFF' },
  { title: ['Security'], icon: <IconSecurity />, from: '#0E2B22', to: '#0D3B61', ring: '#59F0AF' },
  { title: ['Site', 'Optimisation'], icon: <IconPerf />, from: '#0C3443', to: '#0B6D6B', ring: '#A6F2F2' },
];

/* -------------------------------------------------------
   3) The “Stellar” icon pod (orb + animated ring + orbits)
   ------------------------------------------------------- */
function StellarIcon({
  ringColor,
  children,
}: {
  ringColor: string;
  children: ReactNode;
}) {
  return (
    <div className="relative w-14 h-14 md:w-16 md:h-16">
      {/* glass orb */}
      <div className="absolute inset-0 rounded-full bg-white/6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.25)]" />
      {/* subtle top sheen */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-6 rounded-full blur-md opacity-60 bg-white/50" />
      {/* animated gradient ring */}
      <div
        className="absolute inset-[-2px] rounded-full"
        style={{
          background: `conic-gradient(from 0deg, ${ringColor}, transparent 55%, ${ringColor})`,
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)',
          animation: 'spin 6s linear infinite',
        }}
      />
      {/* central icon (floats subtly) */}
      <div className="absolute inset-0 grid place-items-center text-white/90">
        <div className="animate-floatSlow">{children}</div>
      </div>
      {/* orbiting dots */}
      <div className="absolute inset-0">
        <span
          className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80"
          style={{ animation: 'orbit 7s linear infinite' }}
        />
        <span
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-white/70"
          style={{ animation: 'orbit 9s linear infinite reverse' }}
        />
      </div>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0%   { transform: rotate(0deg) translateY(-8px) rotate(0deg); }
          50%  { transform: rotate(180deg) translateY(-8px) rotate(-180deg); }
          100% { transform: rotate(360deg) translateY(-8px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------
   4) Card — centered layout + magnetic tilt + soft hover
   ------------------------------------------------------- */
function CapabilityCard({ c }: { c: Card }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.setProperty('--rx', `${(-y / r.height) * 6}deg`);
    el.style.setProperty('--ry', `${(x / r.width) * 9}deg`);
    el.style.setProperty('--mx', `${(x / r.width) * 30}%`);
    el.style.setProperty('--my', `${(y / r.height) * 30}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--mx', '0%');
    el.style.setProperty('--my', '0%');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        group relative overflow-hidden rounded-[30px]
        p-8 md:p-10 flex flex-col items-center justify-center gap-4
        text-white text-center select-none
        transition-[transform,box-shadow] duration-300
        shadow-[0_16px_60px_rgba(0,0,0,0.25)]
        will-change-transform
        hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]
      "
      style={{
        transform:
          'perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))',
        backgroundImage: `linear-gradient(155deg, ${c.from} 0%, ${c.to} 100%)`,
      }}
    >
      {/* shimmer border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px]"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, #ffffff33, transparent 25% 75%, #ffffff33)',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
          opacity: 0.55,
        }}
      />

      {/* spotlight that tracks cursor (local to card) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(260px 220px at calc(50% + var(--mx,0%)) calc(50% + var(--my,0%)), rgba(255,255,255,.12), transparent 60%)',
        }}
      />

      {/* Icon */}
      <div
        className="transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-[1.04] group-hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
        aria-hidden
      >
        <StellarIcon ringColor={c.ring}>
          <div className="w-6 h-6 md:w-7 md:h-7">{c.icon}</div>
        </StellarIcon>
      </div>

      {/* Title */}
      <h3 className="font-extrabold tracking-[-0.01em] leading-tight text-[18px] sm:text-[20px] md:text-[22px]">
        {c.title.map((t, i) => (
          <span key={i} className="block drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
            {t}
          </span>
        ))}
      </h3>

      {/* faint bottom glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-48 h-24 blur-2xl opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,.18), transparent)',
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------
   5) Section wrapper
   ------------------------------------------------------- */
export default function StellarCapabilities() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 2 → 3 → 5 grid with background */}
        <div className="relative">
          <ParallaxParticles
            count={160}
            size={1.7}
            parallax={32}
            colors={['#ffffff', '#CFE9FF', '#E9E4FF']}
            accent="#69E1FF"
            glowBlur={26}
          />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {CARDS.map((c, i) => (
              <CapabilityCard key={i} c={c} />
            ))}
          </div>
        </div>
      </div>

      {/* global keyframes for the gentle icon float */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%   { transform: translateY(0) }
          50%  { transform: translateY(-4px) }
          100% { transform: translateY(0) }
        }
      `}</style>
    </section>
  );
}