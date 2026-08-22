'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'Bathrooms',
    title: 'Canadian Spa Suite',
    subtitle: 'Calacatta Marble & Freestanding Tub',
    src: '/images/hero-bathroom.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    category: 'Kitchens',
    title: 'Waterfall Marble Island',
    subtitle: 'Custom Navy Millwork & Brass Hardware',
    src: '/images/hero-kitchen.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 3,
    category: 'Bathrooms',
    title: 'Frameless Glass Shower',
    subtitle: 'Brushed Gold Fixtures & Recessed LED',
    src: '/images/bath-after.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    category: 'Kitchens',
    title: 'Architectural Kitchen',
    subtitle: 'Quartz Surfaces & Linear Lighting',
    src: '/images/kitchen-after.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    category: 'Details',
    title: 'Floating Walnut Vanity',
    subtitle: 'Dual Vessel Sinks & Backlit Mirrors',
    src: '/images/vanity-detail.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    category: 'Details',
    title: 'Marble Countertop Detail',
    subtitle: 'Brass Gooseneck Faucet & Seamless Edge',
    src: '/images/island-detail.jpg',
    span: 'col-span-1 row-span-1',
  },
];

export default function GalleryGrid({ limit }) {
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState(GALLERY_ITEMS);
  const [selectedImage, setSelectedImage] = useState(null);

  // Requirement 17: On refresh, rotate selected gallery images
  useEffect(() => {
    const shuffled = [...GALLERY_ITEMS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, []);

  const filteredItems = items.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {['All', 'Bathrooms', 'Kitchens', 'Details'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all ${
              filter === cat
                ? 'bg-[#c9a53a] text-[#0f0e0c] border border-[#c9a53a] shadow-sm'
                : 'bg-[#faf8f5] text-[#1a1917] border border-gray-300 hover:border-[#c9a53a]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative h-80 overflow-hidden border border-[#c9a53a]/30 rounded-2xl bg-[#0f0e0c] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
            />

            {/* Subtle Gold Hover Frame Accent */}
            <div className="absolute inset-4 border border-[#c9a53a]/0 group-hover:border-[#c9a53a]/80 transition-all duration-500 pointer-events-none z-10 rounded-xl" />

            {/* Gradient Overlay & Text Reveal */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-[#0f0e0c]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c]/90 px-2.5 py-0.5 w-max mb-1 rounded-full border border-[#c9a53a]/30">
                {item.category}
              </span>
              <h4 className="text-lg font-serif-heading font-bold text-white group-hover:text-[#c9a53a] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-300 mt-1">{item.subtitle}</p>

              <div className="mt-3 flex items-center text-xs font-semibold text-[#c9a53a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3.5 h-3.5 mr-1" />
                <span>View Full Spec</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[120] bg-[#0f0e0c]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full bg-[#faf8f5] border border-[#c9a53a]/40 rounded-2xl overflow-hidden p-2">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-[#0f0e0c] text-white flex justify-between items-center rounded-b-xl">
              <div>
                <span className="text-xs font-mono text-[#c9a53a] uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-serif-heading font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-gray-400">{selectedImage.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-[#c9a53a] text-[#0f0e0c] font-bold text-xs uppercase rounded-full hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
