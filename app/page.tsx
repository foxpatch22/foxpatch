import Header from '@/components/layout/Header';
import Hero from "@/components/sections/Hero";
// import LogosMarquee from "@/components/common/LogosMarquee";
import ProductDesign from '@/components/sections/Product-Design';
import Website from '@/components/sections/Website';
import Brand from '@/components/ui/Brand';

import TestimonialProductDesign from '@/components/ui/Testimonial-Product-Design';
import TestimonialWebsite from '@/components/ui/Testimonial-Website';
import TestimonialBrand from '@/components/ui/Testimonial-Brand';

import CallToAction from '@/components/ui/CTA';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <LogosMarquee /> */}
      <ProductDesign />
      <TestimonialProductDesign />
      <Website/>
      <TestimonialWebsite />
      <Brand/>
      <TestimonialBrand />
      <CallToAction />
      <Footer />
    </main>
  );
}