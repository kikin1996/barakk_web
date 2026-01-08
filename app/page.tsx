export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <span className="text-white text-2xl font-bold">K</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-black">Projekty wnętrz</a>
              <a href="#" className="text-gray-700 hover:text-black">Kolekcja dywanów</a>
              <a href="#" className="text-gray-700 hover:text-black">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="pt-20">
        <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white">Loft Kolasiński</h1>
        </div>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light mb-12 text-center">Nasze Projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Projekt {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
