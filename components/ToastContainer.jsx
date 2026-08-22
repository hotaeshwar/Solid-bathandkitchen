'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function ToastContainer({ toast, onClose }) {
  if (!toast || !toast.message) return null;

  const isError = toast.type === 'error';

  return (
    <div className="fixed top-24 right-4 z-[110] max-w-sm w-full bg-[#faf8f5] border border-l-4 border-l-[#c9a53a] border-[#c9a53a]/30 shadow-2xl rounded-2xl p-4 transition-all duration-300 animate-fade-in-up">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          {isError ? (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-[#c9a53a] flex-shrink-0 mt-0.5" />
          )}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#1a1917]">
              {isError ? 'Notice' : 'Solid Notification'}
            </span>
            <p className="text-xs text-[#6e6b63] font-medium mt-0.5 leading-snug">
              {toast.message}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-[#1a1917] p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
