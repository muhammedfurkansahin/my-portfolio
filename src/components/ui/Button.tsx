'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

// Buton bileşeni için gereken tip tanımları
interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Buton bileşeni farklı stilleri ve boyutları destekler
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  external = false,
  type = 'button',
}: ButtonProps) {
  // Farklı varyantlar için CSS sınıfları
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-transparent',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent',
    outline: 'bg-transparent text-gray-900 hover:bg-gray-100 border border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent',
  };

  // Farklı boyutlar için CSS sınıfları
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2.5 px-5 text-lg',
  };

  // Temel buton stilleri ve aktif varyant/boyut stillerini birleştir
  const buttonStyles = twMerge(
    'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Eğer bir href özelliği sağlanmışsa Link bileşenini döndür
  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    
    return (
      <Link href={href} {...linkProps} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  // Aksi takdirde normal bir buton döndür
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 