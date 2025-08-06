'use client';
import Header from '../../../components/Header';
import ProductDesignHero from '../../../components/ProductDesignHero';
import ProductDesignSection from '../../../components/ProductDesignSection';
import ProductDesignSection2 from '@/components/ProductDesignSection2';
import ProductDesignSection3 from '@/components/ProductDesignSection3';

import CallToAction from '../../../components/CTA';
import Footer from '../../../components/Footer';

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