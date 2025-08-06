'use client';

export default function LogosMarquee() {
  const logos = [
        "/Clients/unq.png",
        "/Clients/trafitizer.png",
        "/Clients/barrel.png",
        "/Clients/nessa.png",
        "/Clients/vayner.png",
        "/Clients/jibby.png",
        "/Clients/supply.png",
        "/Clients/hex.png",
  ];

  return (
    <section className="bg-white py-12">
      <div className="text-center mb-8">
        <p className="uppercase text-sm tracking-widest text-neutral-500">
          Trusted By Ambitious Startups
        </p>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Brand Logo"
              className="h-10 mx-8 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}