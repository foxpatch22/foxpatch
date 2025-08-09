'use client';

import { useRef } from 'react';

type CardSpec = {
  title: string | string[];           // supports line breaks via array
  grad: [string, string];             // card aurora gradient (from,to)
  gels: [string, string, string];     // 3 gel colors
};

const CARDS: CardSpec[] = [
  { title: ['User', 'Experience'],            grad: ['#0F2B46', '#0E6D52'], gels: ['#47F6D9', '#B9D4FF', '#7DF6E8'] },
  { title: ['Future‑Proof', 'Design'],        grad: ['#10253D', '#12705A'], gels: ['#7ED3FF', '#E7D4FF', '#B6F5E7'] },
  { title: ['Motion', 'Design'],              grad: ['#141E36', '#1F3E66'], gels: ['#A6B3FF', '#D6C8FF', '#BDE4FF'] },
  { title: ['CMS‑Driven', 'Content'],         grad: ['#0F3B34', '#0E6B44'], gels: ['#75FFD9', '#B2FCE9', '#9AE7FF'] },
  { title: ['SEO‑Ready', 'Architecture'],     grad: ['#0E2A3B', '#0D5B6B'], gels: ['#64E3FF', '#C8D2FF', '#A7F3FF'] },
  { title: ['2D & 3D', 'Interactive', 'Animations'], grad: ['#152644', '#25457A'], gels: ['#94C2FF', '#E7D4FF', '#AAEEFF'] },
  { title: ['Backend', 'Integrations'],       grad: ['#0E2638', '#0B6C70'], gels: ['#8AFFDE', '#82E1FF', '#7AE582'] },
  { title: ['Client', 'Engagement', 'Features'], grad: ['#0F2438', '#075A8A'], gels: ['#8AA8FF', '#E4E7FF', '#7BE0FF'] },
  { title: ['Security'],                      grad: ['#0E2B22', '#0D3B61'], gels: ['#59F0AF', '#7DD3FC', '#80ED99'] },
  { title: ['Site', 'Optimisation'],          grad: ['#0C3443', '#0B6D6B'], gels: ['#9CF1F1', '#C084FC', '#82E1FF'] },
];

function GelIcon({
  colors,
  className = 'w-14 h-14 md:w-16 md:h-16',
}: {
  colors: [string, string, string];
  className?: string;
}) {
  // three soft shapes that layer like gel capsules
  return (
    <div className={`relative ${className}`}>
      {/* blur glow */}
      <div
        className="absolute inset-0 rounded-[22%] blur-xl opacity-70"
        style={{ background: `radial-gradient(60% 60% at 60% 40%, ${colors[0]}66, transparent 70%)` }}
      />
      <svg viewBox="0 0 120 120" className="relative z-[1]">
        {/* squishy base */}
        <defs>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b" />
            <feComposite in="SourceGraphic" in2="b" operator="atop" />
          </filter>
        </defs>
        {/* big bean */}
        <path
          d="M60 12c22 0 36 14 36 36s-14 36-36 36S24 70 24 48 38 12 60 12Z"
          fill={colors[0]}
          filter="url(#soft)"
        />
        {/* little shard */}
        <path
          d="M35 48c0-12 6-20 14-26 2 8 1 17-3 26-4 9-9 16-15 20 2-6 4-12 4-20Z"
          fill={colors[1]}
          opacity={0.85}
        />
        {/* diamond */}
        <path
          d="M78 38l12 10-12 10-12-10 12-10Z"
          fill={colors[2]}
          opacity={0.9}
        />
        {/* specular */}
        <ellipse cx="55" cy="28" rx="18" ry="9" fill="#fff" opacity={0.1} />
      </svg>
    </div>
  );
}

function Card({
  spec,
  idx,
}: {
  spec: CardSpec;
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    const rx = (-y / r.height) * 6; // tilt
    const ry = (x / r.width) * 8;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--tx', `${x * 0.03}px`);
    el.style.setProperty('--ty', `${y * 0.03}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
    el.style.setProperty('--tx', `0px`);
    el.style.setProperty('--ty', `0px`);
  };

  const titleLines = Array.isArray(spec.title) ? spec.title : [spec.title];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="
        group relative rounded-[28px] p-6 md:p-7 overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        transition-[transform,box-shadow] duration-300
        bg-gradient-to-br text-white
        will-change-transform
      "
      style={{
        transform:
          'perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0)) translateX(var(--tx,0)) translateY(var(--ty,0))',
        backgroundImage: `linear-gradient(145deg, ${spec.grad[0]} 0%, ${spec.grad[1]} 100%)`,
      }}
    >
      {/* soft inner light */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(90%_60%_at_10%_10%,rgba(255,255,255,0.16),transparent)]" />
      {/* particles */}
      <div className="pointer-events-none absolute -top-8 -right-10 h-40 w-40 rounded-full opacity-50 blur-2xl"
           style={{ background: 'conic-gradient(from 120deg,#fff3,transparent 60%)' }} />
      {/* content */}
      <div className="relative z-[1] flex items-start gap-4">
        <GelIcon colors={spec.gels} />
        <h3 className="font-extrabold leading-tight tracking-[-0.01em] text-[18px] sm:text-[20px] md:text-[22px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
          {titleLines.map((t, i) => (
            <span key={i} className="block">{t}</span>
          ))}
        </h3>
      </div>

      {/* bottom glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-48 h-24 blur-2xl opacity-70 pointer-events-none"
           style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.2), rgba(255,255,255,0))' }} />

      {/* hover rim light */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-300" />
    </div>
  );
}

export default function AuroraCapabilities() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* top badge + heading */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-neutral-100 text-[#141414] px-6 py-2 rounded-full text-sm font-medium mb-6">
            Website Capabilities
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#141414]">
            Everything your site needs—done <span className="relative">
              right
              <span className="absolute -inset-1 blur-md rounded-md bg-[linear-gradient(90deg,#C084FC44,#60A5FA44)] -z-10" />
            </span>.
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            From UX and motion to CMS and integrations—we build fast, secure, scalable experiences that your team can actually maintain.
          </p>
        </div>

        {/* grid 2 → 3 → 5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {CARDS.map((c, i) => (
            <Card key={i} spec={c} idx={i} />
          ))}
        </div>
      </div>

      {/* tiny animation helpers (no Tailwind config needed) */}
      <style jsx>{`
        @keyframes floaty {
          from { transform: translateY(0px); }
          50%  { transform: translateY(-4px); }
          to   { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}