'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({
  isOpen,
  onClose,
  service,
}) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0e0c]/85 backdrop-blur-md animate-fade-in">
      <div
        className="bg-[#faf8f5] border border-[#c9a53a]/40 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative border-t-4 border-t-[#c9a53a] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#0f0e0c] text-[#c9a53a] hover:bg-[#c9a53a] hover:text-[#0f0e0c] p-2 rounded-full border border-[#c9a53a]/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Service Image */}
          {service.image && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#c9a53a]/30 bg-[#0f0e0c] shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Title & Description */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-[#0f0e0c] px-3.5 py-1 rounded-full inline-block border border-[#c9a53a]/30">
              {service.category || 'Specialized Renovation'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1a1917]">
              {service.title}
            </h3>
            <p className="text-sm text-[#6e6b63] font-medium leading-relaxed pt-2">
              {service.desc}
            </p>
          </div>

          {/* Included Features Checklist */}
          {service.features && service.features.length > 0 && (
            <div className="bg-white border border-[#c9a53a]/20 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1917] flex items-center">
                <Sparkles className="w-4 h-4 text-[#c9a53a] mr-1.5" />
                What's Included in This Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-[#1a1917]">
                {service.features.map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a53a] mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sleek Close Action */}
          <div className="pt-2 flex justify-end border-t border-[#c9a53a]/20">
            <button
              onClick={onClose}
              className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0f0e0c] bg-[#c9a53a] hover:bg-[#0f0e0c] hover:text-[#c9a53a] rounded-full border border-[#c9a53a] transition-all shadow-md"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
