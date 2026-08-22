'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [dismissed, setDismissed] = useState(false);

  const phone = '14163000911';
  const text = encodeURIComponent(
    'Hello Solid Bath & Kitchen, I would like to discuss a bathroom/kitchen renovation project and get an estimate.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end space-x-3">
      {/* Small static message box with ONLY Brand Logo (No CHAT LIVE tag) */}
      {!dismissed && (
        <div className="hidden sm:flex items-start bg-[#faf8f5] border border-[#c9a53a]/40 p-4 rounded-2xl shadow-2xl max-w-xs relative text-left">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-[#1a1917] p-1 transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="pr-4">
            {/* ONLY Brand Logo */}
            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="Solid Bath & Kitchen Logo"
                width={150}
                height={45}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-semibold text-[#1a1917] leading-snug">
              Need help with your renovation? Chat with us on WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* STATIC WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border border-[#0f0e0c] flex-shrink-0"
        aria-label="Chat on WhatsApp"
      >
        {/* Real Static WhatsApp Icon SVG */}
        <svg
          className="w-8 h-8 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2c-5.514 0-9.996 4.477-9.996 9.988 0 1.76.459 3.475 1.33 4.985l-1.413 5.163 5.286-1.385c1.455.794 3.09 1.226 4.791 1.226 5.514 0 9.996-4.478 9.996-9.989 0-5.511-4.482-9.988-9.994-9.988zm0 18.318c-1.558 0-3.085-.418-4.417-1.211l-.317-.189-3.284.86.876-3.2-.206-.328c-.875-1.393-1.338-3.003-1.338-4.654 0-4.61 3.754-8.36 8.367-8.36 4.611 0 8.364 3.75 8.364 8.36 0 4.611-3.753 8.362-8.366 8.362zm4.587-6.262c-.252-.126-1.488-.734-1.719-.818-.231-.084-.399-.126-.567.126-.168.252-.651.818-.798.986-.147.168-.294.189-.546.063-.252-.126-1.063-.392-2.024-1.249-.747-.665-1.251-1.486-1.398-1.738-.147-.252-.016-.388.11-.514.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.365-.777-1.869-.204-.492-.411-.426-.567-.434-.147-.008-.315-.008-.483-.008-.168 0-.441.063-.672.315-.231.252-.882.861-.882 2.1 0 1.239.903 2.436 1.029 2.604.126.168 1.777 2.713 4.305 3.805.602.26 1.072.415 1.439.531.605.192 1.156.165 1.591.1.485-.072 1.488-.609 1.698-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
        </svg>
      </a>
    </div>
  );
}
