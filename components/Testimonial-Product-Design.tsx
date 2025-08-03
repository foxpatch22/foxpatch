'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function TestimonialProductDesign() {
  return (
    <section className="bg-white py-12 md:py-16 mt-[-80px]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Testimonial Card */}
        <div className="bg-[#E1F6FD] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between shadow-sm">
          <div className="flex-1">
            <Quote className="w-16 h-16 text-cyan-400 mb-6" />
            <p className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-3xl">
              Foxpatch helped us redesign our SaaS dashboard to make it more intuitive and engaging for users.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 md:ml-12">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/Testimonials/Company-1.png" alt="Figma" width={32} height={32} />
              <span className="text-neutral-600 font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Testimonials/User1.png"
                alt="Alex Carter"
                width={56}
                height={56}
                className="rounded-full border-2 border-cyan-400"
              />
              <div>
                <p className="text-[#141414] font-medium">Alex Carter</p>
                <p className="text-neutral-600 text-sm">CEO at SaaSly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}