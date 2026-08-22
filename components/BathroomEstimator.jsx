'use client';

import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function BathroomEstimator({ onOpenModal }) {
  const [bathType, setBathType] = useState('ensuite'); // powder, guest, ensuite, master
  const [size, setSize] = useState('medium'); // small, medium, large, ultra
  const [finish, setFinish] = useState('luxury'); // standard, premium, luxury, bespoke
  const [features, setFeatures] = useState({
    walkInShower: true,
    freestandingTub: true,
    floatingVanity: true,
    heatedFloors: true,
    customLighting: false,
    smartToilet: false,
  });

  const toggleFeature = (key) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateEstimate = () => {
    let baseMin = 14000;
    let baseMax = 22000;

    if (bathType === 'powder') {
      baseMin = 9000;
      baseMax = 15000;
    } else if (bathType === 'ensuite') {
      baseMin = 18000;
      baseMax = 28000;
    } else if (bathType === 'master') {
      baseMin = 26000;
      baseMax = 42000;
    }

    if (size === 'small') {
      baseMin *= 0.85;
      baseMax *= 0.85;
    } else if (size === 'large') {
      baseMin *= 1.35;
      baseMax *= 1.35;
    } else if (size === 'ultra') {
      baseMin *= 1.75;
      baseMax *= 1.75;
    }

    if (finish === 'standard') {
      baseMin *= 0.9;
      baseMax *= 0.9;
    } else if (finish === 'luxury') {
      baseMin *= 1.25;
      baseMax *= 1.25;
    } else if (finish === 'bespoke') {
      baseMin *= 1.6;
      baseMax *= 1.6;
    }

    let featureAdditions = 0;
    if (features.walkInShower) featureAdditions += 3500;
    if (features.freestandingTub) featureAdditions += 4200;
    if (features.floatingVanity) featureAdditions += 2500;
    if (features.heatedFloors) featureAdditions += 1800;
    if (features.customLighting) featureAdditions += 1200;
    if (features.smartToilet) featureAdditions += 2200;

    const finalMin = Math.round((baseMin + featureAdditions) / 500) * 500;
    const finalMax = Math.round((baseMax + featureAdditions * 1.2) / 500) * 500;

    return {
      min: finalMin.toLocaleString('en-CA'),
      max: finalMax.toLocaleString('en-CA'),
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-[#faf8f5] border border-[#c9a53a]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative border-t-4 border-t-[#c9a53a] transition-all duration-300">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-[#c9a53a] text-[#0f0e0c] rounded-2xl shadow-sm">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-3 py-1 rounded-full inline-block border border-[#c9a53a]/30">
            Cost Calculator
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1a1917] mt-1">
            Bathroom Renovation Estimator
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Options Selection (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Bathroom Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              1. Bathroom Type
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'powder', label: 'Powder Room' },
                { id: 'guest', label: 'Guest Bathroom' },
                { id: 'ensuite', label: 'Ensuite Bath' },
                { id: 'master', label: 'Master Spa Suite' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBathType(item.id)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-full border transition-all duration-300 ${
                    bathType === item.id
                      ? 'border-[#c9a53a] bg-[#0f0e0c] text-[#c9a53a] shadow-md scale-[1.02]'
                      : 'border-gray-300 bg-white text-gray-800 hover:border-[#c9a53a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Room Size */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              2. Approximate Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'small', label: '< 50 sq ft' },
                { id: 'medium', label: '50-90 sq ft' },
                { id: 'large', label: '90-140 sq ft' },
                { id: 'ultra', label: '140+ sq ft' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSize(item.id)}
                  className={`px-3 py-2.5 text-xs font-bold rounded-full border text-center transition-all duration-300 ${
                    size === item.id
                      ? 'border-[#c9a53a] bg-[#0f0e0c] text-[#c9a53a] shadow-md scale-[1.02]'
                      : 'border-gray-300 bg-white text-gray-800 hover:border-[#c9a53a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Finish Level */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              3. Finish & Material Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', label: 'Contemporary' },
                { id: 'luxury', label: 'Solid Luxury' },
                { id: 'bespoke', label: 'Bespoke Custom' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFinish(item.id)}
                  className={`px-3 py-2.5 text-xs font-bold rounded-full border text-center transition-all duration-300 ${
                    finish === item.id
                      ? 'border-[#c9a53a] bg-[#0f0e0c] text-[#c9a53a] shadow-md scale-[1.02]'
                      : 'border-gray-300 bg-white text-gray-800 hover:border-[#c9a53a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Features Checkboxes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              4. Features & Upgrades
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { key: 'walkInShower', label: 'Walk-In Glass Shower' },
                { key: 'freestandingTub', label: 'Freestanding Soaker Tub' },
                { key: 'floatingVanity', label: 'Floating Double Vanity' },
                { key: 'heatedFloors', label: 'In-Floor Radiant Heating' },
                { key: 'customLighting', label: 'Architectural LED Lighting' },
                { key: 'smartToilet', label: 'Bidet / Smart Toilet' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleFeature(item.key)}
                  className={`flex items-center px-4 py-2.5 text-xs font-bold rounded-full border transition-all duration-300 ${
                    features[item.key]
                      ? 'border-[#c9a53a]/40 bg-white text-[#1a1917] shadow-xs'
                      : 'border-gray-200 bg-gray-50 text-gray-400 opacity-80'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 mr-2 flex-shrink-0 ${
                      features[item.key] ? 'text-[#c9a53a]' : 'text-gray-300'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Display Card (5 Columns) */}
        <div className="lg:col-span-5 bg-[#0f0e0c] text-white p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-[#c9a53a]/40 shadow-2xl relative">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#c9a53a] font-mono font-bold bg-white/10 px-3 py-1 rounded-full border border-[#c9a53a]/30">
              Estimated Investment Range
            </span>

            <div className="my-6">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-[#c9a53a] block">
                ${estimate.min} – ${estimate.max}
              </span>
              <span className="block text-xs font-mono text-gray-400 mt-2">
                CAD (Turnkey Labor & Materials)
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl mb-8">
              <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                * Estimated Price — Not a Final Quote. Final quote depends on site measurements and custom material selection.
              </p>
            </div>
          </div>

          <AnimatedButton
            onClick={() => onOpenModal && onOpenModal({ type: 'Bathroom', estimate: `$${estimate.min} - $${estimate.max}` })}
            variant="gold"
            rounded="rounded-full"
            className="w-full text-center"
          >
            Request Detailed Quote
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
