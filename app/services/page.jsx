'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypewriterHeading from '@/components/TypewriterHeading';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import HoverFaq from '@/components/HoverFaq';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import {
  Bath,
  ChefHat,
  ShowerHead,
  Layers,
  Flame,
  Sparkles,
  CheckCircle2,
  Home,
  Compass
} from 'lucide-react';

const SERVICES_LIST = [
  {
    id: 'full-bathroom',
    category: 'Bathroom Services',
    title: 'Full Bathroom Remodeling',
    icon: Bath,
    image: '/images/hero-bathroom.jpg',
    desc: 'Complete strip down to studs, structural waterproofing, custom walk-in shower installation, floating vanity, architectural lighting, and premium tile flooring.',
    features: [
      'Starts From $7,999 CAD Guaranteed',
      'Finish Job in 7 Days Guaranteed',
      'Frameless Glass Enclosures',
      'Schluter Waterproofing System',
      'Floating Vanity & Quartz Tops',
    ],
  },
  {
    id: 'luxury-kitchen',
    category: 'Kitchen Services',
    title: 'Luxury Kitchen Renovations',
    icon: ChefHat,
    image: '/images/hero-kitchen.jpg',
    desc: 'Open-concept wall removals, solid custom cabinetry, quartz & marble waterfall islands, chevron backsplash tiling, pot fillers, and appliance integration.',
    features: [
      'Custom Canadian Cabinetry',
      'Quartz & Marble Waterfall Islands',
      'Pot Fillers & Brass Fixtures',
      'Integrated Pantry & Pull-Outs',
    ],
  },
  {
    id: 'full-home',
    category: 'Whole Home Services',
    title: 'Full Home Interior Renovation',
    icon: Home,
    image: '/images/full-home-after.jpg',
    desc: 'Bespoke Canadian whole-home interior remodeling including open-concept structural wall removals, oak hardwood flooring, marble fireplaces, and custom millwork.',
    features: [
      'Structural Load-Bearing Wall Removal',
      'Solid Oak Hardwood Flooring Throughout',
      'Custom Marble Fireplace Surrounds',
      'Turnkey Canadian Building Permit Handling',
    ],
  },
  {
    id: 'basement-suite',
    category: 'Basement Services',
    title: 'Luxury Basement Suite & Bar',
    icon: Compass,
    image: '/images/basement-after.jpg',
    desc: 'Transforming dark unfinished basements into premier entertainment lounges with custom wet bar with gold brass fixtures, home theater walls, and legal rental suite layouts.',
    features: [
      'Custom Wet Bar with Quartz Countertops',
      'Home Theater Acoustic Media Walls',
      'Sub-Floor Moisture & Thermal Insulation',
      'Legal Canadian Basement Suite Compliance',
    ],
  },
  {
    id: 'custom-vanities',
    category: 'Bathroom Services',
    title: 'Custom Vanities & Millwork',
    icon: Layers,
    image: '/images/vanity-detail.jpg',
    desc: 'Handcrafted floating oak & walnut vanities built to exact room dimensions with solid quartz tops, undermount sinks, and LED backlit mirrors.',
    features: [
      'Starts From $7,999 CAD Packages',
      'Solid Hardwood Construction',
      'Soft-Close Blum Hardware',
      'Custom Undermount Sinks',
    ],
  },
  {
    id: 'waterfall-slabs',
    category: 'Kitchen Services',
    title: 'Waterfall Slabs & Surfaces',
    icon: Sparkles,
    image: '/images/island-detail.jpg',
    desc: 'Precision mitred edge waterfall islands and full slab backsplashes using premium Calacatta marble and engineered quartz.',
    features: [
      'Seamless Mitred Edges',
      'Stain-Resistant Engineered Quartz',
      'Full-Height Slab Backsplash',
      'Bookmatched Marble Patterns',
    ],
  },
  {
    id: 'radiant-heating',
    category: 'Bathroom Services',
    title: 'In-Floor Radiant Heating',
    icon: Flame,
    image: '/images/radiant-floor.jpg',
    desc: 'Programmable Schluter DITRA-HEAT thermal floor systems providing luxurious warmth for Canadian winters under tile floors.',
    features: [
      'Finished in 7 Days Guaranteed',
      'Smart Thermostat Control',
      'Energy Efficient Heating Cable',
      'Uncoupling Waterproof Membrane',
    ],
  },
  {
    id: 'architectural-lighting',
    category: 'Kitchen Services',
    title: 'Architectural LED & Fixtures',
    icon: ShowerHead,
    image: '/images/kitchen-after.jpg',
    desc: 'Strategic ambient cove lighting, linear kitchen pendants, backlit vanity mirrors, and brushed gold or matte black plumbing fixtures.',
    features: [
      'Dimmable Ambient Lighting',
      'Linear Island Pendants',
      'Brushed Brass Fixtures',
      'Under-Cabinet Task Lighting',
    ],
  },
];

export default function ServicesPage({ onOpenEstimateModal }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-20 pb-16 bg-[#faf8f5]">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#0f0e0c] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 overflow-hidden bg-luxury-grid">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-kitchen.jpg"
            alt="Solid Luxury Interior Services Canada"
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
              <span>CANADIAN INTERIOR SERVICES</span>
            </div>

            <div className="h-[90px] sm:h-[120px] w-full flex items-center justify-center overflow-hidden">
              <TypewriterHeading
                words={['Our Renovation Services', 'Bespoke Bathrooms & Kitchens', 'Canadian Craftsmanship']}
                as="h1"
                theme="dark"
                className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <p className="text-base sm:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed font-serif-display italic">
              From single-room luxury upgrades to complete residential interior overhauls across Toronto & Ontario.
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
                Calculate Renovation Cost
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUICK CATEGORY ANCHORS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-[#c9a53a]/30 p-4 rounded-3xl shadow-sm">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6e6b63]">Jump to Services:</span>
          <div className="flex items-center space-x-3">
            <Link
              href="/bathrooms"
              className="bg-[#0f0e0c] text-[#c9a53a] text-xs font-bold px-5 py-2 rounded-full border border-[#c9a53a]/40 hover:bg-[#c9a53a] hover:text-[#0f0e0c] transition-colors flex items-center space-x-1.5"
            >
              <Bath className="w-3.5 h-3.5" />
              <span>Bathroom Services</span>
            </Link>
            <Link
              href="/kitchens"
              className="bg-[#0f0e0c] text-[#c9a53a] text-xs font-bold px-5 py-2 rounded-full border border-[#c9a53a]/40 hover:bg-[#c9a53a] hover:text-[#0f0e0c] transition-colors flex items-center space-x-1.5"
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>Kitchen Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.id} animation="fade-up" delay={idx * 100}>
                <div
                  onClick={() => setSelectedService(s)}
                  className="bg-white border border-[#c9a53a]/30 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-[#c9a53a] hover:shadow-luxury-hover transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center text-[11px] font-mono font-bold text-[#0f0e0c] bg-[#c9a53a] px-3 py-1 rounded-full border border-[#0f0e0c]">
                        <Sparkles className="w-3 h-3 mr-1 text-[#0f0e0c]" />
                        {s.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-[#c9a53a] transition-colors">
                        Click for Details →
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f0e0c] border border-[#c9a53a]/20 rounded-2xl mb-6">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#c9a53a] text-[#0f0e0c] rounded-2xl shadow-sm flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-serif-heading font-bold text-[#1a1917] group-hover:text-[#c9a53a] transition-colors">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#6e6b63] font-normal leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="pt-2 border-t border-[#c9a53a]/15 space-y-1.5">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center text-xs font-semibold text-[#1a1917]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a53a] mr-1.5 flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#c9a53a]/20 mt-6 text-right">
                    <span className="inline-flex items-center text-xs font-bold text-[#1a1917] group-hover:text-[#c9a53a] transition-colors">
                      View Service Details →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* HOVER FAQ SECTION */}
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
