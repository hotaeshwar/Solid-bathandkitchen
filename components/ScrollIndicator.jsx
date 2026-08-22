'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollIndicator({ totalSections = 6 }) {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      if (documentHeight <= 0) return;

      const progress = scrollPosition / documentHeight;
      const section = Math.min(
        totalSections,
        Math.max(1, Math.ceil(progress * totalSections))
      );
      
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const formattedCurrent = String(currentSection).padStart(2, '0');
  const formattedTotal = String(totalSections).padStart(2, '0');

  return (
    <div className="fixed bottom-6 left-4 lg:left-8 z-40 flex items-center space-x-2.5 bg-[#faf8f5]/95 backdrop-blur-md px-5 py-2.5 border border-[#c9a53a]/40 border-l-4 border-l-[#c9a53a] shadow-2xl rounded-full transition-all duration-500 hover:scale-105">
      <span className="w-2 h-2 rounded-full bg-[#c9a53a] animate-ping" />
      {/* Gold Active Section Number */}
      <span className="text-sm font-mono font-bold text-[#c9a53a] tracking-widest">
        {formattedCurrent}
      </span>
      <span className="text-xs font-mono text-gray-400">/</span>
      {/* Total Sections Number */}
      <span className="text-xs font-mono text-gray-600 font-bold">{formattedTotal}</span>
    </div>
  );
}
