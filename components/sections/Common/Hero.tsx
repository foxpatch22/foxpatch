'use client';

import { useState, useRef } from "react";
import MagicTag from "@/components/common/MagicTag";
import BackgroundGrid from "@/components/common/BackgroundGrid";
import { useRouter } from "next/navigation";
import { Play, Pause } from "lucide-react"; // Optional: Install lucide-react for icons

export default function Hero() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full bg-[#FDFDF9]">
      {/* Background Grid */}
      <BackgroundGrid />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Heading + Buttons Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-4xl sm:text-5xl font-normal leading-tight max-w-3xl text-left">
            <span className="text-[#141414]">Designing Products Users </span>
            <span className="text-[#C40006]/[0.8275]">Love</span>
            <span className="text-[#141414]">,</span>
            <br />
            <span className="text-[#141414]">Businesses </span>
            <span className="text-[#52009A]/[0.7294]">Need</span>
            <span className="text-[#141414]">.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() =>
                window.open("https://calendly.com/foxpatch/project-kickoff-call", "_blank")
              }
              className="px-6 py-3 border border-black rounded-full font-mono hover:bg-neutral-100 w-full sm:w-auto"
            >
              Book a Call
            </button>

            <button
              onClick={() => router.push('/LetsGetStarted')}
              className="px-6 py-3 bg-black text-white rounded-full font-mono hover:bg-neutral-800 w-full sm:w-auto"
            >
              Let&apos;s get started
            </button>
          </div>
        </div>

        {/* Chips */}
        <div className="mt-8 flex justify-start">
          <div className="flex flex-wrap items-center gap-4 text-neutral-700 font-medium">
            <span>We craft</span>
            <MagicTag type="product">Product Design</MagicTag>
            <MagicTag type="website">Website</MagicTag>
            <MagicTag type="branding">Branding</MagicTag>
            <span>startups trust to scale.</span>
          </div>
        </div>

        {/* Video Preview */}
        <div className="mt-16">
          <div
            className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group"
            onClick={toggleVideo}
          >
            <video
              ref={videoRef}
              src="/hero-preview.mp4"
              loop
              playsInline
              className="w-full h-auto object-cover"
            />

            {/* Play/Pause Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity group-hover:bg-black/40">
                <button className="bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Play size={32} />
                </button>
              </div>
            )}
            {isPlaying && (
              <div className="absolute top-4 right-4">
                <button className="bg-white/80 p-2 rounded-full hover:scale-110 transition-transform">
                  <Pause size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}