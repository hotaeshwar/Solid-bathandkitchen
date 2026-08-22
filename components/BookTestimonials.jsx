'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, BookOpen, Quote } from 'lucide-react';
import TypewriterHeading from './TypewriterHeading';

const REVIEWS = [
  {
    id: 1,
    name: 'Eleanor & Marc Vance',
    location: 'Bridle Path, Toronto, ON',
    project: 'Spa Master Ensuite Renovation',
    rating: 5,
    date: 'June 2025',
    image: '/images/hero-bathroom.jpg',
    review:
      'Solid Bath & Kitchen transformed our 1990s master bath into a five-star hotel spa suite. The calacatta marble shower, floating walnut vanity, and floor heating are flawless. Their team finished on schedule with absolute professionalism.',
  },
  {
    id: 2,
    name: 'David & Sarah Sterling',
    location: 'Oakville, Ontario',
    project: 'Grand Waterfall Kitchen Island',
    rating: 5,
    date: 'August 2025',
    image: '/images/hero-kitchen.jpg',
    review:
      'The custom navy cabinetry and 10-foot quartz waterfall island exceeded our highest expectations. From 3D architectural design to final reveal, Solid provided the best renovation experience we have ever had in Canada.',
  },
  {
    id: 3,
    name: 'Chloe & Julian Ross',
    location: 'Yorkville, Toronto, ON',
    project: 'Condo Bath & Kitchen Overhaul',
    rating: 5,
    date: 'November 2025',
    image: '/images/bath-after.jpg',
    review:
      'Renovating a high-rise suite comes with strict condo board rules. Solid handled all permits, elevator bookings, and noise control seamlessly. The craftsmanship on our brass fixtures and chevron backsplash is museum grade.',
  },
  {
    id: 4,
    name: 'Robert & Claire Henderson',
    location: 'Mississauga, Ontario',
    project: 'Master Bath & Custom Pantry',
    rating: 5,
    date: 'January 2026',
    image: '/images/kitchen-after.jpg',
    review:
      'Their fixed-price guarantee meant zero surprises. The in-floor heating is an absolute godsend for Canadian winters. We recommend Solid Bath & Kitchen to all our friends looking for true luxury interior work.',
  },
];

export default function BookTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const isFlippingRef = useRef(false);

  const totalPages = REVIEWS.length;

  const flipToNextPage = () => {
    if (isFlippingRef.current) return;
    isFlippingRef.current = true;
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setIsFlipping(false);
      isFlippingRef.current = false;
    }, 350);
  };

  const flipToPrevPage = () => {
    if (isFlippingRef.current) return;
    isFlippingRef.current = true;
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      setIsFlipping(false);
      isFlippingRef.current = false;
    }, 350);
  };

  // Requirement: Uninterrupted Auto Book Page Flip Loop (Every 3.8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      flipToNextPage();
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const review = REVIEWS[currentPage];

  return (
    <div className="w-full py-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full mb-3 border border-[#c9a53a]/30 shadow-md">
          <BookOpen className="w-3.5 h-3.5 mr-2 text-[#c9a53a]" />
          Client Portfolio & Reviews
        </span>
        <TypewriterHeading
          words={['Verified Canadian Homeowner Testimonials', 'Real Client Experiences', 'Our Renovation Portfolio']}
          as="h2"
          theme="light"
          className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]"
        />
        <p className="text-sm font-medium text-[#6e6b63] mt-2">
          Flip through our architectural portfolio of client transformations and real renovation feedback.
        </p>
      </div>

      {/* 3D BOOK CONTAINER */}
      <div className="perspective-1000 max-w-4xl mx-auto relative px-1 sm:px-2">
        <div
          className={`bg-[#faf8f5] border border-[#c9a53a]/30 rounded-2xl sm:rounded-[2rem] shadow-[0_25px_60px_rgba(15,14,12,0.12)] border-t-4 border-t-[#c9a53a] p-5 sm:p-12 relative overflow-hidden transition-all duration-700 transform-gpu ${
            isFlipping ? 'rotate-y-12 opacity-80 scale-95' : 'rotate-y-0 opacity-100 scale-100'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Book Center Fold Spine Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/5 via-black/10 to-transparent pointer-events-none hidden md:block" />

          {/* Book Header / Page Number */}
          <div className="flex items-center justify-between border-b border-[#c9a53a]/20 pb-3 sm:pb-4 mb-4 sm:mb-8">
            <div className="flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-xs font-mono font-bold text-[#c9a53a] bg-[#0f0e0c] px-3 py-1 rounded-full border border-[#c9a53a]/30">
              <span>PORTFOLIO ENTRY</span>
              <span>•</span>
              <span>FOLIO {currentPage + 1} OF {totalPages}</span>
            </div>

            <div className="flex items-center space-x-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#c9a53a] text-[#c9a53a]" />
              ))}
            </div>
          </div>

          {/* Page Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
            {/* Left: Project Image */}
            <div className="md:col-span-5 relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[#c9a53a]/30 shadow-md bg-[#0f0e0c] group">
              <Image
                src={review.image}
                alt={review.project}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0f0e0c]/90 text-[#c9a53a] text-[9px] sm:text-[10px] font-mono font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#c9a53a]/40 backdrop-blur-xs">
                VERIFIED RENOVATION
              </div>
            </div>

            {/* Right: Detailed Review Quote */}
            <div className="md:col-span-7 space-y-3 sm:space-y-4">
              <Quote className="w-7 h-7 sm:w-10 sm:h-10 text-[#c9a53a] opacity-50" />

              <p className="text-xs sm:text-base font-serif-heading italic text-[#1a1917] leading-relaxed font-semibold">
                "{review.review}"
              </p>

              <div className="pt-3 sm:pt-4 border-t border-[#c9a53a]/20">
                <h4 className="text-base sm:text-lg font-serif-heading font-bold text-[#1a1917]">
                  {review.name}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-[#0f0e0c] bg-[#c9a53a] px-3 py-1 rounded-full inline-block mt-1">
                  {review.project} — {review.location}
                </p>
                <span className="block text-[10px] sm:text-[11px] font-mono text-[#6e6b63] mt-1">
                  Completed {review.date}
                </span>
              </div>
            </div>
          </div>

          {/* Page Turn Navigation Footer */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-4 pt-4 sm:pt-8 mt-4 sm:mt-8 border-t border-[#c9a53a]/20">
            <button
              onClick={flipToPrevPage}
              disabled={isFlipping}
              className="flex items-center space-x-1 sm:space-x-2 text-[10px] xs:text-xs font-bold uppercase tracking-wider text-[#1a1917] bg-[#f6f5f2] hover:bg-[#c9a53a] hover:text-[#0f0e0c] px-3 sm:px-5 py-2 rounded-full border border-[#c9a53a]/30 transition-all duration-300"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Prev<span className="hidden sm:inline">ious Page</span></span>
            </button>

            {/* Page Indicators */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? 'bg-[#c9a53a] scale-125 border border-[#0f0e0c]'
                      : 'bg-gray-300 hover:bg-[#c9a53a]'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={flipToNextPage}
              disabled={isFlipping}
              className="flex items-center space-x-1 sm:space-x-2 text-[10px] xs:text-xs font-bold uppercase tracking-wider text-[#0f0e0c] bg-[#c9a53a] hover:bg-[#0f0e0c] hover:text-[#c9a53a] px-3 sm:px-5 py-2 rounded-full border border-[#c9a53a] transition-all duration-300 shadow-md"
            >
              <span>Next<span className="hidden sm:inline"> Page</span></span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
