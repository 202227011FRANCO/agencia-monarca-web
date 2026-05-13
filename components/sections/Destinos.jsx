const destinos = [
  {
    nombre: "Cancún",
    pais: "México",
    precio: "desde $8,500",
    emoji: "🏖️",
    imagen: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600&q=80",
  },
  {
    nombre: "París",
    pais: "Francia",
    precio: "desde $28,000",
    emoji: "🗼",
    imagen: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=600&q=80",
  },
  {
    nombre: "Nueva York",
    pais: "Estados Unidos",
    precio: "desde $18,000",
    emoji: "🗽",
    imagen: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
  },
  {
    nombre: "Tokio",
    pais: "Japón",
    precio: "desde $35,000",
    emoji: "🏯",
    imagen: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
  },
  {
    nombre: "Roma",
    pais: "Italia",
    precio: "desde $25,000",
    emoji: "🏛️",
    imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
  },
  {
    nombre: "Bali",
    pais: "Indonesia",
    precio: "desde $22,000",
    emoji: "🌺",
    imagen: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
];

export default function Destinos() {
  return (
    <section id="paquetes" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">
          🌍 Explora el mundo
        </p>
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Destinos populares</h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          Los destinos más elegidos por nuestros viajeros. Precios por persona en paquete completo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((d) => (
            <div key={d.nombre} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={d.imagen}
                  alt={d.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                <span className="absolute top-4 right-4 text-2xl">{d.emoji}</span>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{d.nombre}</h3>
                  <p className="text-blue-200 text-sm">{d.pais}</p>
                </div>
              </div>
              <div className="bg-white px-5 py-4 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">{d.precio}</span>
                <button className="text-sm font-semibold text-blue-900 border border-blue-900 px-4 py-1.5 rounded-full hover:bg-blue-900 hover:text-white transition-colors">
                  Ver paquete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}