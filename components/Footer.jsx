'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';
import { Phone, Mail, MapPin, Award, Clock } from 'lucide-react';

export default function Footer({ onOpenEstimateModal }) {
  const whatsappUrl = `https://wa.me/14163000911?text=${encodeURIComponent(
    'Hello Solid Bath & Kitchen, I would like to discuss a renovation project.'
  )}`;

  const instagramUrl =
    'https://www.instagram.com/solid_bathandkitchen?igsh=MXE2ZnJoMTk5cWZnZA%3D%3D';

  return (
    <footer className="bg-[#0f0e0c] text-white relative border-t-2 border-t-[#c9a53a] pt-16 pb-12 overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c9a53a]/5 rounded-full blur-3xl pointer-events-none" />

      {/* SLEEK FOOTER CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#c9a53a]/20 pb-16">
        <div className="bg-[#faf8f5] text-[#1a1917] p-8 sm:p-12 lg:p-14 rounded-3xl border border-[#c9a53a]/40 border-t-4 border-t-[#c9a53a] shadow-2xl relative flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(201,165,58,0.2)]">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1a1917] tracking-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#6e6b63] mt-3 leading-relaxed">
              Elevate your home with Canada’s premier bathroom and kitchen interior design specialists. Contact our master craftsmen today for an in-home architectural consultation and custom estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <AnimatedButton
              href="/estimate"
              variant="gold"
              rounded="rounded-full"
              className="w-full sm:w-auto text-center"
            >
              Get Your Free Estimate
            </AnimatedButton>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <AnimatedButton
                variant="dark"
                rounded="rounded-full"
                className="w-full sm:w-auto text-center"
              >
                WhatsApp Us
              </AnimatedButton>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Info & Real Instagram Button */}
        <div className="space-y-4">
          <Link href="/" className="inline-block py-1">
            <Image
              src="/logo.png"
              alt="Solid Bath & Kitchen"
              width={260}
              height={90}
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-md"
            />
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed font-normal">
            Solid Bath & Kitchen delivers bespoke Canadian bathroom and kitchen interior renovations. Crafted with precision, luxury materials, and timeless sophistication.
          </p>

          {/* REAL INSTAGRAM LINK BUTTON (UNFILTERED LOGO) */}
          <div className="pt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-white/10 hover:bg-white/20 border border-[#c9a53a]/30 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300 shadow-md group"
            >
              {/* Real Colorful Instagram SVG Icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="footer-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#footer-insta-grad)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              <span>Follow @solid_bathandkitchen</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 pt-2 text-xs text-[#c9a53a]">
            <Award className="w-4 h-4" />
            <span className="font-semibold">Licensed & Insured Canadian Contractor</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#c9a53a] mb-4 border-b border-[#c9a53a]/30 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Bathroom Renovation', href: '/bathrooms' },
              { label: 'Kitchen Renovation', href: '/kitchens' },
              { label: 'Our Services', href: '/services' },
              { label: 'Project Gallery', href: '/gallery' },
              { label: 'About Solid', href: '/about' },
              { label: 'Instant Estimator', href: '/estimate' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link inline-block py-1 text-gray-300 hover:text-[#c9a53a]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services Showcase */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#c9a53a] mb-4 border-b border-[#c9a53a]/30 pb-2">
            Renovation Services
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>Spa Master Bathrooms</li>
            <li>Frameless Glass Walk-in Showers</li>
            <li>Custom Floating Vanities</li>
            <li>Custom Kitchen Islands & Millwork</li>
            <li>Quartz & Marble Waterfall Slabs</li>
            <li>Architectural Lighting & Fixtures</li>
            <li>In-Floor Radiant Heating</li>
          </ul>
        </div>

        {/* Column 4: Contact Details & Social */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#c9a53a] mb-4 border-b border-[#c9a53a]/30 pb-2">
            Direct Contact
          </h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#c9a53a] flex-shrink-0 mt-0.5" />
              <span>Toronto & GTA, Ontario, Canada</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#c9a53a] flex-shrink-0" />
              <a href="tel:+14163000911" className="hover:text-[#c9a53a] font-semibold">
                +1 (416) 300-0911
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#c9a53a] flex-shrink-0" />
              <a
                href="mailto:solidbathandkitchen@gmail.com"
                className="hover:text-[#c9a53a] font-semibold"
              >
                solidbathandkitchen@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3 pt-2 text-[#c9a53a]">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 8:00 AM – 7:00 PM EST</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#c9a53a]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Solid Bath & Kitchen. All Rights Reserved. Canadian Interior Design & Renovation.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="/contact" className="hover:text-[#c9a53a]">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-[#c9a53a]">
            Terms of Service
          </Link>
          <Link href="/sitemap.xml" className="hover:text-[#c9a53a]">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
