'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';

const PortfolioGrid = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Portfolio items z data/projects.ts
  const portfolioItems = getAllProjects().map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    image: project.thumbnail,
    href: `/portfolio/${project.id}`,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Nasze Projekty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj naszą kolekcję wyjątkowych projektów wnętrz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden bg-gray-100 aspect-[4/3]"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredItem === item.id ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-40' : 'opacity-0'
                }`}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ${
                  hoveredItem === item.id
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>

              {/* View Icons */}
              <div
                className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                  hoveredItem === item.id
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
              >
                <button
                  className="bg-white/90 hover:bg-white text-black p-2 transition-colors"
                  aria-label="View larger"
                  onClick={(e) => {
                    e.preventDefault();
                    // Open lightbox
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </button>
                <button
                  className="bg-white/90 hover:bg-white text-black p-2 transition-colors"
                  aria-label="More details"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
