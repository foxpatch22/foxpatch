"use client";
import Image from "next/image";

const cards = [
  {
    media: "/Product%20Design/preview-card-1.avif",
    title: "SaaS Dashboard Redesign",
    desc: "We redesigned a complex SaaS dashboard into a clean, intuitive interface. Result:",
  },
  {
    media: "/Product%20Design/preview-card-2.avif",
    title: "Mobile Health App",
    badge: "new",
    desc: "Created a sleek and accessible UI for a health-tech startup. Result:",
  },
];

export default function ProductDesign() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-wider text-neutral-400 mb-8">
          Product Design
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-4xl">
          At Foxpatch, our product design expertise helps startups build user experiences
          that are as functional as they are beautiful.
          <br />
          <br />
          We combine user-centric thinking with business goals to create digital products that scale.
        </h2>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Media */}
              <div className="w-full h-72 relative mb-6 overflow-hidden rounded-md flex items-center justify-center">
                {card.media.endsWith(".mp4") ? (
                  <video
                    src={card.media}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={card.media}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 560px, 100vw"
                    priority={index < 2}
                  />
                )}
              </div>

              {/* Badge */}
              {card.badge && (
                <span className="text-xs font-bold text-black bg-yellow-300 px-2 py-0.5 rounded">
                  {card.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="mt-3 text-lg font-bold text-[#141414] bg-white inline-block px-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-neutral-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}