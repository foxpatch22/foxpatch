'use client';

type Cap = {
  title: string;
  lines?: string[];          // optional extra line breaks
  bg: string;                // card gradient bg (Tailwind classes)
  gel: GelSpec;              // icon color/shape spec
};

type GelSpec = {
  // main “gel” star color gradient (SVG ids must be unique per card)
  stops: [string, string];
  // two supporting shapes (smaller accents)
  accent1: [string, string];
  accent2: [string, string];
  // which shape paths to use
  shape: 'diamond' | 'pillow' | 'squircle' | 'clover' | 'kite';
};

const CAPS: Cap[] = [
  {
    title: 'User Experience',
    bg: 'from-[#0E2A47] to-[#0C624A]',
    gel: {
      stops: ['#57F2C7', '#2AB0A0'],
      accent1: ['#BEE5FF', '#93C8FF'],
      accent2: ['#7DFFEA', '#73D3FF'],
      shape: 'pillow',
    },
  },
  {
    title: 'Future‑Proof Design',
    bg: 'from-[#0E243D] to-[#0A6857]',
    gel: {
      stops: ['#9AE6FF', '#6BC8FF'],
      accent1: ['#E9D8FD', '#C4B5FD'],
      accent2: ['#B2F5EA', '#81E6D9'],
      shape: 'diamond',
    },
  },
  {
    title: 'Motion Design',
    bg: 'from-[#0F1E34] to-[#1C3655]',
    gel: {
      stops: ['#A5B4FC', '#7C8CF9'],
      accent1: ['#C7D2FE', '#A5B4FC'],
      accent2: ['#E9D5FF', '#C084FC'],
      shape: 'kite',
    },
  },
  {
    title: 'CMS‑Driven Content',
    bg: 'from-[#0C3A33] to-[#0E6B4B]',
    gel: {
      stops: ['#7FFFD4', '#3FE8B6'],
      accent1: ['#D1FAE5', '#A7F3D0'],
      accent2: ['#BAE6FD', '#7DD3FC'],
      shape: 'clover',
    },
  },
  {
    title: 'SEO‑Ready Architecture',
    bg: 'from-[#0C2A39] to-[#0E5A69]',
    gel: {
      stops: ['#5BE3FF', '#25B8E6'],
      accent1: ['#D1D5FF', '#A6B1FF'],
      accent2: ['#CFFAFE', '#67E8F9'],
      shape: 'squircle',
    },
  },
  {
    title: '2D & 3D Interactive Animations',
    bg: 'from-[#13243F] to-[#1D3F6B]',
    gel: {
      stops: ['#9EC5FF', '#6AA8FF'],
      accent1: ['#E9D5FF', '#C084FC'],
      accent2: ['#C7F9FF', '#96EFFF'],
      shape: 'diamond',
    },
  },
  {
    title: 'Backend Integrations',
    bg: 'from-[#0E2638] to-[#0B6C70]',
    gel: {
      stops: ['#8AFFDE', '#39E3C0'],
      accent1: ['#B8F2FF', '#82E1FF'],
      accent2: ['#C7F9CC', '#7AE582'],
      shape: 'pillow',
    },
  },
  {
    title: 'Client Engagement Features',
    bg: 'from-[#0F2438] to-[#075A8A]',
    gel: {
      stops: ['#8AA8FF', '#3E76FF'],
      accent1: ['#E4E7FF', '#BDC7FF'],
      accent2: ['#B5F3FF', '#7BE0FF'],
      shape: 'kite',
    },
  },
  {
    title: 'Security',
    bg: 'from-[#0F2C24] to-[#0C3E63]',
    gel: {
      stops: ['#59F0AF', '#27C88A'],
      accent1: ['#BAE6FD', '#7DD3FC'],
      accent2: ['#C7F9CC', '#80ED99'],
      shape: 'clover',
    },
  },
  {
    title: 'Site Optimisation',
    bg: 'from-[#0C3443] to-[#0B6D6B]',
    gel: {
      stops: ['#9CF1F1', '#61D7D5'],
      accent1: ['#E9D5FF', '#C084FC'],
      accent2: ['#B8F2FF', '#82E1FF'],
      shape: 'squircle',
    },
  },
];

/* -------------------------- GEL ICON (3D‑ish) -------------------------- */

function GelIcon({
  id,
  spec,
  className = 'w-16 h-16 md:w-20 md:h-20',
}: {
  id: string;
  spec: GelSpec;
  className?: string;
}) {
  // shape paths (soft star-ish variants)
  const shapes: Record<GelSpec['shape'], string> = {
    diamond:
      'M64 6C82 20 98 34 110 52c12 18 12 38 0 56-12 18-28 32-46 46-18-14-34-28-46-46-12-18-12-38 0-56C30 34 46 20 64 6Z',
    pillow:
      'M64 10c22 0 29 9 44 24s24 22 24 44-9 29-24 44-22 24-44 24-29-9-44-24S-4 98-4 76 5 47 20 32 42 10 64 10Z',
    squircle:
      'M64 16c27 0 48 21 48 48s-21 48-48 48-48-21-48-48S37 16 64 16Z',
    clover:
      'M64 22c13-18 39-14 45 8 22-6 39 20 21 35 18 15 1 41-21 35-6 22-32 26-45 8-13 18-39 14-45-8-22 6-39-20-21-35-18-15-1-41 21-35 6-22 32-26 45-8Z',
    kite:
      'M64 8l26 38c7 10 18 18 30 22l-56 48L8 68c12-4 23-12 30-22L64 8Z',
  };

  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <defs>
        <linearGradient id={`g-main-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={spec.stops[0]} />
          <stop offset="1" stopColor={spec.stops[1]} />
        </linearGradient>
        <linearGradient id={`g-a1-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={spec.accent1[0]} />
          <stop offset="1" stopColor={spec.accent1[1]} />
        </linearGradient>
        <linearGradient id={`g-a2-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={spec.accent2[0]} />
          <stop offset="1" stopColor={spec.accent2[1]} />
        </linearGradient>
        <filter id={`soft-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* back glow */}
      <g filter={`url(#soft-${id})`} opacity="0.65">
        <path d={shapes[spec.shape]} fill={`url(#g-main-${id})`} />
      </g>

      {/* main gel */}
      <path d={shapes[spec.shape]} fill={`url(#g-main-${id})`} />

      {/* accents */}
      <g transform="translate(-18, -6) scale(0.55)">
        <path d={shapes['diamond']} fill={`url(#g-a1-${id})`} />
      </g>
      <g transform="translate(40, 32) scale(0.45)">
        <path d={shapes['kite']} fill={`url(#g-a2-${id})`} />
      </g>
    </svg>
  );
}

/* ------------------------------ THE GRID ------------------------------- */

export default function WebsiteCapabilitiesCards() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid: 2 → 3 → 4 → 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
          {CAPS.map((c, i) => {
            const id = `cap-${i}`;
            return (
              <div
                key={c.title}
                className="
                  relative rounded-[28px] p-6 md:p-7
                  shadow-[0_6px_30px_rgba(0,0,0,0.12)] 
                  bg-gradient-to-br text-white overflow-hidden
                "
                style={{
                  backgroundImage: `linear-gradient(145deg, var(--from) 0%, var(--to) 100%)`,
                  // map Tailwind classes to CSS vars (to keep the API simple)
                  // you can just leave the tailwind gradient classes on parent:
                }}
              >
                {/* background gradient via Tailwind */}
                <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-b ${c.bg} opacity-[0.92]`} />

                {/* soft vignette */}
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_55%)]" />

                {/* content */}
                <div className="relative z-[1] flex items-start gap-3">
                  <GelIcon id={id} spec={c.gel} />

                  <h3 className="mt-1 font-extrabold leading-tight tracking-[-0.01em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] text-[18px] sm:text-[20px] md:text-[22px]">
                    {c.title.split('\n').map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* bottom glow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-24 blur-2xl opacity-60 pointer-events-none"
                     style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0))' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}