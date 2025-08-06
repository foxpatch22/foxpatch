"use client";
import { motion } from "framer-motion";
import { Permanent_Marker } from "next/font/google";
import {
  Search,
  AlertCircle,
  Route,
  Layers,
  Palette,
  Settings,
  Users,
  CheckCircle2,
} from "lucide-react";

const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const steps = [
  { title: "Discovery & Research", Icon: Search, bg: "bg-[#E3F2FD]", iconColor: "text-[#1565C0]" },
  { title: "Problem Definition", Icon: AlertCircle, bg: "bg-[#FFF3E0]", iconColor: "text-[#EF6C00]" },
  { title: "User Journeys", Icon: Route, bg: "bg-[#E8F5E9]", iconColor: "text-[#2E7D32]" },
  { title: "Wireframes & Prototyping", Icon: Layers, bg: "bg-[#F3E5F5]", iconColor: "text-[#6A1B9A]" },
  { title: "UI Design & Branding", Icon: Palette, bg: "bg-[#E1F5FE]", iconColor: "text-[#0277BD]" },
  { title: "Design Systems Setup", Icon: Settings, bg: "bg-[#FFFDE7]", iconColor: "text-[#F9A825]" },
  { title: "Collaboration & Handoff", Icon: Users, bg: "bg-[#E0F7FA]", iconColor: "text-[#00838F]" },
  { title: "Testing & Iteration", Icon: CheckCircle2, bg: "bg-[#FFEBEE]", iconColor: "text-[#C62828]" },
];

export default function ProductDesignSection() {
  return (
    <section className="relative w-full bg-[#ffffff] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        {/* Top Tag */}
        <div className="inline-block bg-neutral-100 text-[#141414] px-6 py-2 rounded-full text-sm font-medium mb-6">
          Process
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#141414] leading-snug">
          {/* Mobile: line breaks */}
          <span className="block md:hidden">
            How We<br />
            <span
              className={`${permanentMarker.className} cartoon-text animate-glow text-6xl`}
            >
              Design
            </span>
            <br />
            Products
          </span>

          {/* Desktop: inline */}
          <span className="hidden md:inline">
            How We{" "}
            <span
              className={`${permanentMarker.className} cartoon-text animate-glow text-6xl md:text-7xl`}
            >
              Design
            </span>{" "}
            Products
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Our product design process blends creativity with strategy ensuring user-centered experiences 
          that are intuitive, scalable, and impactful. From discovery to testing, we craft solutions that excite users 
          and empower businesses.
        </p>
      </div>

      {/* Mobile Grid */}
      <div className="max-w-7xl mx-auto md:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${step.bg} rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer`}
            >
              <step.Icon className={`w-10 h-10 ${step.iconColor} mb-3`} />
              <h2 className="text-sm font-semibold text-[#141414]">
                {step.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto items-start justify-between gap-12 mt-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-12">
          {steps.slice(0, 4).map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${step.bg} rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer`}
            >
              <step.Icon className={`w-12 h-12 ${step.iconColor} mb-4`} />
              <h2 className="text-xl font-semibold text-[#141414]">
                {step.title}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Center Sticky Video */}
        <div className="flex-1 sticky top-32 flex justify-center">
          <video
            src="/videos/landing-img-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-[24px] shadow-2xl border-4 border-black w-[280px] md:w-[320px] lg:w-[360px]"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-12">
          {steps.slice(4, 8).map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${step.bg} rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer`}
            >
              <step.Icon className={`w-12 h-12 ${step.iconColor} mb-4`} />
              <h2 className="text-xl font-semibold text-[#141414]">
                {step.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}