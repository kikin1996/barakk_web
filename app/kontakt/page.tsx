import Header from "@/components/Header";
import Link from "next/link";

export default function Kontakt() {

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px]">
        {/* Hero */}
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm mb-4 text-gray-300">Kontakt</p>
              <h1 className="text-4xl md:text-5xl font-light mb-6">Spojte se s námi</h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Pojďme si říct více o vašem projektu. Preferujeme osobní schůzku nebo videohovor,
                kde projdeme zadání, rozpočet a harmonogram.
              </p>
            </div>
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-lg p-6">
              <div>
                <p className="text-sm text-gray-400">Adresa studia</p>
                <p className="text-lg font-semibold">Ing. Kristián Karas</p>
                <p className="text-sm text-gray-200">tel. 777 726 001</p>
                <p className="text-sm text-gray-200">F. Čejky 450</p>
                <p className="text-sm text-gray-200">Frýdek-Místek</p>
                <p className="text-sm text-gray-200">738 01</p>
                <a href="mailto:kristian.karas22@gmail.com" className="text-sm text-blue-100 underline">kristian.karas22@gmail.com</a>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400">Sociální sítě</p>
                <div className="flex space-x-4 text-sm text-gray-200">
                  <a href="https://www.instagram.com/barakk.cz/" className="hover:text-white">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Map / office */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900">Kde pracujeme</h3>
              <p className="text-gray-700 leading-relaxed">
                Realizujeme projekty po celé Evropě. Pro schůzky využíváme studio v Polsku,
                online meetingy a při větších projektech i onsite workshop.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Potřebujete konzultaci? Napište nám a domluvíme termín.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <iframe
                title="Mapa F. Čejky 450, Frýdek-Místek"
                src="https://www.google.com/maps?q=F.+%C4%8Cejky+450+Fr%C3%BDdek-M%C3%ADstek&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={(e) => {
                  console.error('Chyba při načítání mapy:', e);
                }}
                onLoad={() => {
                  // Map loaded successfully
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Menu</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-200">
              <Link href="/#portfolioGrid" className="hover:text-white">Naše projekty</Link>
              <Link href="/o-nas" className="hover:text-white">O nás</Link>
              <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Kontakt</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              F. Čejky 450<br />
              Frýdek-Místek<br />
              738 01<br />
              <a href="mailto:kristian.karas22@gmail.com" className="hover:text-white">kristian.karas22@gmail.com</a>
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Sledujte nás</h3>
            <div className="flex space-x-4 text-sm text-gray-200">
              <a href="https://www.instagram.com/barakk.cz/" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
            <span>© 2026 Barakk.cz</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Zásady ochrany soukromí</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
