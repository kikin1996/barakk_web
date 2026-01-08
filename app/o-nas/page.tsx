import Header from "@/components/Header";

export default function ONas() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[120px] min-h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-light mb-8">O nas</h1>
          <p className="text-gray-600 leading-relaxed">
            Loft Kolasiński to pracownia projektowa specjalizująca się w 
            projektowaniu wnętrz i mebli. Tworzymy przestrzenie, które łączą 
            funkcjonalność z estetyką, dbając o każdy detal.
          </p>
        </div>
      </div>
    </main>
  );
}

