'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function TestimonialWebsite() {
  return (
    <section className="bg-[#FAF9F7] py-12 md:py-16 mt-[-80px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#F2F0E7] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start justify-between shadow-sm">
          <div className="flex-1">
            <Quote className="w-16 h-16 text-cyan-400 mb-6" />
            <p className="text-2xl md:text-3xl font-normal text-[#141414] leading-snug max-w-3xl">
              Their website design made our online presence stand out and boosted our conversions.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 md:ml-12">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/Testimonials/Company-2.png" alt="Webflow" width={32} height={32} />
              <span className="text-neutral-600 font-medium">Webflow</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Testimonials/User2.png"
                alt="Sophia Lin"
                width={56}
                height={56}
                className="rounded-full border-2 border-cyan-400"
              />
              <div>
                <p className="text-[#141414] font-medium">Sophia Lin</p>
                <p className="text-neutral-600 text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}