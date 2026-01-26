'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Skrýt projekt s id: 4 (Elegantní byt, Opava) - zůstává v systému, ale není zobrazen
  const hiddenProjectIds = [4];
  const realizaceProjects = [
    { id: 1, title: "Moderní rodinný dům", subtitle: "Čeladná", image: "https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg", category: "Projekty interiérů" },
    { id: 2, title: "Luxusní apartmán", subtitle: "Frýdlant nad Ostravicí", image: "https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg", category: "Projekty interiérů" },
    { id: 3, title: "Moderní byt", subtitle: "Ostrava", image: "https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg", category: "Projekty interiérů" },
    { id: 4, title: "Elegantní byt", subtitle: "Opava", image: "https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg", category: "Projekty interiérů" }
  ].filter(project => !hiddenProjectIds.includes(project.id));

  const navrhyProjects = [
    { id: 5, title: "Interiérový design", subtitle: "Brno", image: "/images/projects/project-5/image-001.jpg", category: "Návrhy" },
    { id: 6, title: "Interiérový design", subtitle: "Pardubice", image: "/images/projects/project-6/image-001.jpg", category: "Návrhy" },
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
    { id: 19, title: "Interiérový design", subtitle: "Praha", image: "/images/projects/project-19/image-001.jpg", category: "Návrhy" },
    { id: 20, title: "Interiérový design", subtitle: "Most", image: "/images/projects/project-20/image-001.jpg", category: "Návrhy" },
    { id: 21, title: "Interiérový design", subtitle: "Jihlava", image: "/images/projects/project-21/image-001.jpg", category: "Návrhy" },
    { id: 22, title: "Interiérový design", subtitle: "Vidče", image: "/images/projects/project-22/image-001.jpg", category: "Návrhy" },
    { id: 23, title: "Interiérový design", subtitle: "Vidče", image: "/images/projects/project-23/image-001.jpg", category: "Návrhy" }
  ];

  const heroImages = [
    "https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg",
    "https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10.jpg",
    "https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-30">
        <div className="relative w-full h-screen overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Portfolio Section */}
        <section id="portfolioGrid" className="py-20 bg-white">
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
                  <a
                    key={item.id}
                    href={`/portfolio-${item.id}.html`}
                    className="group relative overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer block"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{item.subtitle || ''}</p>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Návrhy */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Návrhy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navrhyProjects.map((item) => (
                  <a
                    key={item.id}
                    href={`/portfolio-${item.id}.html`}
                    className="group relative overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer block"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{item.subtitle || ''}</p>
                      <p className="text-sm text-gray-300">{item.category}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
