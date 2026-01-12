import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ONas() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.2em] text-sm mb-4 text-gray-300">Studio</p>
              <h1 className="text-4xl md:text-5xl font-light mb-6">Navrhujeme interiéry a nábytek s důrazem na detail</h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Barakk je studio, které spojuje architekturu, interiérový design a autorský nábytek.
                V každém projektu hledáme rovnováhu mezi estetikou, funkčností a charakterem místa.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-gray-900">Náš přístup</h2>
              <p className="text-gray-700 leading-relaxed">
                Každý interiér stavíme na autentických materiálech, pečlivém řemesle a světle. Respektujeme původ
                prostoru a současně do něj vnášíme nadčasovost, která obstojí v čase.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Navrhujeme také autorský nábytek na míru, díky kterému propojujeme estetiku, ergonomii a dlouhou životnost.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Co děláme</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Návrhy interiérů rezidenčních i veřejných prostor</li>
                  <li>Autorský nábytek na míru</li>
                  <li>Kompletní autorský dozor nad realizací</li>
                  <li>Styling a art direction</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vybrané publikace</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <span>ELLE Decoration</span>
                  <span>Wallpaper*</span>
                  <span>AD</span>
                  <span>Design Milk</span>
                  <span>ArchDaily</span>
                  <span>Dezeen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-light text-gray-900">Tým</h2>
              <p className="text-gray-600 mt-3">Architekti, designéři a koordinátoři realizací</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Ing. Kristián Karas</h3>
                <p className="text-sm text-gray-500 mb-3">Zakladatel, hlavní designér</p>
                <p className="text-gray-700 text-sm leading-relaxed">Vede kreativu a směrování studia, od konceptu po finální realizaci.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Design tým</h3>
                <p className="text-sm text-gray-500 mb-3">Interiéry a nábytek</p>
                <p className="text-gray-700 text-sm leading-relaxed">Připravuje dispozice, materiálové řešení, vizualizace a autorský nábytek.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Realizační tým</h3>
                <p className="text-sm text-gray-500 mb-3">Koordinace a dozor</p>
                <p className="text-gray-700 text-sm leading-relaxed">Koordinuje řemesla, kvalitu provedení a plynulost harmonogramu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-light">Máte projekt? Ozvěte se.</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">Rádi s vámi projdeme zadání, rozpočet i termíny a navrhneme řešení na míru.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@barakk.cz" className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition">info@barakk.cz</a>
              <Link href="/kontakt" className="px-6 py-3 border border-white font-semibold hover:bg-white hover:text-black transition">Kontakt</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
