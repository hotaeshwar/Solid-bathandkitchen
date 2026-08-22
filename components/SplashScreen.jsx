'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen on every page load for 2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsVisible(false);
              if (onComplete) onComplete();
            }, 600);
          }, 150);
          return 100;
        }
        return prev + 5; // 20 steps * 60ms = 1200ms progress + 600ms fade = ~2 seconds total
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0e0c] text-white transition-opacity duration-700 ease-in-out select-none px-4 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#c9a53a]/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative flex flex-col items-center max-w-lg w-full text-center space-y-8 z-10">
        {/* LARGE LOGO WITH GOLDEN AURA GLOW */}
        <div className="relative transform transition-transform duration-1000 hover:scale-105">
          <div className="absolute -inset-4 bg-[#c9a53a]/20 rounded-3xl blur-xl" />
          <Image
            src="/logo.png"
            alt="Solid Bath & Kitchen"
            width={380}
            height={130}
            priority
            className="relative h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_0_35px_rgba(201,165,58,0.8)]"
          />
        </div>

        {/* SUBTITLE TAGLINE */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#c9a53a]">
            Canadian Luxury Interior Renovations
          </p>
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium tracking-widest">
            Bespoke Bathrooms & Chef Kitchens
          </p>
        </div>

        {/* BUFFER SPINNER & CIRCULAR PROGRESS ANIMATION */}
        <div className="relative flex items-center justify-center my-4">
          {/* Rotating Outer Gold Buffer Ring */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-800 border-t-[#c9a53a] border-r-[#c9a53a] animate-spin" />
          
          {/* Inner Percentage Counter */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wider">
              {progress}%
            </span>
          </div>
        </div>

        {/* LINEAR PROGRESS BAR */}
        <div className="w-56 sm:w-72 h-2 bg-gray-900 border border-gray-800 rounded-full overflow-hidden shadow-inner p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#c9a53a] via-[#e8d595] to-[#c9a53a] rounded-full transition-all duration-150 ease-out shadow-[0_0_15px_#c9a53a]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
