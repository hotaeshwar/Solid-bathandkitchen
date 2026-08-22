'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavPill from './NavPill';
import AnimatedButton from './AnimatedButton';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Header({ onOpenEstimateModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSubmenuExpanded, setServicesSubmenuExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#c9a53a]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2 group py-1">
          <Image
            src="/logo.png"
            alt="Solid Bath & Kitchen"
            width={240}
            height={80}
            priority
            className="h-10 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV PILL (SERVICES WITH SUBMENU ONLY) */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavPill />
        </div>

        {/* HEADER RIGHT ACTION CTAS (PHONE NUMBER CLEAN TEXT - NO PILL BORDER) */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+14163000911"
            className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#1a1917] hover:text-[#c9a53a] transition-colors py-1"
          >
            <Phone className="w-4 h-4 text-[#c9a53a] flex-shrink-0" />
            <span>(416) 300-0911</span>
          </a>

          <AnimatedButton
            onClick={() => onOpenEstimateModal && onOpenEstimateModal({})}
            variant="gold"
            size="sm"
            rounded="rounded-full"
          >
            Get Free Estimate
          </AnimatedButton>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-[#0f0e0c] text-[#c9a53a] rounded-full border border-[#c9a53a]/40 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER NAVIGATION MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f0e0c] text-white border-b-2 border-b-[#c9a53a] px-4 pt-4 pb-8 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2 font-bold text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-[#c9a53a]"
            >
              Home
            </Link>

            {/* INTERACTIVE SERVICES ACCORDION FOR MOBILE & TABLETS */}
            <div className="rounded-2xl border border-[#c9a53a]/25 overflow-hidden">
              <button
                type="button"
                onClick={() => setServicesSubmenuExpanded(!servicesSubmenuExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
              >
                <span className="text-sm text-[#c9a53a]">Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 text-[#c9a53a] ${
                    servicesSubmenuExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesSubmenuExpanded && (
                <div className="pl-3 pr-2 py-2.5 space-y-1 text-xs border-l-2 border-[#c9a53a] ml-4 my-2 transition-all duration-300 animate-fade-in">
                  <Link
                    href="/bathrooms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-[#c9a53a] transition-colors"
                  >
                    <span className="font-semibold">Bathroom Renovation</span>
                    <span className="text-[10px] text-[#c9a53a] font-mono">Spa Suites</span>
                  </Link>
                  <Link
                    href="/kitchens"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-[#c9a53a] transition-colors"
                  >
                    <span className="font-semibold">Kitchen Renovation</span>
                    <span className="text-[10px] text-[#c9a53a] font-mono">Chef Islands</span>
                  </Link>
                  <Link
                    href="/services#full-home"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-[#c9a53a] transition-colors"
                  >
                    <span className="font-semibold">Full Home Renovation</span>
                    <span className="text-[10px] text-[#c9a53a] font-mono">Whole Interior</span>
                  </Link>
                  <Link
                    href="/services#basement-suite"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-[#c9a53a] transition-colors"
                  >
                    <span className="font-semibold">Basement Renovation</span>
                    <span className="text-[10px] text-[#c9a53a] font-mono">Wet Bar & Lounge</span>
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#c9a53a]/10 border border-[#c9a53a]/30 text-[#c9a53a] font-bold transition-colors mt-1"
                  >
                    <span>View All Services</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-[#c9a53a]"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-[#c9a53a]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-[#c9a53a]"
            >
              Contact
            </Link>
            <Link
              href="/estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-[#c9a53a]"
            >
              Estimator
            </Link>
          </div>

          <div className="pt-4 border-t border-[#c9a53a]/20 flex flex-col space-y-3">
            <a
              href="tel:+14163000911"
              className="flex items-center justify-center space-x-2 text-xs font-bold text-white bg-white/10 py-3 rounded-full border border-[#c9a53a]/30"
            >
              <Phone className="w-4 h-4 text-[#c9a53a]" />
              <span>Call (416) 300-0911</span>
            </a>

            <AnimatedButton
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimateModal && onOpenEstimateModal({});
              }}
              variant="gold"
              className="w-full text-center"
            >
              Get Free Estimate
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
}
