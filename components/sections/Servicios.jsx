const paquetes = [
  { icon: "✈️", titulo: "Vuelos", desc: "Conseguimos los mejores precios en vuelos nacionales e internacionales." },
  { icon: "🏨", titulo: "Hoteles", desc: "Hospedaje seleccionado para todos los presupuestos y destinos." },
  { icon: "🗺️", titulo: "Paquetes todo incluido", desc: "Vuelo, hotel y traslados en un solo paquete sin complicaciones." },
  { icon: "🤝", titulo: "Asesoría personalizada", desc: "Un asesor dedicado te acompaña desde la planeación hasta tu regreso." },
];

export default function Servicios() {
  return (
    <section id="paquetes" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">Lo que ofrecemos</p>
        <h2 className="text-4xl font-bold text-blue-900 mb-16">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paquetes.map((s) => (
            <div key={s.titulo} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-bold text-blue-900 mb-2">{s.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}