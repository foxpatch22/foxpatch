'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function TestimonialBrand() {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-16 mt-[-80px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#FBEBFB] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between shadow-sm">
          <div className="flex-1">
            <Quote className="w-16 h-16 text-cyan-400 mb-6" />
            <p className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-3xl">
              The branding work from Foxpatch gave us a unique identity and a memorable logo that resonates with customers.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 md:ml-12">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/Testimonials/Company-3.png" alt="Branding" width={32} height={32} />
              <span className="text-neutral-600 font-medium">Branding Co.</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Testimonials/User3.png"
                alt="David Lee"
                width={56}
                height={56}
                className="rounded-full border-2 border-cyan-400"
              />
              <div>
                <p className="text-[#141414] font-medium">David Lee</p>
                <p className="text-neutral-600 text-sm">Founder of BrandHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /> <br /><br /><br />
    </section>
  );
}