'use client';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Website/Hero';
import Index from '@/components/sections/Website/index';
import Showcase from '@/components/sections/Website/Showcase';
// import Intro from '@/components/sections/Website/FeaturesGrid';
// import Intro from '@/components/sections/Website/AuroraCapabilities';
import Intro from '@/components/sections/Website/StellarCapabilities';

import CallToAction from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';

export default function ProductDesignPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Index />
        <Showcase />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}