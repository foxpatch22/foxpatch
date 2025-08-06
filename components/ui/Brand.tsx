'use client';

export default function Brand() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-wider text-neutral-400 mb-8">
          Brand
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-4xl">
          Our branding expertise helps startups build identities that connect emotionally and communicate with clarity.
          <br /><br />
          We combine strategic creativity with business insight to design brands that stand out, earn trust, and grow with your audience.
        </h2>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-purple-100 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
              SaaS Dashboard Redesign
            </p>
            <h3 className="text-lg md:text-xl font-normal text-[#141414] mb-4">
              We redesigned a complex SaaS dashboard into a clean, intuitive interface. Result:
            </h3>
            <img
              src="/Product%20Design/preview-card-1.avif"
              alt="SaaS Dashboard Example"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-pink-100 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
              Mobile Health App
            </p>
            <h3 className="text-lg md:text-xl font-normal text-[#141414] mb-4">
              Created a sleek and accessible UI for a health‑tech startup. Result:
            </h3>
            <img
              src="/Product%20Design/preview-card-2.avif"
              alt="Health App Example"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>

          {/* Card 3 (Full Width) */}
          <div className="bg-neutral-50 rounded-2xl p-6 md:col-span-2 flex flex-col md:flex-row items-center justify-between">
            {/* Image */}
            <div className="flex-1">
              <img
                src="/Product%20Design/preview-card-3.avif"
                alt="E‑Commerce Example"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8">
              <p className="text-xs uppercase tracking-wider text-neutral-600 mb-4">
                E‑Commerce
              </p>
              <h3 className="text-lg md:text-xl font-normal text-[#141414]">
                Redesigned the shopping flow for a D2C brand. Result:
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}