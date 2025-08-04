'use client';
import MagicTag from "../components/MagicTag";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#fafafa]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CACACA_1px,transparent_1px),linear-gradient(to_bottom,#CACACA_1px,transparent_1px)] bg-[size:100px_100px] opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12"> {/* reduced pt to 24px */}
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
            {/* Book a Call */}
            <button
              onClick={() =>
                window.open("https://calendly.com/foxpatch/project-kickoff-call", "_blank")
              }
              className="px-6 py-3 border border-black rounded-full font-mono hover:bg-neutral-100 w-full sm:w-auto"
            >
              Book a Call
            </button>

            {/* Let's Get Started */}
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

        {/* Preview Image */}
        <div className="mt-16">
          <div className="bg-purple-100 rounded-xl shadow-xl p-4">
            <img
              src="/hero-preview.png"
              alt="Product Preview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}