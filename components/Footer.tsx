'use client';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F3FFE2] py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
        
        {/* PRODUCT */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-[#141414]">
            <li>Product Design</li>
            <li>Website Design</li>
            <li>Branding</li>
            <li>Pitch Decks</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Products
          </h4>
          <ul className="space-y-2 text-[#141414]">
            <li>Cosmikit</li>
            <li>Spark</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Resources
          </h4>
          <ul className="space-y-2 text-[#141414]">
            <li>Design Systems</li>
            <li>Assets</li>
            <li>Tools</li>
            <li>Docs</li>
          </ul>
        </div>

        {/* OTHER */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Other
          </h4>
          <ul className="space-y-2 text-[#141414]">
                <li><a href="/pricing" className="hover:text-black">Pricing</a></li>
                <li><a href="/contact" className="hover:text-black">Contact</a></li>
                <li><a href="/careers" className="hover:text-black">Careers</a></li>
                <li><a href="/team" className="hover:text-black">Team Login</a></li> {/* 👈 new */}
          </ul>
        </div>

        {/* UTILITY */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Utility
          </h4>
          <ul className="space-y-2 text-[#141414]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo + Socials */}
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-[#141414]">Foxpatch</span>
          <div className="flex gap-4 text-neutral-600">
            <Twitter size={20} />
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
            <Youtube size={20} />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-neutral-500 text-sm mt-6 md:mt-0">
          © {new Date().getFullYear()} Foxpatch. All rights reserved
        </p>
      </div>
    </footer>
  );
}