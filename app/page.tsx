import Header from '../components/Header';
import Hero from "../components/Hero";
// import LogosMarquee from "../components/LogosMarquee";
import ProductDesign from '../components/Product-Design';
import Website from '../components/Website';
import Brand from '../components/Brand';

import TestimonialProductDesign from '../components/Testimonial-Product-Design';
import TestimonialWebsite from '../components/Testimonial-Website';
import TestimonialBrand from '../components/Testimonial-Brand';

import CallToAction from '../components/CTA';
import Footer from '../components/Footer';


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