'use client';

import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { ChefHat, CheckCircle2 } from 'lucide-react';

export default function KitchenEstimator({ onOpenModal }) {
  const [size, setSize] = useState('medium'); // small, medium, large, open
  const [cabinetType, setCabinetType] = useState('custom'); // stock, semi, custom, architectural
  const [countertop, setCountertop] = useState('quartz'); // laminate, quartz, marble, porcelain
  const [finish, setFinish] = useState('luxury');
  const [features, setFeatures] = useState({
    waterfallIsland: true,
    customPantry: true,
    designerLighting: true,
    highEndBacksplash: true,
    applianceInstallation: true,
    potFiller: false,
  });

  const toggleFeature = (key) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateEstimate = () => {
    let baseMin = 25000;
    let baseMax = 40000;

    if (size === 'small') {
      baseMin = 18000;
      baseMax = 30000;
    } else if (size === 'large') {
      baseMin = 35000;
      baseMax = 55000;
    } else if (size === 'open') {
      baseMin = 48000;
      baseMax = 75000;
    }

    if (cabinetType === 'semi') {
      baseMin *= 1.1;
      baseMax *= 1.1;
    } else if (cabinetType === 'custom') {
      baseMin *= 1.35;
      baseMax *= 1.35;
    } else if (cabinetType === 'architectural') {
      baseMin *= 1.7;
      baseMax *= 1.7;
    }

    if (countertop === 'marble') {
      baseMin += 4500;
      baseMax += 7000;
    } else if (countertop === 'porcelain') {
      baseMin += 6000;
      baseMax += 9000;
    }

    let featureAdditions = 0;
    if (features.waterfallIsland) featureAdditions += 5000;
    if (features.customPantry) featureAdditions += 3200;
    if (features.designerLighting) featureAdditions += 1800;
    if (features.highEndBacksplash) featureAdditions += 2400;
    if (features.applianceInstallation) featureAdditions += 2000;
    if (features.potFiller) featureAdditions += 1500;

    const finalMin = Math.round((baseMin + featureAdditions) / 1000) * 1000;
    const finalMax = Math.round((baseMax + featureAdditions * 1.2) / 1000) * 1000;

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
          <ChefHat className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-3 py-1 rounded-full inline-block border border-[#c9a53a]/30">
            Cost Calculator
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1a1917] mt-1">
            Kitchen Renovation Estimator
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Options Selection (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Kitchen Size */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              1. Kitchen Layout / Size
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'small', label: 'Compact / Condo' },
                { id: 'medium', label: 'Standard Single Home' },
                { id: 'large', label: 'Spacious Open Layout' },
                { id: 'open', label: 'Grand Estate Kitchen' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSize(item.id)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-full border transition-all duration-300 ${
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

          {/* 2. Cabinetry Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              2. Custom Cabinetry Grade
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'semi', label: 'Semi-Custom' },
                { id: 'custom', label: 'Solid Custom' },
                { id: 'architectural', label: 'Bespoke Millwork' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCabinetType(item.id)}
                  className={`px-3 py-2.5 text-xs font-bold rounded-full border text-center transition-all duration-300 ${
                    cabinetType === item.id
                      ? 'border-[#c9a53a] bg-[#0f0e0c] text-[#c9a53a] shadow-md scale-[1.02]'
                      : 'border-gray-300 bg-white text-gray-800 hover:border-[#c9a53a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Countertop Material */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              3. Countertop Surface
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'quartz', label: 'Engineered Quartz' },
                { id: 'marble', label: 'Calacatta Marble' },
                { id: 'porcelain', label: 'Large Slab' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCountertop(item.id)}
                  className={`px-3 py-2.5 text-xs font-bold rounded-full border text-center transition-all duration-300 ${
                    countertop === item.id
                      ? 'border-[#c9a53a] bg-[#0f0e0c] text-[#c9a53a] shadow-md scale-[1.02]'
                      : 'border-gray-300 bg-white text-gray-800 hover:border-[#c9a53a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Kitchen Features */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-2.5">
              4. Premium Features & Appliances
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { key: 'waterfallIsland', label: 'Waterfall Marble Island' },
                { key: 'customPantry', label: 'Custom Walk-In Pantry' },
                { key: 'designerLighting', label: 'Linear LED Lighting' },
                { key: 'highEndBacksplash', label: 'Full Slab Backsplash' },
                { key: 'applianceInstallation', label: 'Appliance Fitting' },
                { key: 'potFiller', label: 'Brass Pot Filler Faucet' },
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

        {/* Output Card (5 Columns) */}
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
                CAD (Cabinetry, Surfaces & Turnkey Labor)
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl mb-8">
              <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                * Estimated Price — Not a Final Quote. Final quote depends on site measurements and custom millwork choices.
              </p>
            </div>
          </div>

          <AnimatedButton
            onClick={() => onOpenModal && onOpenModal({ type: 'Kitchen', estimate: `$${estimate.min} - $${estimate.max}` })}
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
