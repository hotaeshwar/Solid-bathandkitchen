'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TypewriterHeading from '@/components/TypewriterHeading';
import AnimatedButton from '@/components/AnimatedButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import BathroomEstimator from '@/components/BathroomEstimator';
import ScrollReveal from '@/components/ScrollReveal';
import HoverFaq from '@/components/HoverFaq';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import { ShowerHead, Sparkles } from 'lucide-react';

export default function BathroomsPage({ onOpenEstimateModal }) {
  const [selectedService, setSelectedService] = useState(null);

  const bathroomServices = [
    {
      title: 'Frameless Walk-In Showers',
      category: 'Bathroom Specialization',
      desc: 'Custom 10mm tempered glass enclosures, linear drains, built-in recessed niches, and rain shower heads.',
      image: '/images/hero-bathroom.jpg',
      features: [
        'Starts From $7,999 CAD Guaranteed',
        'Finish Job in 7 Days Guaranteed',
        '10mm Heavy Tempered Frameless Glass',
        'Custom Linear Tile-In Floor Drains',
        'Thermostatic Rain & Handheld Shower Heads',
      ],
    },
    {
      title: 'Floating Oak & Walnut Vanities',
      category: 'Bathroom Specialization',
      desc: 'Custom handcrafted vanities with solid quartz tops, undermount sinks, and soft-close Blum hardware.',
      image: '/images/vanity-detail.jpg',
      features: [
        'Starts From $7,999 CAD Guaranteed',
        'Finish Job in 7 Days Guaranteed',
        'Solid Canadian Hardwood Construction',
        'Precision Soft-Close Blum Hinges & Glides',
        'Seamless Calacatta Quartz Countertops',
      ],
    },
    {
      title: 'Calacatta Marble & Porcelain Tiling',
      category: 'Bathroom Specialization',
      desc: 'Floor-to-ceiling porcelain wall tiles, chevron accent walls, and Schluter DITRA waterproofing.',
      image: '/images/bath-after.jpg',
      features: [
        'Starts From $7,999 CAD Guaranteed',
        'Finish Job in 7 Days Guaranteed',
        'Large-Format 24x48 Calacatta Porcelain',
        'Precision Mitred Tile Corner Edges',
        'Complete Waterproofing System Guarantee',
      ],
    },
    {
      title: 'In-Floor Radiant Heating',
      category: 'Bathroom Specialization',
      desc: 'Programmable DITRA-HEAT thermal floor systems for maximum warmth in Canadian winters.',
      image: '/images/radiant-floor.jpg',
      features: [
        'Starts From $7,999 CAD Guaranteed',
        'Finish Job in 7 Days Guaranteed',
        'WiFi Programmable Smart Thermostat',
        'Energy Efficient Radiant Heating Cable',
        'Uniform Warmth Under Porcelain Tiles',
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#faf8f5]">
      {/* HERO SECTION WITH $7,999 & 7-DAY GUARANTEE BADGE */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0f0e0c] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 overflow-hidden bg-luxury-grid">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Luxury Canadian Bathroom Remodeling"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-40 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/60 to-[#0f0e0c]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal animation="fade-up">
            {/* PROMINENT PRICE & TIMELINE BADGE */}
            <div className="inline-flex items-center text-xs sm:text-sm font-bold text-[#0f0e0c] bg-[#c9a53a] px-6 py-2 rounded-full border border-[#0f0e0c] shadow-luxury-hover mb-2">
              <Sparkles className="w-4 h-4 mr-2 text-[#0f0e0c] flex-shrink-0" />
              <span>Bathroom Renovations Starting From $7,999 CAD • Finish Job in 7 Days</span>
            </div>

            <div className="h-[90px] sm:h-[120px] w-full flex items-center justify-center overflow-hidden">
              <TypewriterHeading
                words={['Luxury Bathroom Remodeling', 'Private Spa Sanctuaries', 'Canadian Craftsmanship']}
                as="h1"
                theme="dark"
                className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <p className="text-base sm:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed font-serif-display italic">
              Bespoke master ensuite transformations starting at $7,999 CAD. Complete 7-day turnaround with frameless glass showers, floating vanities, and radiant heating.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <AnimatedButton
                href="/estimate"
                variant="gold"
                rounded="rounded-full"
                className="px-8 py-3.5"
              >
                Estimate Bathroom Cost
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE & AFTER SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider
          beforeImage="/images/bath-before.jpg"
          afterImage="/images/bath-after.jpg"
          title="Master Ensuite Transformation"
          subtitle="Drag the handle to see how we turn dated bathrooms into modern luxury spa suites."
        />
      </section>

      {/* BATHROOM SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#c9a53a]/30">
            SPA SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]">
            Our Bathroom Specializations
          </h2>
          <p className="text-sm font-medium text-[#6e6b63] mt-2">
            Click any specialization card below to view full details and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bathroomServices.map((service, idx) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={idx * 100}>
              <div
                onClick={() => setSelectedService(service)}
                className="bg-white border border-[#c9a53a]/30 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-[#c9a53a] hover:shadow-luxury-hover transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-[11px] font-mono font-bold text-[#0f0e0c] bg-[#c9a53a] px-3 py-1 rounded-full border border-[#0f0e0c]">
                      <Sparkles className="w-3 h-3 mr-1 text-[#0f0e0c]" />
                      Starts $7,999 • 7-Day Finish
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-[#c9a53a] transition-colors">
                      Click for Details →
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f0e0c] border border-[#c9a53a]/20 rounded-2xl mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-[#c9a53a] text-[#0f0e0c] rounded-2xl shadow-sm">
                        <ShowerHead className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-serif-heading font-bold text-[#1a1917] group-hover:text-[#c9a53a] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6e6b63] font-normal leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#c9a53a]/20 mt-6 text-right">
                  <span className="inline-flex items-center text-xs font-bold text-[#1a1917] group-hover:text-[#c9a53a] transition-colors">
                    View Complete Details →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BathroomEstimator onOpenModal={onOpenEstimateModal} />
      </section>

      {/* HOVER FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HoverFaq />
      </section>

      {/* SERVICE DETAIL MODAL */}
      <ServiceDetailModal
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
