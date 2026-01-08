import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-light mb-4">Projekt nie został znaleziony</h1>
          <p className="text-gray-600 mb-8">Przepraszamy, ale projekt o podanym ID nie istnieje.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Powrót do projektów
          </Link>
        </div>
      </div>
    </main>
  );
}

