'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Link from "next/link";

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      location: formData.get('location') as string,
      description: formData.get('description') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message || 'Formulář byl úspěšně odeslán. Děkujeme za váš zájem!' });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Došlo k chybě při odesílání formuláře' });
      }
    } catch (error) {
      console.error('Chyba při odesílání formuláře:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: 'Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu nebo nás kontaktujte přímo na info@barakk.cz.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <a href="mailto:info@barakk.cz" className="text-sm text-blue-100 underline">info@barakk.cz</a>
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

        {/* Form */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900">Napište nám</h2>
              <p className="text-gray-600 mt-2">Krátce popište projekt, rozměry, termín a rozpočet.</p>
            </div>
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-md ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}
            <form 
              className="grid grid-cols-1 md:grid-cols-2 gap-6" 
              onSubmit={handleSubmit}
            >
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení</label>
                <input type="text" name="name" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" placeholder="Jan Novák" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" placeholder="email@example.com" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input type="text" name="phone" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" placeholder="+420 123 456 789" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Lokalita projektu</label>
                <input type="text" name="location" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" placeholder="Praha / Brno / ..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Popis projektu</label>
                <textarea rows={5} name="description" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" placeholder="Rozsah, termín, rozpočet, styly…"></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat'}
                </button>
              </div>
            </form>
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
              <a href="mailto:info@barakk.cz" className="hover:text-white">info@barakk.cz</a>
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
