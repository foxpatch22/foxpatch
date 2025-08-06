'use client';

import Header from '@/components/layout/Header';
import ProductDesignHero from '@/components/sections/ProductDesign/Hero';
import ProductDesignShowcase from '@/components/sections/ProductDesign/Showcase';
import ProductDesignApproach from '@/components/sections/ProductDesign/Approach';
import ProductDesignProcess from '@/components/sections/ProductDesign/Process';

import CallToAction from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';

export default function ProductDesignPage() {
  return (
    <>
      <Header />
      <main>
        <ProductDesignHero />
        <ProductDesignProcess />
        <ProductDesignApproach />
        <ProductDesignShowcase />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}