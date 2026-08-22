'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    hasSubmenu: true,
    subItems: [
      {
        title: 'Bathroom Renovation',
        desc: 'Spa walk-in showers, floating vanities & marble tiling.',
        href: '/bathrooms',
      },
      {
        title: 'Kitchen Renovation',
        desc: 'Waterfall quartz islands, custom millwork & open concept.',
        href: '/kitchens',
      },
      {
        title: 'Full Home Renovation',
        desc: 'Open-concept redesigns, hardwood floors & fireplace.',
        href: '/services#full-home',
      },
      {
        title: 'Basement Renovation',
        desc: 'Finished suites, home theaters & custom wet bars.',
        href: '/services#basement-suite',
      },
      {
        title: 'All Specialized Services',
        desc: 'View our complete suite of Canadian renovation services.',
        href: '/services',
      },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Estimator', href: '/estimate' },
];

export default function NavPill() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center bg-[#0f0e0c]/90 backdrop-blur-md p-1.5 rounded-full border border-[#c9a53a]/30 shadow-xl">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));

        if (item.hasSubmenu) {
          return (
            <div
              key={item.name}
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`relative px-4 py-2 text-xs font-bold transition-all duration-300 rounded-full flex items-center space-x-1 focus:outline-none ${
                  isActive
                    ? 'text-[#0f0e0c] bg-[#c9a53a] shadow-sm'
                    : 'text-white hover:text-[#c9a53a]'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180 text-[#c9a53a]' : ''
                  }`}
                />
              </button>

              {/* SERVICES SUBMENU DROPDOWN */}
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-[#faf8f5] border border-[#c9a53a]/30 rounded-2xl shadow-2xl p-2.5 z-50 animate-fade-in border-t-2 border-t-[#c9a53a]"
                >
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0f0e0c] bg-[#c9a53a] px-3 py-1 rounded-xl mb-2 text-center">
                    Renovation Services Menu
                  </div>

                  <div className="space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block p-2.5 rounded-xl hover:bg-[#0f0e0c] hover:text-[#c9a53a] transition-colors text-left group"
                      >
                        <div className="text-xs font-bold text-[#1a1917] group-hover:text-[#c9a53a]">
                          {sub.title}
                        </div>
                        <div className="text-[10px] text-[#6e6b63] group-hover:text-gray-300 mt-0.5 leading-snug">
                          {sub.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative px-4 py-2 text-xs font-bold transition-all duration-300 rounded-full ${
              isActive
                ? 'text-[#0f0e0c] bg-[#c9a53a] shadow-sm'
                : 'text-white hover:text-[#c9a53a]'
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
