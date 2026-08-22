'use client';

import React, { useState, useEffect } from 'react';

export default function TypewriterHeading({
  words = [],
  staticPrefix = '',
  staticSuffix = '',
  className = '',
  theme = 'dark',
  textColor = '',
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2200,
  as = 'h2'
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[index];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex === currentWord.length) {
        setIsPaused(true);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, index, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

  const Tag = as;
  const currentText = words[index]
    ? words[index].substring(0, subIndex)
    : '';

  const isDark = theme === 'dark';
  const textClass = textColor || (isDark ? 'text-white' : 'text-[#1a1917]');

  return (
    <div className="w-full max-w-full flex items-center justify-center text-center select-none py-1 min-h-[3.2rem] sm:min-h-[4.5rem]">
      <Tag className={`font-serif-heading font-semibold tracking-tight leading-tight flex items-center justify-center flex-wrap ${className}`}>
        {staticPrefix && (
          <span className={`mr-1.5 sm:mr-2 ${isDark ? 'text-white' : 'text-[#1a1917]'}`}>
            {staticPrefix}
          </span>
        )}
        <span
          className={`inline-block border-b-2 sm:border-b-4 border-[#c9a53a] pb-0.5 sm:pb-1 transition-colors leading-tight font-serif-heading font-bold typewriter-text ${textClass}`}
        >
          {currentText}
          <span className="typewriter-cursor" aria-hidden="true" />
        </span>
        {staticSuffix && (
          <span className={`ml-1.5 sm:ml-2 ${isDark ? 'text-white' : 'text-[#1a1917]'}`}>
            {staticSuffix}
          </span>
        )}
      </Tag>
    </div>
  );
}
