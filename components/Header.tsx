'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    { name: 'Projekty wnętrz', href: '/projekty-wnetrz' },
    { name: 'Kolekcja dywanów', href: '/kolekcja-dywanow' },
    { name: 'Projekty mebli', href: '/projekty-mebli' },
    { name: 'Kolekcja Public Project', href: '/public-project' },
    { name: 'Archiwum projektów', href: '/archiwum' },
    { name: 'Video', href: '/video' },
    { name: 'Pracownia', href: '/pracownia' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Social Links */}
            <nav className="flex items-center space-x-4">
              <ul className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <Link
                      href={social.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <span className="text-sm font-medium">{social.name.charAt(0).toUpperCase()}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentLang('PL')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  currentLang === 'PL' ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                PL
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setCurrentLang('ENG')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  currentLang === 'ENG' ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <span className="text-white text-2xl font-bold">K</span>
              </div>
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

