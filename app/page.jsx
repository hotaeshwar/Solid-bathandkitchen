'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypewriterHeading from '../components/TypewriterHeading';
import AnimatedButton from '../components/AnimatedButton';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import GalleryGrid from '../components/GalleryGrid';
import ScrollReveal from '../components/ScrollReveal';
import BookTestimonials from '../components/BookTestimonials';
import HoverFaq from '../components/HoverFaq';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ShowerHead,
  Utensils,
  Compass,
  PenTool,
  Calculator,
  Layers,
  Wrench,
  Sparkles
} from 'lucide-react';

export default function HomePage({ onOpenEstimateModal }) {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [userHoveredCards, setUserHoveredCards] = useState(false);

  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [userHoveredProcess, setUserHoveredProcess] = useState(false);

  const instagramUrl =
    'https://www.instagram.com/solid_bathandkitchen?igsh=MXE2ZnJoMTk5cWZnZA%3D%3D';

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroImageLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (userHoveredCards) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [userHoveredCards]);

  useEffect(() => {
    if (userHoveredProcess) return;
    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(interval);
  }, [userHoveredProcess]);

  const typewriterWords = [
    'Luxury Living Starts Here',
    'Transform Your Bathroom',
    'Your Dream Kitchen Awaits',
    'Designed for Modern Living',
  ];

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'In-home architectural space audit & vision alignment.', icon: Compass },
    { num: '02', title: 'Design', desc: '3D spatial design, layout mapping, & fixture curation.', icon: PenTool },
    { num: '03', title: 'Estimate', desc: 'Transparent, itemized pricing guaranteed with zero surprises.', icon: Calculator },
    { num: '04', title: 'Material Selection', desc: 'Exclusive sourcing of Canadian quartz, marble & solid woods.', icon: Layers },
    { num: '05', title: 'Renovation', desc: 'Precision craftsmanship executed by licensed master trades.', icon: Wrench },
    { num: '06', title: 'Final Reveal', desc: 'White-glove deep cleaning & 5-year warranty walkthrough.', icon: Sparkles },
  ];

  return (
    <div className="pb-12 bg-[#faf8f5]">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[80vh] sm:min-h-[88vh] lg:min-h-screen flex items-center justify-center bg-[#0f0e0c] overflow-hidden m-0 py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 mt-0 bg-luxury-grid">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Solid Luxury Canadian Bathroom Interior"
            fill
            sizes="100vw"
            priority
            onLoad={() => setHeroImageLoaded(true)}
            className={`object-cover transition-all duration-1000 ease-out ${
              heroImageLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/60 to-[#0f0e0c]/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 w-full px-2">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center text-center my-2 sm:my-6 w-full">
              <TypewriterHeading
                words={typewriterWords}
                as="h1"
                theme="dark"
                textColor="text-[#c9a53a]"
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-serif-heading font-bold tracking-tight leading-tight sm:leading-tight px-1"
              />
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:150ms]">
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed px-2 font-serif-display italic tracking-wide">
              Bespoke spa master suites and modern chef kitchens engineered with timeless Canadian craftsmanship, marble surfaces, and turnkey precision.
            </p>
          </div>

          <div className="animate-fade-in-up [animation-delay:300ms]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 w-full max-w-xs sm:max-w-none mx-auto">
              <AnimatedButton
                href="/estimate"
                variant="gold"
                rounded="rounded-full"
                className="w-full sm:w-auto text-sm sm:text-base px-9 sm:px-11 py-4 shadow-gold-glow"
              >
                Get Free Estimate
              </AnimatedButton>

              <AnimatedButton
                href="/gallery"
                variant="dark"
                rounded="rounded-full"
                className="w-full sm:w-auto text-sm sm:text-base px-9 sm:px-11 py-4"
              >
                Explore Portfolio
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* ELEGANT MINIMAL SCROLL DOWN INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none opacity-80">
          <div className="w-5 h-9 rounded-full border-2 border-[#c9a53a]/60 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#c9a53a] rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALIZED RENOVATIONS EDITORIAL SHOWCASE (COMPACT CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#faf8f5]">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center text-center my-2">
              <TypewriterHeading
                words={['Our Renovation Services', 'Bathrooms, Kitchens, Full Home & Basements']}
                as="h2"
                theme="light"
                className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]"
              />
            </div>
            <p className="text-sm font-medium text-[#6e6b63] mt-2 max-w-xl mx-auto">
              Bespoke Canadian interior transformations executed with turnkey precision, marble craftsmanship, and fixed-price contracts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Bathroom Renovation */}
          <ScrollReveal animation="scale">
            <div
              onMouseEnter={() => {
                setUserHoveredCards(true);
                setActiveCardIndex(0);
              }}
              onMouseLeave={() => setUserHoveredCards(false)}
              className={`group relative bg-white border border-[#c9a53a]/30 rounded-2xl p-5 shadow-lg transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                activeCardIndex === 0
                  ? 'border-[#c9a53a] shadow-luxury-hover scale-[1.02] z-20'
                  : 'opacity-95 scale-[0.99] z-10'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 rounded-xl bg-[#0f0e0c] border border-[#c9a53a]/20">
                  <Image
                    src="/images/hero-bathroom.jpg"
                    alt="Bathroom Renovation"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0f0e0c]/90 text-[#c9a53a] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#c9a53a]/40">
                    SPA SANCTUARIES
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-2 bg-[#c9a53a] text-[#0f0e0c] rounded-xl shadow-xs">
                    <ShowerHead className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif-heading font-bold text-[#1a1917]">
                    Bathroom Renovation
                  </h3>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#0f0e0c] bg-[#c9a53a] px-2.5 py-0.5 rounded-full shadow-xs">
                    Starts $7,999 CAD • 7-Day Finish
                  </span>
                </div>

                <p className="text-xs text-[#6e6b63] font-normal leading-relaxed mb-4 line-clamp-2">
                  Frameless glass walk-in showers, floating vanities, heated floors, and marble tile walls.
                </p>

                <div className="grid grid-cols-1 gap-1.5 text-[11px] font-medium text-[#1a1917] mb-5 border-t border-[#c9a53a]/20 pt-3">
                  {['Frameless Walk-In Showers', 'Custom Floating Vanities', 'Calacatta Marble Tiles', 'In-Floor Radiant Heating'].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-[#c9a53a] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedButton href="/bathrooms" variant="gold" rounded="rounded-full" className="w-full text-center py-2.5 text-xs">
                Explore Bathrooms
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Card 2: Kitchen Renovation */}
          <ScrollReveal animation="scale" delay={100}>
            <div
              onMouseEnter={() => {
                setUserHoveredCards(true);
                setActiveCardIndex(1);
              }}
              onMouseLeave={() => setUserHoveredCards(false)}
              className={`group relative bg-white border border-[#c9a53a]/30 rounded-2xl p-5 shadow-lg transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                activeCardIndex === 1
                  ? 'border-[#c9a53a] shadow-luxury-hover scale-[1.02] z-20'
                  : 'opacity-95 scale-[0.99] z-10'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 rounded-xl bg-[#0f0e0c] border border-[#c9a53a]/20">
                  <Image
                    src="/images/hero-kitchen.jpg"
                    alt="Kitchen Renovation"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0f0e0c]/90 text-[#c9a53a] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#c9a53a]/40">
                    CHEF KITCHENS
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-2 bg-[#c9a53a] text-[#0f0e0c] rounded-xl shadow-xs">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif-heading font-bold text-[#1a1917]">
                    Kitchen Renovation
                  </h3>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#0f0e0c] bg-[#c9a53a] px-2.5 py-0.5 rounded-full shadow-xs">
                    Custom Cabinetry • Quartz Islands
                  </span>
                </div>

                <p className="text-xs text-[#6e6b63] font-normal leading-relaxed mb-4 line-clamp-2">
                  Custom Canadian cabinetry, grand quartz waterfall islands, chevron backsplash, and open layout.
                </p>

                <div className="grid grid-cols-1 gap-1.5 text-[11px] font-medium text-[#1a1917] mb-5 border-t border-[#c9a53a]/20 pt-3">
                  {['Solid Shaker Cabinetry', 'Quartz Waterfall Islands', 'Chevron Backsplash Tiles', 'Brass Pot Fillers & Fixtures'].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-[#c9a53a] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedButton href="/kitchens" variant="gold" rounded="rounded-full" className="w-full text-center py-2.5 text-xs">
                Explore Kitchens
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Card 3: Full Home Renovation */}
          <ScrollReveal animation="scale" delay={200}>
            <div
              onMouseEnter={() => {
                setUserHoveredCards(true);
                setActiveCardIndex(2);
              }}
              onMouseLeave={() => setUserHoveredCards(false)}
              className={`group relative bg-white border border-[#c9a53a]/30 rounded-2xl p-5 shadow-lg transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                activeCardIndex === 2
                  ? 'border-[#c9a53a] shadow-luxury-hover scale-[1.02] z-20'
                  : 'opacity-95 scale-[0.99] z-10'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 rounded-xl bg-[#0f0e0c] border border-[#c9a53a]/20">
                  <Image
                    src="/images/full-home-after.jpg"
                    alt="Full Home Renovation"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0f0e0c]/90 text-[#c9a53a] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#c9a53a]/40">
                    WHOLE HOME
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-2 bg-[#c9a53a] text-[#0f0e0c] rounded-xl shadow-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif-heading font-bold text-[#1a1917]">
                    Full Home Renovation
                  </h3>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#0f0e0c] bg-[#c9a53a] px-2.5 py-0.5 rounded-full shadow-xs">
                    Canadian Open-Concept Design
                  </span>
                </div>

                <p className="text-xs text-[#6e6b63] font-normal leading-relaxed mb-4 line-clamp-2">
                  Complete interior remodeling, load-bearing wall removal, hardwood flooring, and luxury lighting.
                </p>

                <div className="grid grid-cols-1 gap-1.5 text-[11px] font-medium text-[#1a1917] mb-5 border-t border-[#c9a53a]/20 pt-3">
                  {['Structural Wall Removal', 'Oak Hardwood Flooring', 'Marble Fireplace Surrounds', 'Turnkey Interior Finishing'].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-[#c9a53a] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedButton href="/services" variant="gold" rounded="rounded-full" className="w-full text-center py-2.5 text-xs">
                Explore Full Home
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Card 4: Basement Renovation */}
          <ScrollReveal animation="scale" delay={300}>
            <div
              onMouseEnter={() => {
                setUserHoveredCards(true);
                setActiveCardIndex(3);
              }}
              onMouseLeave={() => setUserHoveredCards(false)}
              className={`group relative bg-white border border-[#c9a53a]/30 rounded-2xl p-5 shadow-lg transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                activeCardIndex === 3
                  ? 'border-[#c9a53a] shadow-luxury-hover scale-[1.02] z-20'
                  : 'opacity-95 scale-[0.99] z-10'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 rounded-xl bg-[#0f0e0c] border border-[#c9a53a]/20">
                  <Image
                    src="/images/basement-after.jpg"
                    alt="Basement Renovation"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0f0e0c]/90 text-[#c9a53a] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#c9a53a]/40">
                    LUXURY BASEMENTS
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-2 bg-[#c9a53a] text-[#0f0e0c] rounded-xl shadow-xs">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif-heading font-bold text-[#1a1917]">
                    Basement Renovation
                  </h3>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#0f0e0c] bg-[#c9a53a] px-2.5 py-0.5 rounded-full shadow-xs">
                    Theater Lounge & Wet Bars
                  </span>
                </div>

                <p className="text-xs text-[#6e6b63] font-normal leading-relaxed mb-4 line-clamp-2">
                  High-end finished basements with custom wet bar, home theater lounge, and soundproof insulation.
                </p>

                <div className="grid grid-cols-1 gap-1.5 text-[11px] font-medium text-[#1a1917] mb-5 border-t border-[#c9a53a]/20 pt-3">
                  {['Custom Wet Bar & Lounge', 'Home Theater Media Walls', 'Legal Basement Suites', 'Sub-Floor Thermal Insulation'].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-[#c9a53a] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedButton href="/services" variant="gold" rounded="rounded-full" className="w-full text-center py-2.5 text-xs">
                Explore Basements
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: BEFORE & AFTER SLIDERS (4 CANADIAN INTERIOR TRANSFORMATIONS) */}
      <section className="bg-[#f6f5f2] py-20 sm:py-28 border-y border-[#c9a53a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <ScrollReveal animation="fade-up">
            <BeforeAfterSlider
              beforeImage="/images/bath-before.jpg"
              afterImage="/images/bath-after.jpg"
              title="Bathroom Renovation Transformation"
              subtitle="Drag the brushed gold handle to reveal how we turn outdated bathrooms into spa retreats."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <BeforeAfterSlider
              beforeImage="/images/kitchen-before.jpg"
              afterImage="/images/kitchen-after.jpg"
              title="Kitchen Renovation Transformation"
              subtitle="Witness the total architectural transformation of dark kitchens into open luxury culinary spaces."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <BeforeAfterSlider
              beforeImage="/images/full-home-before.jpg"
              afterImage="/images/full-home-after.jpg"
              title="Full Home Renovation Transformation"
              subtitle="Experience complete Canadian interior remodeling from dated wood-paneled rooms to modern open luxury."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <BeforeAfterSlider
              beforeImage="/images/basement-before.jpg"
              afterImage="/images/basement-after.jpg"
              title="Basement Renovation Transformation"
              subtitle="See how dark unfinished stud basements transform into premier entertainment suites with wet bars."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: RENOVATION PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#faf8f5]">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center text-center my-2">
              <TypewriterHeading
                words={['Our 6-Step Renovation Process', 'Turnkey Canadian Craftsmanship']}
                as="h2"
                theme="light"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1a1917]"
              />
            </div>
            <p className="text-sm font-medium text-[#6e6b63] mt-2">
              A structured, stress-free renovation journey from initial space planning to final white-glove reveal.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeProcessStep === idx;

            return (
              <ScrollReveal key={step.num} animation="fade-up" delay={idx * 100}>
                <div
                  onMouseEnter={() => {
                    setUserHoveredProcess(true);
                    setActiveProcessStep(idx);
                  }}
                  onMouseLeave={() => setUserHoveredProcess(false)}
                  className={`rounded-3xl p-8 relative shadow-lg transition-all duration-700 cursor-pointer ${
                    isActive
                      ? 'bg-[#0f0e0c] text-white border border-[#c9a53a] scale-[1.03] shadow-luxury-hover z-20'
                      : 'bg-white text-[#1a1917] border border-[#c9a53a]/20 scale-[0.98] opacity-90 hover:opacity-100 z-10'
                  }`}
                >
                  <span
                    className={`text-5xl font-mono font-bold block mb-4 transition-colors duration-500 ${
                      isActive ? 'text-[#c9a53a] scale-105 origin-left' : 'text-[#c9a53a]/80'
                    }`}
                  >
                    {step.num}
                  </span>

                  <h3
                    className={`text-xl font-serif-heading font-bold mb-2 transition-colors ${
                      isActive ? 'text-white' : 'text-[#1a1917]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs font-normal leading-relaxed transition-colors ${
                      isActive ? 'text-gray-300' : 'text-[#6e6b63]'
                    }`}
                  >
                    {step.desc}
                  </p>

                  <div
                    className={`absolute top-4 right-4 p-2.5 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isActive
                        ? 'bg-[#c9a53a] text-[#0f0e0c] border-[#0f0e0c] scale-110 shadow-md'
                        : 'bg-[#faf8f5] text-[#c9a53a] border-[#c9a53a]/30'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: 3D BOOK TESTIMONIALS */}
      <section className="bg-[#f6f5f2] py-20 border-y border-[#c9a53a]/20">
        <ScrollReveal animation="fade-up">
          <BookTestimonials />
        </ScrollReveal>
      </section>

      {/* SECTION 6: HOVER FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal animation="fade-up">
          <HoverFaq />
        </ScrollReveal>
      </section>

      {/* SECTION 7: DYNAMIC GALLERY TEASER WITH REAL INSTAGRAM LINK BUTTON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center text-center my-2">
              <TypewriterHeading
                words={['Recent Canadian Renovations', 'Inspiration Gallery']}
                as="h2"
                theme="light"
                className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917]"
              />
            </div>
          </div>
        </ScrollReveal>

        <GalleryGrid limit={6} />

        {/* REAL INSTAGRAM LINK BUTTON WITH UNFILTERED INSTAGRAM LOGO */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#c9a53a] text-[#0f0e0c] hover:bg-[#0f0e0c] hover:text-[#c9a53a] px-8 py-4 rounded-full border border-[#c9a53a] font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl group"
          >
            {/* Real Colorful Instagram SVG Icon */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="btn-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path
                fill="url(#btn-insta-grad)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
            <span>View Complete Instagram Portfolio</span>
          </a>

          <AnimatedButton href="/gallery" variant="dark" rounded="rounded-full" className="px-8 py-4">
            Explore Website Gallery
          </AnimatedButton>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE SOLID */}
      <section className="bg-[#0f0e0c] text-white py-20 sm:py-28 border-t border-[#c9a53a]/25 bg-luxury-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-up">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white leading-tight">
                  Canadian Renovation Standards Built on Trust & Perfection.
                </h2>
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  With years of specialized experience in Canadian residential architecture, Solid Bath & Kitchen sets the gold standard for high-end interior transformations.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    { title: 'Turnkey Project Management', desc: 'Single point of contact from design to demolition, plumbing, electrical, and custom installation.' },
                    { title: 'Premium Material Sourcing', desc: 'High-grade quartz, solid hardwood, porcelain slabs, and European hardware.' },
                    { title: 'Fixed Price Guarantee', desc: 'Detailed, transparent contracts with zero hidden fees or mid-project markups.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4 p-5 bg-white/5 border border-[#c9a53a]/20 rounded-2xl">
                      <div className="p-2 bg-[#c9a53a] text-[#0f0e0c] font-bold text-xs mt-0.5 rounded-full flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-serif-heading">{item.title}</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <AnimatedButton href="/estimate" variant="gold" rounded="rounded-full">
                    Consult Our Interior Designers
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale">
              <div className="relative aspect-[4/3] border border-[#c9a53a]/40 rounded-3xl shadow-2xl overflow-hidden bg-[#0f0e0c]">
                <Image
                  src="/images/hero-kitchen.jpg"
                  alt="Solid Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
