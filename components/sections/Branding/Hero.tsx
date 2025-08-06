"use client";
import { useRouter } from "next/navigation";
import BackgroundGrid from "@/components/common/BackgroundGrid";

export default function ProductDesignHero() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#FDFDF9]">
      {/* Background Grid */}
      <BackgroundGrid />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-12 text-center">
        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl font-normal leading-tight max-w-4xl mx-auto">
          Product Designing
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
          From concept to launch, we can help you at every stage!
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={() => router.push("/LetsGetStarted")}
            className="px-6 py-3 bg-black text-white rounded-full font-mono hover:bg-neutral-800"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}