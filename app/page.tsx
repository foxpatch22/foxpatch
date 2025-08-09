import Header from '@/components/layout/Header';
import Hero from "@/components/sections/Common/Hero";
// import LogosMarquee from "@/components/sections/Common/LogosMarquee";
import ProductDesignIntro from '@/components/sections/ProductDesign/Intro';
import WebsiteIntro from '@/components/sections/Website/Intro';
import BrandingIntro from '@/components/sections/Branding/Intro';

import ProductDesignTestimonial from '@/components/ui/Testimonial-Product-Design';
import WebsiteTestimonial from '@/components/ui/Testimonial-Website';
import BrandingTestimonial from '@/components/ui/Testimonial-Brand';

import CallToAction from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <LogosMarquee /> */}
      
      <ProductDesignIntro />
      <ProductDesignTestimonial />
      
      <WebsiteIntro />
      <WebsiteTestimonial />
      
      <BrandingIntro />
      <BrandingTestimonial />
      
      <CallToAction />
      <Footer />
    </main>
  );
}