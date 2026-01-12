'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('PL');

  const socialLinks = [
    { name: 'facebook', href: '#' },
    { name: 'pinterest', href: '#' },
    { name: 'linkedin', href: '#' },
    { name: 'youtube', href: '#' },
    { name: 'instagram', href: '#' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Naše projekty', href: '/#portfolioGrid' },
    { name: 'O nás', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <nav className="flex items-center space-x-4 text-gray-600">
              <a href="https://www.instagram.com/barakk.cz/" className="hover:text-gray-900" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0-2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm5 7.6A3.4 3.4 0 1 0 15.4 13 3.41 3.41 0 0 0 12 9.6Zm0-2A5.4 5.4 0 1 1 6.6 13 5.4 5.4 0 0 1 12 7.6Zm4.75-1.85a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05Z"/></svg>
              </a>
            </nav>
            <div className="flex items-center space-x-2"></div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.jpg" alt="Barakk" width={120} height={60} className="h-16 md:h-20 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="relative">
              <input
                type="text"
                placeholder="Szukaj..."
                className="w-full px-4 py-4 text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-black"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-4 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[120px]" />
    </>
  );
};

export default Header;

