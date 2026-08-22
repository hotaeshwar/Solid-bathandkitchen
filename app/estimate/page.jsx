'use client';

import React, { useState } from 'react';
import TypewriterHeading from '@/components/TypewriterHeading';
import BathroomEstimator from '@/components/BathroomEstimator';
import KitchenEstimator from '@/components/KitchenEstimator';

export default function EstimatePage({ onOpenEstimateModal }) {
  const [activeTab, setActiveTab] = useState('bathroom');

  return (
    <div className="space-y-16 pb-16 bg-[#faf8f5]">
      <section className="bg-[#0f0e0c] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 text-center bg-luxury-grid">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-white/10 px-4 py-1.5 rounded-full border border-[#c9a53a]/30">
            Interactive Cost Calculator
          </span>
          <TypewriterHeading
            words={['Get Your Renovation Estimate', 'Instant Price Range', 'Transparent Canadian Costing']}
            as="h1"
            className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
          />
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Configure your bathroom or kitchen renovation scope to calculate an instant estimated investment range.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek Pill Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#0f0e0c] border border-[#c9a53a]/40 rounded-full shadow-lg">
            <button
              onClick={() => setActiveTab('bathroom')}
              className={`px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeTab === 'bathroom'
                  ? 'bg-[#c9a53a] text-[#0f0e0c] shadow-md scale-[1.02]'
                  : 'bg-transparent text-white hover:text-[#c9a53a]'
              }`}
            >
              Bathroom Estimator
            </button>
            <button
              onClick={() => setActiveTab('kitchen')}
              className={`px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeTab === 'kitchen'
                  ? 'bg-[#c9a53a] text-[#0f0e0c] shadow-md scale-[1.02]'
                  : 'bg-transparent text-white hover:text-[#c9a53a]'
              }`}
            >
              Kitchen Estimator
            </button>
          </div>
        </div>

        {activeTab === 'bathroom' ? (
          <BathroomEstimator onOpenModal={onOpenEstimateModal} />
        ) : (
          <KitchenEstimator onOpenModal={onOpenEstimateModal} />
        )}
      </section>
    </div>
  );
}
