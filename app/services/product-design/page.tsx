'use client';
import Header from '@/components/layout/Header';
import ProductDesignHero from '@/components/sections/ProductDesignHero';
import ProductDesignSection from '@/components/sections/ProductDesignSection';
import ProductDesignSection2 from '@/components/sections/ProductDesignSection2';
import ProductDesignSection3 from '@/components/sections/ProductDesignSection3';

import CallToAction from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';

export default function ProductDesignPage() {
  return (
    <>
      <Header />
      <main>
        <ProductDesignHero />
        <ProductDesignSection2 />
        <ProductDesignSection />
        <ProductDesignSection3 />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}