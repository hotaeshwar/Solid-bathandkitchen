'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import TypewriterHeading from './TypewriterHeading';

const FAQS = [
  {
    q: 'How long does a typical bathroom or kitchen renovation take?',
    a: 'Complete bathroom renovations take approximately 2 to 3 weeks (with our 7-day turnkey completion package available). Full kitchen transformations involving custom millwork and waterfall stone slabs typically take 3 to 5 weeks. We establish a strict project timeline before work begins.',
  },
  {
    q: 'Do you handle all permits, plumbing, electrical, and inspections?',
    a: 'Yes, Solid Bath & Kitchen is a turnkey Canadian licensed contractor. We manage all architectural planning, demolition, plumbing, electrical, waterproofing, tile installation, custom millwork, and local Canadian building code inspections.',
  },
  {
    q: 'Are your renovation estimates fixed price or subject to mid-project increases?',
    a: 'All Solid estimates are 100% itemized, fixed-price contracts. We guarantee zero hidden fees or unexpected mid-project cost markups.',
  },
  {
    q: 'What warranty do you offer on craftsmanship and materials?',
    a: 'Every renovation is backed by our solid 5-year structural warranty alongside manufacturer warranties on quartz surfaces, custom cabinetry, and gold brass fixtures.',
  },
  {
    q: 'Can I select custom materials and high-end fixtures?',
    a: 'Absolutely. We work directly with top Canadian and European luxury suppliers for Calacatta marble, engineered quartz, solid hardwoods, frameless glass, and designer brass plumbing fixtures.',
  },
  {
    q: 'How do you protect the rest of my home during renovation?',
    a: 'We install heavy-duty zip walls, floor protection, and air scrubbers to keep dust strictly contained to the work area. Our crews clean the site daily.',
  },
];

export default function HoverFaq() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const toggleFaq = (idx) => {
    setHoveredIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
        <span className="inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full mb-2 sm:mb-3 border border-[#c9a53a]/30 shadow-md">
          <HelpCircle className="w-3.5 h-3.5 mr-2 text-[#c9a53a]" />
          Frequently Asked Questions
        </span>
        <TypewriterHeading
          words={['Got Questions? We Have Answers.', 'Frequently Asked Questions', 'Renovation Advice & FAQ']}
          as="h2"
          theme="light"
          className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]"
        />
        <p className="text-xs sm:text-sm font-semibold text-[#6e6b63] mt-1 sm:mt-2">
          Hover or tap any question below to reveal detailed renovation answers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-1 sm:px-4">
        {FAQS.map((faq, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={faq.q}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => toggleFaq(idx)}
              className={`border border-[#c9a53a]/30 rounded-2xl sm:rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer ${
                isHovered
                  ? 'bg-[#0f0e0c] text-white border-[#c9a53a] shadow-[0_10px_25px_rgba(201,165,58,0.2)] scale-[1.005]'
                  : 'bg-[#faf8f5] text-[#1a1917] hover:border-[#c9a53a]'
              }`}
            >
              {/* Question Bar */}
              <div className="p-3.5 sm:p-6 flex items-center justify-between gap-2.5 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs flex-shrink-0 transition-colors ${
                      isHovered ? 'bg-[#c9a53a] text-[#0f0e0c]' : 'bg-[#e5e2db] text-[#1a1917]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <h3 className="text-xs sm:text-base lg:text-lg font-serif-heading font-bold leading-snug">
                    {faq.q}
                  </h3>
                </div>

                <div
                  className={`p-1.5 sm:p-2 rounded-full border flex-shrink-0 transition-transform duration-500 ${
                    isHovered
                      ? 'bg-[#c9a53a] text-[#0f0e0c] border-[#0f0e0c] rotate-180'
                      : 'bg-white text-[#1a1917] border-gray-200'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Hover/Tap Expand Answer Body */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isHovered
                    ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-6 px-3.5 sm:px-6'
                    : 'grid-rows-[0fr] opacity-0 pb-0 px-3.5 sm:px-6'
                }`}
              >
                <div className="overflow-hidden border-t border-[#c9a53a]/20 pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
