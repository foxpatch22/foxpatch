"use client";
import { Permanent_Marker } from "next/font/google";
import Image from "next/image";

const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const works = [
  {
    img: "/works/product-works-1.mp4",
    title: "Text animations",
    desc: "Create unique kinetic type effects with built-in presets that let you animate lines, words, and letters.",
  },
  {
    img: "/works/product-works-2.mp4",
    badge: "new",
    title: "Powerful effects",
    desc: "Add depth and detail with animated gradients, blurs, shadows, masks, and more.",
  },
  {
    img: "/works/product-works-3.jpg",
    title: "Custom easings",
    desc: "Start from our presets or create custom easings you can reuse consistently across your animations.",
  },
  {
    img: "/works/products-works-4.mp4",
    title: "Video & Audio",
    desc: "Import videos, soundtracks, voiceovers, and sound effects to create richer, more dynamic content.",
  },
];

export default function ProductDesignSection3() {
  return (
    <section className="bg-white py-20 px-6 mb-20"> {/* Added margin-bottom */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Tag */}
        <div className="inline-block bg-neutral-100 text-[#141414] px-6 py-2 rounded-full text-sm font-medium mb-6">
          Works
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#141414] leading-snug">
          Works That{" "}
          <span
            className={`${permanentMarker.className} cartoon-text animate-glow text-6xl md:text-7xl`}
          >
            Redefine
          </span>{" "}
          Experience.
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Our work speaks for itself: experiences that delight users and deliver real business results.
        </p>
      </div>

      {/* Work Cards */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Media */}
              <div className="w-full h-72 relative mb-6 overflow-hidden rounded-md flex items-center justify-center">
                {work.img.endsWith(".mp4") ? (
                  <video
                    src={work.img}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Badge (optional) */}
              {work.badge && (
                <span className="text-xs font-bold text-black bg-yellow-300 px-2 py-0.5 rounded">
                  {work.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="mt-3 text-lg font-bold text-[#141414] bg-white inline-block px-2">
                {work.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-neutral-600">{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}