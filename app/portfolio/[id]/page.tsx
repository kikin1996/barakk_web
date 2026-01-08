import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { getProjectById, getAllProjects } from '@/data/projects';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px]">
        {/* Hero Image */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-light mb-4">{project.title}</h1>
              {project.location && (
                <p className="text-xl">{project.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-black transition-colors inline-flex items-center mb-8"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Powrót do projektów
              </Link>
              
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
                <span className="px-4 py-2 bg-gray-100 rounded">{project.category}</span>
                {project.location && (
                  <span className="px-4 py-2 bg-gray-100 rounded">{project.location}</span>
                )}
                {project.year && (
                  <span className="px-4 py-2 bg-gray-100 rounded">{project.year}</span>
                )}
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light mb-8 text-center">Galeria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Obraz ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Zobacz wszystkie projekty
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

