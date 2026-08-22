'use client';

import React from 'react';
import TypewriterHeading from '@/components/TypewriterHeading';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage({ onOpenEstimateModal }) {
  return (
    <div className="space-y-16 pb-16 bg-[#faf8f5]">
      <section className="bg-[#0f0e0c] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 text-center bg-luxury-grid">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-white/10 px-4 py-1.5 rounded-full border border-[#c9a53a]/30">
            Canadian Portfolio
          </span>
          <TypewriterHeading
            words={['Renovation Portfolio', 'Luxury Bathroom & Kitchen Gallery', 'Craftsmanship Showcase']}
            as="h1"
            className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
          />
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Explore our curated showcase of Canadian bathroom spa master suites, custom kitchen islands, and bespoke interior renovations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </div>
  );
}
