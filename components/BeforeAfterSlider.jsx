'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = '/images/bath-before.jpg',
  afterImage = '/images/bath-after.jpg',
  beforeLabel = 'BEFORE RENOVATION',
  afterLabel = 'SOLID LUXURY AFTER',
  title = 'Bathroom Transformation',
  subtitle = 'Swipe or drag to witness the dramatic transformation',
  className = '',
}) {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const directionRef = useRef(1);
  const timeoutRef = useRef(null);

  const stepAutoAnimation = useCallback(() => {
    if (isInteracting) return;

    setSliderPos((prev) => {
      let next = prev + directionRef.current * 0.15;
      if (next >= 85) {
        directionRef.current = -1;
        next = 85;
      } else if (next <= 15) {
        directionRef.current = 1;
        next = 15;
      }
      return next;
    });

    animationRef.current = requestAnimationFrame(stepAutoAnimation);
  }, [isInteracting]);

  useEffect(() => {
    if (!isInteracting) {
      animationRef.current = requestAnimationFrame(stepAutoAnimation);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInteracting, stepAutoAnimation]);

  const handleTouchOrMouseStart = () => {
    setIsInteracting(true);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchOrMouseEnd = () => {
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  };

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isInteracting) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isInteracting || !e.touches[0]) return;
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="text-center mb-8">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-4 py-1.5 rounded-full mb-2 border border-[#c9a53a]/30">
            <Sparkles className="w-3.5 h-3.5 mr-2 text-[#c9a53a]" />
            Interactive Comparison
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1a1917]">
            {title}
          </h3>
          <p className="text-sm text-[#6e6b63] max-w-xl mx-auto mt-2">
            {subtitle}
          </p>
        </div>
      )}

      {/* Sleek External Badges Row (OUTSIDE IMAGE) */}
      <div className="flex items-center justify-between gap-2 mb-3 px-1">
        <span className="bg-[#faf8f5] border border-[#c9a53a]/30 text-[#1a1917] text-[10px] xs:text-xs font-bold tracking-wider sm:tracking-widest uppercase px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs whitespace-nowrap">
          {beforeLabel}
        </span>
        <span className="bg-[#0f0e0c] border border-[#c9a53a] text-[#c9a53a] text-[10px] xs:text-xs font-bold tracking-wider sm:tracking-widest uppercase px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs whitespace-nowrap">
          {afterLabel}
        </span>
      </div>

      {/* Main Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          handleTouchOrMouseStart();
          updatePosition(e.clientX);
        }}
        onMouseUp={handleTouchOrMouseEnd}
        onMouseLeave={handleTouchOrMouseEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          handleTouchOrMouseStart();
          if (e.touches[0]) updatePosition(e.touches[0].clientX);
        }}
        onTouchEnd={handleTouchOrMouseEnd}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[600px] overflow-hidden select-none border border-[#c9a53a]/30 rounded-2xl sm:rounded-3xl shadow-2xl cursor-ew-resize bg-[#0f0e0c]"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After Renovation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={beforeImage}
              alt="Before Renovation"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Vertical Gold Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-[#c9a53a] shadow-[0_0_15px_rgba(201,165,58,0.6)]"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Gold Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-[#c9a53a] border border-[#0f0e0c] rounded-full flex items-center justify-center shadow-2xl text-[#0f0e0c] hover:bg-[#0f0e0c] hover:text-[#c9a53a] hover:border-[#c9a53a] transition-all">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
