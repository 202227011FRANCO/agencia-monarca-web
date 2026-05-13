export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Fondo con imagen de viaje */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80')`,
        }}
      />
      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
          ✈️ Agencia de Viajes Monarca
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
          Tu próxima<br />
          <span className="text-yellow-400">aventura</span> te espera.
        </h1>
        <p className="text-lg text-blue-100 max-w-xl mb-10">
          Paquetes vacacionales a tu medida. Vuelos, hotel, traslados y experiencias únicas en un solo lugar.
        </p>

        {/* Buscador */}
        <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-3 max-w-2xl shadow-2xl">
          <input
            type="text"
            placeholder="🌍 ¿A dónde quieres ir?"
            className="flex-1 px-4 py-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          <input
            type="date"
            className="px-4 py-3 rounded-xl bg-gray-50 text-gray-500 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          <button className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap">
            Buscar viaje
          </button>
        </div>
      </div>
    </section>
  );
}