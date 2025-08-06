"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Layout,
  Target,
  Palette,
  MousePointer,
  PlayCircle,
  ClipboardCheck,
  Eye,
  Accessibility,
  BarChart3,
  SearchCheck,
} from "lucide-react";

const chains = [
  { name: "User Research", Icon: User, color: "bg-blue-200" },
  { name: "Design System", Icon: Layout, color: "bg-green-200" },
  { name: "UX Strategy", Icon: Target, color: "bg-yellow-200" },
  { name: "Visual Design", Icon: Palette, color: "bg-pink-200" },
  { name: "Interaction Design", Icon: MousePointer, color: "bg-indigo-200" },
  { name: "Motion Design", Icon: PlayCircle, color: "bg-purple-200" },
  { name: "Design Audit", Icon: ClipboardCheck, color: "bg-orange-200" },
  { name: "Usability Testing", Icon: Eye, color: "bg-cyan-200" },
  { name: "Accessibility Design", Icon: Accessibility, color: "bg-teal-200" },
  { name: "Competitor Benchmarking", Icon: BarChart3, color: "bg-red-200" },
  { name: "Heuristic Evaluation", Icon: SearchCheck, color: "bg-gray-200" },
];

export default function ProductDesignSection2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, chains.length * 20]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Content */}
        <div className="flex-1 space-y-16">
          <p className="text-xl md:text-1xl text-neutral-700 max-w-md leading-relaxed">
            We are a <span className="font-semibold text-[#141414]">Product Design Agency</span> that brings ideas to life through scalable, sustainable and futuristic design solutions.
          </p>

          {/* Research Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#141414]">Research</h3>
            <p className="text-neutral-600 max-w-xl leading-relaxed">
              Our process uncovers deep behavioral insights to guide meaningful experiences.
              We provide actionable data-driven insights that represent the voice of the users & resonate with your business objectives.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Heuristic Analysis",
                "Design Audit",
                "Usability Testing",
                "Ethnographic Research",
                "Emerging Trends",
                "UX Research",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#141414]">UI/UX Design</h3>
            <p className="text-neutral-600 max-w-xl leading-relaxed">
              We’re passionate about crafting designs that are intuitive & scalable.
              We focus on building thoughtful digital experiences that balance clean aesthetics with clear business intent, helping startups launch and grow with confidence.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Digital Branding",
                "User Experience Design",
                "User Interface Design",
                "Interaction Design",
                "Emerging Trends",
                "Motion Graphics",
                "Illustrations",
                "Iconography",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Animated Wheel */}
        <div className="flex-1 relative h-[80vh] overflow-hidden flex justify-center items-center">
          {chains.map((chain, index) => {
            const angle = (index / chains.length) * 360;

            const y = useTransform(rotation, (r) => {
              const rad = ((angle + r) * Math.PI) / 180;
              return Math.sin(rad) * 250;
            });

            const x = useTransform(rotation, (r) => {
              const rad = ((angle + r) * Math.PI) / 180;
              return Math.cos(rad) * 120;
            });

            const scale = useTransform(rotation, (r) => {
              const rad = ((angle + r) * Math.PI) / 180;
              return 0.7 + Math.max(0, Math.cos(rad)) * 0.4;
            });

            const opacity = useTransform(rotation, (r) => {
              const rad = ((angle + r) * Math.PI) / 180;
              return 0.3 + Math.max(0, Math.cos(rad));
            });

            return (
              <motion.div
                key={index}
                style={{ x, y, scale, opacity, position: "absolute" }}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full border border-black text-lg font-bold ${chain.color}`}
                >
                  <chain.Icon size={22} />
                </div>
                <span className="text-xl font-semibold text-[#141414] whitespace-nowrap">
                  {chain.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}