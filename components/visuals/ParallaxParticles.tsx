'use client';

import { useEffect, useRef } from 'react';

type Props = {
  /** Number of particles to draw (auto scales for DPR) */
  count?: number;
  /** Particle size in CSS px (scaled for DPR) */
  size?: number;
  /** Particle color(s). Solid or gradient stops. */
  colors?: string[];
  /** Max parallax offset on mouse move (px) */
  parallax?: number;
  /** Optional accent glow color for occasional big particles */
  accent?: string;
  /** Blur of glow (px) */
  glowBlur?: number;
};

export default function ParallaxParticles({
  count = 140,
  size = 1.6,
  colors = ['#ffffff', '#BEE8FF', '#DAD6FF'],
  parallax = 28,
  accent = '#66E4FF',
  glowBlur = 24,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const center = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const particles: Array<{
      x: number;
      y: number;
      z: number; // depth 0..1
      r: number;
      c: string;
      vx: number; // tiny drift
      vy: number;
      glow?: boolean;
    }> = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const resize = () => {
      // parent might not exist at hydration time; fallback to viewport
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      center.current.x = canvas.width / 2;
      center.current.y = canvas.height / 2;
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const z = Math.random(); // 0..1
        const r = (size + rand(-0.5, 1.0)) * dpr * (0.6 + z * 1.2);
        const c = colors[(Math.random() * colors.length) | 0];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z,
          r,
          c,
          vx: rand(-0.05, 0.05) * dpr * (0.5 + z),
          vy: rand(-0.05, 0.05) * dpr * (0.5 + z),
          glow: Math.random() < 0.08,
        });
      }
    };

    const draw = () => {
      const cw = canvas.width;
      const ch = canvas.height;

      const mx = (mouse.current.x - center.current.x / dpr) / dpr;
      const my = (mouse.current.y - center.current.y / dpr) / dpr;

      // vignette / very soft gradient backdrop
      const g = ctx.createRadialGradient(
        cw * 0.5, ch * 0.2, 0,
        cw * 0.5, ch * 0.7, Math.max(cw, ch) * 0.75
      );
      g.addColorStop(0, 'rgba(12,20,28,0.20)');
      g.addColorStop(1, 'rgba(6,12,18,0.65)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, cw, ch);

      // parallax strength from mouse & scroll
      const depthX = (mx / 100) * parallax * dpr;
      const depthY = ((my + scrollY.current * 0.06) / 100) * parallax * dpr;

      for (const p of particles) {
        // drift
        p.x += p.vx;
        p.y += p.vy;
        // wrap
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;
        if (p.y < -10) p.y = ch + 10;
        if (p.y > ch + 10) p.y = -10;

        // parallax offset by depth
        const px = p.x + depthX * (p.z * 2 - 1);
        const py = p.y + depthY * (p.z * 2 - 1);

        if (p.glow) {
          ctx.shadowColor = accent;
          ctx.shadowBlur = glowBlur * dpr;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) * dpr;
      mouse.current.y = (e.clientY - rect.top) * dpr;
    };

    const onScroll = () => {
      scrollY.current = window.scrollY || 0;
    };

    const onResize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      resize();
      createParticles();
    };

    resize();
    createParticles();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('scroll', onScroll);
    };
  }, [count, size, colors, parallax, accent, glowBlur]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden />;
}