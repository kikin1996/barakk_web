import Header from "@/components/Header";

export default function Kontakt() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[120px] min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-light mb-8">Kontakt</h1>
          <div className="space-y-4 text-left">
            <div>
              <h2 className="font-medium mb-2">Email</h2>
              <p className="text-gray-600">info@loft-kolasinski.pl</p>
            </div>
            <div>
              <h2 className="font-medium mb-2">Telefon</h2>
              <p className="text-gray-600">+48 XXX XXX XXX</p>
            </div>
            <div>
              <h2 className="font-medium mb-2">Adres</h2>
              <p className="text-gray-600">Warszawa, Polska</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

