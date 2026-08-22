'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up', // fade-up, scale, blur
  delay = 0,
}) {
  const ref = useRef(null);
  // Default to visible initially if rendered on client in viewport to prevent initial blank flash
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return true; // Start visible on client to avoid flash on refresh
    }
    return false;
  });

  useEffect(() => {
    if (!ref.current) return;

    // Check position in viewport
    const rect = ref.current.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      setIsVisible(true);
      return;
    }

    // Set to false for offscreen elements so they animate when scrolled into view
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let animationClasses = 'opacity-0 translate-y-4';
  if (isVisible) {
    if (animation === 'scale') {
      animationClasses = 'opacity-100 scale-100';
    } else if (animation === 'blur') {
      animationClasses = 'opacity-100 blur-0 translate-y-0';
    } else {
      animationClasses = 'opacity-100 translate-y-0';
    }
  } else {
    if (animation === 'scale') {
      animationClasses = 'opacity-0 scale-[0.98]';
    } else if (animation === 'blur') {
      animationClasses = 'opacity-0 blur-xs translate-y-3';
    }
  }

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${animationClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
