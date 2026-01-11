'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const realizaceProjects = [
    { id: 1, title: "Moderní rodinný dům", subtitle: "Čeladná", image: "https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg", category: "Projekty interiérů" },
    { id: 2, title: "Luxusní apartmán", subtitle: "Frýdlant nad Ostravicí", image: "https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg", category: "Projekty interiérů" },
    { id: 3, title: "Moderní byt", subtitle: "Ostrava", image: "https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg", category: "Projekty interiérů" },
    { id: 4, title: "Elegantní byt", subtitle: "Opava", image: "https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg", category: "Projekty interiérů" }
  ];

  const navrhyProjects = [
    { id: 5, title: "Interiérový design", subtitle: "Brno", image: "/images/projects/project-5/image-001.jpg", category: "Návrhy" },
    { id: 6, title: "Interiérový design", subtitle: "Pardubice", image: "/images/projects/project-6/image-001.jpg", category: "Návrhy" },
    { id: 7, title: "Interiérový design", subtitle: "Opava", image: "/images/projects/project-7/image-001.jpg", category: "Návrhy" },
    { id: 8, title: "Interiérový design", subtitle: "Ostrava", image: "/images/projects/project-8/image-001.jpg", category: "Návrhy" },
    { id: 9, title: "Interiérový design", subtitle: "Děčín", image: "/images/projects/project-9/image-001.jpg", category: "Návrhy" },
    { id: 10, title: "Interiérový design", subtitle: "Frýdek-Místek", image: "/images/projects/project-10/image-001.jpg", category: "Návrhy" },
    { id: 11, title: "Moderní byt", subtitle: "Bohumín", image: "/images/projects/project-11/image-001.jpg", category: "Návrhy" },
    { id: 12, title: "Luxusní byt", subtitle: "Praha 7", image: "/images/projects/project-12/image-001.jpg", category: "Návrhy" },
    { id: 13, title: "Elegantní byt", subtitle: "Únětice", image: "/images/projects/project-13/image-001.jpg", category: "Návrhy" },
    { id: 14, title: "Moderní bungalov", subtitle: "Pecerady", image: "/images/projects/project-14/image-001.jpg", category: "Návrhy" },
    { id: 15, title: "Jednopokojový byt", subtitle: "Pecerady", image: "/images/projects/project-15/image-001.jpg", category: "Návrhy" },
    { id: 16, title: "Byt 2+kk", subtitle: "Děčín", image: "/images/projects/project-16/image-001.jpg", category: "Návrhy" },
    { id: 17, title: "Rodinný dům", subtitle: "Frýdek-Místek", image: "/images/projects/project-17/image-001.jpg", category: "Návrhy" },
    { id: 18, title: "Interiérový design", subtitle: "Jihlava", image: "/images/projects/project-18/image-001.jpg", category: "Návrhy" },
    { id: 19, title: "Interiérový design", subtitle: "Frýdek-Místek", image: "/images/projects/project-19/image-001.jpg", category: "Návrhy" },
    { id: 20, title: "Interiérový design", subtitle: "Most", image: "/images/projects/project-20/image-001.jpg", category: "Návrhy" },
    { id: 21, title: "Interiérový design", subtitle: "Jihlava", image: "/images/projects/project-21/image-001.jpg", category: "Návrhy" },
    { id: 22, title: "Interiérový design", subtitle: "Kladno", image: "/images/projects/project-22/image-001.jpg", category: "Návrhy" },
    { id: 23, title: "Interiérový design", subtitle: "Kladno", image: "/images/projects/project-23/image-001.jpg", category: "Návrhy" }
  ];

  const heroImages = [
    "https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg",
    "https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10.jpg",
    "https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17.jpg",
    "https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.jpg" alt="Barakk" width={48} height={48} className="h-12 object-contain" />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-black text-sm font-medium">Home</Link>
              <a href="#portfolioGrid" className="text-gray-700 hover:text-black text-sm font-medium">Naše projekty</a>
              <Link href="/o-nas" className="text-gray-700 hover:text-black text-sm font-medium">O nás</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-black text-sm font-medium">Kontakt</Link>
            </nav>
            <button className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5" id="menuToggle">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-30">
        <div className="relative w-full h-screen overflow-hidden">
          <div 
            className="w-full h-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url(${heroImages[currentHeroIndex]})`,
              background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
            }}
          >
            <h1 className="text-6xl md:text-8xl font-light text-white drop-shadow-lg">Barakk studio</h1>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Portfolio Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Naše projekty</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Objevte naši kolekci výjimečných interiérových projektů</p>
            </div>
            
            {/* Realizace */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Realizace</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realizaceProjects.map((item) => (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.id}`}
                    className="group relative overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer block"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{item.subtitle || ''}</p>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Návrhy */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Návrhy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navrhyProjects.map((item) => (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.id}`}
                    className="group relative overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer block"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{item.subtitle || ''}</p>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
