'use client';
import { useState } from 'react';
import { PenTool, Palette, Laptop, Code, Tag, Star } from 'lucide-react';

interface MagicTagProps {
  type: 'product' | 'website' | 'branding';
  children: string;
}

export default function MagicTag({ type, children }: MagicTagProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-4 py-2 bg-white border rounded-full shadow-sm transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-visible"
    >
      {children}

      {/* Product Design Icons */}
      {hovered && type === 'product' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <PenTool className="w-5 h-5 text-purple-600 animate-bounce" />
          <Palette className="w-5 h-5 text-pink-500 animate-pulse" />
        </div>
      )}

      {/* Website Icons */}
      {hovered && type === 'website' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <Laptop className="w-5 h-5 text-green-600 animate-bounce" />
          <Code className="w-5 h-5 text-blue-500 animate-pulse" />
        </div>
      )}

      {/* Branding Icons */}
      {hovered && type === 'branding' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <Tag className="w-5 h-5 text-yellow-600 animate-bounce" />
          <Star className="w-5 h-5 text-yellow-400 animate-spin" />
        </div>
      )}
    </div>
  );
}