'use client';

import React from 'react';
import Link from 'next/link';

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'gold', // 'gold' or 'dark' or 'outline'
  size = 'md',
  className = '',
  type = 'button',
  rounded = 'rounded-full', // Sleek rounded pill default
  ...props
}) {
  const baseStyles =
    'btn-parting inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 select-none shadow-md whitespace-nowrap border';

  const variantStyles = {
    gold: 'bg-[#c9a53a] text-[#0f0e0c] border-[#c9a53a] hover:bg-[#0f0e0c] hover:text-[#c9a53a] hover:border-[#c9a53a] hover:shadow-[0_0_20px_rgba(201,165,58,0.35)]',
    dark: 'bg-[#0f0e0c] text-white border-[#c9a53a]/40 hover:bg-[#c9a53a] hover:text-[#0f0e0c] hover:border-[#c9a53a] hover:shadow-[0_0_20px_rgba(201,165,58,0.35)]',
    outline: 'bg-transparent text-[#0f0e0c] border-[#c9a53a] hover:bg-[#c9a53a] hover:text-[#0f0e0c]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2 space-x-1.5',
    md: 'text-xs sm:text-sm px-6 py-3 space-x-2',
    lg: 'text-xs sm:text-base px-8 py-3.5 space-x-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${rounded} ${className}`;

  const content = (
    <>
      <span className="part-left inline-block text-[#c9a53a] group-hover:text-current font-mono">‹</span>
      <span className="truncate">{children}</span>
      <span className="part-right inline-block text-[#c9a53a] group-hover:text-current font-mono">›</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
