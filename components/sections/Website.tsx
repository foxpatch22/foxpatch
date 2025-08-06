'use client';

export default function Website() {
  return (
    <section className="bg-[#FAF9F7] py-20"> {/* Section background */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-wider text-neutral-400 mb-8">
          Website
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-4xl">
          Our website design ensures startups have stunning, responsive websites that tell their story with impact.
          <br /><br />
          We create modern, high‑performing websites that combine sleek design with seamless functionality, helping you attract, engage, and convert your audience.
        </h2>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FFEBD7] rounded-2xl p-6"> {/* Peach / Orange */}
            <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
              Portfolio Website
            </p>
            <h3 className="text-lg md:text-xl font-normal text-[#141414] mb-4">
              Designed a professional portfolio site with custom animations. Result:
            </h3>
            <img
              src="/Website/preview-card-1.avif"
              alt="Portfolio Website Example"
              className="w-full rounded-lg object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#D8F2E1] rounded-2xl p-6"> {/* Mint Green */}
            <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
              E‑Commerce Website
            </p>
            <h3 className="text-lg md:text-xl font-normal text-[#141414] mb-4">
              Built a responsive online store for a D2C brand. Result:
            </h3>
            <img
              src="/Website/preview-card-2.avif"
              alt="Ecommerce Website Example"
              className="w-full rounded-lg object-contain"
            />
          </div>

          {/* Card 3 (Full Width) */}
          <div className="bg-[#DCEAF9] rounded-2xl p-6 md:col-span-2 flex flex-col md:flex-row items-center justify-between"> {/* Pale Blue */}
            {/* Image */}
            <div className="flex-1">
              <img
                src="/Website/preview-card-3.avif"
                alt="Full Width Website Preview"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8">
              <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
                Landing Page
              </p>
              <h3 className="text-lg md:text-xl font-normal text-[#141414]">
                Redesigned the landing flow to increase conversions. Result:
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}