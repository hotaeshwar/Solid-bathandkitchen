'use client';

import React from 'react';
import Image from 'next/image';
import TypewriterHeading from '@/components/TypewriterHeading';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage({ onOpenEstimateModal }) {
  return (
    <div className="space-y-20 pb-16 bg-[#faf8f5]">
      {/* HERO BANNER */}
      <section className="bg-[#0f0e0c] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 text-center bg-luxury-grid">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-white/10 px-4 py-1.5 rounded-full border border-[#c9a53a]/30">
            Canadian Interior Design Brand
          </span>
          <TypewriterHeading
            words={['Why Choose Solid', 'Canadian Craftsmanship', 'Bespoke Interior Excellence']}
            as="h1"
            className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
          />
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Solid Bath & Kitchen is built on an unwavering commitment to luxury materials, architectural precision, and customer satisfaction for Canadian homeowners.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full border border-[#c9a53a]/30">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917] leading-tight">
                Redefining Residential Luxury Across Canadian Homes.
              </h2>

              <p className="text-sm font-semibold text-[#1a1917] leading-relaxed">
                At Solid Bath & Kitchen, we believe that your bathroom and kitchen are the most sacred spaces in your home. They should not only be functional but evoke feelings of elegance, tranquility, and luxury every single day.
              </p>

              <p className="text-xs text-[#6e6b63] font-normal leading-relaxed">
                Our team brings together master carpenters, certified plumbers, electricians, and interior designers who specialize in high-end Canadian residential renovations. We source only premium materials — engineered quartz, solid hardwoods, Calacatta marble, and European brass hardware — to ensure every project stands the test of time.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white border-l-4 border-l-[#c9a53a] border border-[#c9a53a]/20 rounded-2xl shadow-xs">
                  <span className="block text-2xl font-bold font-mono text-[#1a1917]">100%</span>
                  <span className="text-xs font-semibold text-[#6e6b63]">Turnkey Accountability</span>
                </div>
                <div className="p-5 bg-white border-l-4 border-l-[#c9a53a] border border-[#c9a53a]/20 rounded-2xl shadow-xs">
                  <span className="block text-2xl font-bold font-mono text-[#1a1917]">5 Years</span>
                  <span className="text-xs font-semibold text-[#6e6b63]">Structural Warranty</span>
                </div>
              </div>

              <div className="pt-4">
                <AnimatedButton onClick={() => onOpenEstimateModal && onOpenEstimateModal({})} variant="gold" rounded="rounded-full">
                  Start Your Renovation Journey
                </AnimatedButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale">
            <div className="relative aspect-[4/3] border border-[#c9a53a]/30 rounded-3xl shadow-2xl overflow-hidden bg-[#0f0e0c]">
              <Image
                src="/images/hero-bathroom.jpg"
                alt="Solid Bath & Kitchen Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="bg-[#f6f5f2] py-16 sm:py-24 border-y border-[#c9a53a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif-heading font-bold text-[#1a1917]">Our Four Pillars of Quality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Architectural Design', desc: 'Detailed 3D layouts, spatial mapping, and custom fixture curations before demolition starts.' },
              { title: 'Master Craftsmanship', desc: 'Executed exclusively by licensed Canadian tradespeople with meticulous attention to detail.' },
              { title: 'Transparent Pricing', desc: 'Itemized, fixed contracts with zero hidden charges or unexpected budget inflations.' },
              { title: 'Clean & Timely Work', desc: 'Daily site dust protection, floor protection, and strict adherence to agreed project timelines.' },
            ].map((p, idx) => (
              <div key={p.title} className="bg-white border border-[#c9a53a]/30 p-6 rounded-2xl shadow-md border-t-4 border-t-[#c9a53a]">
                <span className="text-xs font-mono font-bold text-[#c9a53a] bg-[#0f0e0c] px-2.5 py-0.5 rounded-full">0{idx + 1}</span>
                <h3 className="text-lg font-serif-heading font-bold text-[#1a1917] mt-3 mb-2">{p.title}</h3>
                <p className="text-xs text-[#6e6b63] font-normal leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
