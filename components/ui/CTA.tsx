'use client';

import { useRouter } from "next/navigation";

export default function CallToAction() {
  const router = useRouter();

  return (
    <section className="bg-[#F3FFE2] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Card */}
        <div className="bg-[#F3D768] rounded-3xl p-12 md:p-16 text-center shadow-lg relative z-10 transform -translate-y-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-6">
            Build your next big startup idea with Foxpatch
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#141414] mb-8 leading-relaxed">
            Trusted by ambitious founders and growing startups.
            Let Foxpatch design the product, website, and brand your users will love.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Book a Call */}
            <button
              onClick={() =>
                window.open("https://calendly.com/foxpatch/project-kickoff-call", "_blank")
              }
              className="px-6 py-3 border border-black rounded-full font-mono hover:bg-neutral-100 transition w-full md:w-auto"
            >
              BOOK A CALL
            </button>

            {/* Let's Get Started */}
            <button
              onClick={() => router.push('/LetsGetStarted')}
              className="px-6 py-3 bg-black text-white rounded-full font-mono hover:bg-neutral-800 transition w-full md:w-auto"
            >
              LET'S GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}