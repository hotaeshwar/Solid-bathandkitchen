'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TypewriterHeading from '@/components/TypewriterHeading';
import AnimatedButton from '@/components/AnimatedButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import KitchenEstimator from '@/components/KitchenEstimator';
import ScrollReveal from '@/components/ScrollReveal';
import HoverFaq from '@/components/HoverFaq';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import { Utensils, Sparkles } from 'lucide-react';

export default function KitchensPage({ onOpenEstimateModal }) {
  const [selectedService, setSelectedService] = useState(null);

  const kitchenServices = [
    {
      title: 'Waterfall Quartz & Marble Islands',
      category: 'Kitchen Specialization',
      desc: '10-foot waterfall kitchen islands with double-thick mitred edges, built-in undermount sink, and seating overhang.',
      image: '/images/hero-kitchen.jpg',
      features: [
        '10-Foot Calacatta Quartz Waterfall Island',
        'Seamless Mitred Double-Thick Edgings',
        'Deep Undermount Composite Quartz Sink',
        'Overhang Seating Bar for 4 High Bar Stools',
        'Integrated Under-Counter LED Illumination',
      ],
    },
    {
      title: 'Bespoke Solid Cabinetry & Millwork',
      category: 'Kitchen Specialization',
      desc: 'Custom Canadian solid hardwood and shaker cabinets with integrated pantry, spice pull-outs, and soft-close Blum hinges.',
      image: '/images/island-detail.jpg',
      features: [
        'Solid Maple & Oak Shaker Doors',
        'Custom Appliance Garage & Pantry Storage',
        'Soft-Close Blumotion Drawer Runners',
        'Pull-Out Spice Racks & Deep Pot Drawers',
        'Factory Finished Baked Enamel Paints',
      ],
    },
    {
      title: 'Chevron Backsplash & Pot Fillers',
      category: 'Kitchen Specialization',
      desc: 'Precision marble chevron tile backsplashes, wall-mounted brass pot fillers, and architectural Task LED lighting.',
      image: '/images/kitchen-after.jpg',
      features: [
        'Natural Italian Marble Chevron Tiles',
        'Wall-Mounted Solid Brass Pot Filler Faucet',
        'Under-Cabinet Dimmable Linear LED Strip Lights',
        'Hidden Countertop Power Outlet Strips',
        'Seamless Stainless Hood Fan Integration',
      ],
    },
    {
      title: 'Open-Concept Structural Remodeling',
      category: 'Kitchen Specialization',
      desc: 'Removing load-bearing walls, installing steel beam supports, and expanding kitchen floor plans into open great rooms.',
      image: '/images/kitchen-before.jpg',
      features: [
        'Load-Bearing Wall Removal & Structural Steel Beams',
        'Seamless Hardwood Floor Leveling & Matching',
        'Recessed Architectural LED Ceiling Pot Lights',
        'HVAC Ducting & Plumbing Relocation',
        'Complete Canadian Building Permit Compliance',
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#faf8f5]">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#0f0e0c] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 overflow-hidden bg-luxury-grid">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-kitchen.jpg"
            alt="Luxury Canadian Kitchen Renovations"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-40 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/60 to-[#0f0e0c]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center text-xs font-mono font-bold text-[#c9a53a] bg-white/10 px-4 py-1.5 rounded-full border border-[#c9a53a]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              <span>CHEF KITCHEN SPECIALISTS</span>
            </div>

            <div className="h-[90px] sm:h-[120px] w-full flex items-center justify-center overflow-hidden">
              <TypewriterHeading
                words={['Luxury Kitchen Renovations', 'Bespoke Chef Kitchens', 'Canadian Craftsmanship']}
                as="h1"
                theme="dark"
                className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <p className="text-base sm:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed font-serif-display italic">
              Grand waterfall quartz islands, custom Canadian cabinetry, chevron backsplashes, and open-concept living.
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
                Estimate Kitchen Cost
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE & AFTER SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider
          beforeImage="/images/kitchen-before.jpg"
          afterImage="/images/kitchen-after.jpg"
          title="Open Concept Culinary Transformation"
          subtitle="Drag the handle to see how we transform dark enclosed kitchens into open luxury culinary spaces."
        />
      </section>

      {/* KITCHEN SERVICES GRID (TAGS ALWAYS OUTSIDE IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#c9a53a]/30">
            CULINARY SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]">
            Our Kitchen Specializations
          </h2>
          <p className="text-sm font-medium text-[#6e6b63] mt-2">
            Click any specialization card below to view full details and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kitchenServices.map((service, idx) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={idx * 100}>
              <div
                onClick={() => setSelectedService(service)}
                className="bg-white border border-[#c9a53a]/30 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-[#c9a53a] hover:shadow-luxury-hover transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* TAG MOVED OUTSIDE / ABOVE IMAGE FRAME */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-[11px] font-mono font-bold text-[#0f0e0c] bg-[#c9a53a] px-3 py-1 rounded-full border border-[#0f0e0c]">
                      <Sparkles className="w-3 h-3 mr-1 text-[#0f0e0c]" />
                      Kitchen Specialization
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-[#c9a53a] transition-colors">
                      Click for Details →
                    </span>
                  </div>

                  {/* Clean Image Frame (Zero Overlapping Tags Inside) */}
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
                        <Utensils className="w-5 h-5" />
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
        <KitchenEstimator onOpenModal={onOpenEstimateModal} />
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
