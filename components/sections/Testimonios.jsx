const testimonios = [
  {
    nombre: "Ana García",
    destino: "Cancún, México",
    texto: "Increíble experiencia, todo perfectamente organizado. El hotel superó mis expectativas y el traslado fue puntual. ¡Ya estoy planeando mi próximo viaje con Monarca!",
    estrellas: 5,
    avatar: "AG",
  },
  {
    nombre: "Carlos Mendoza",
    destino: "París, Francia",
    texto: "Viajé con mi esposa a París para nuestro aniversario y fue mágico. El equipo de Monarca estuvo disponible en todo momento. 100% recomendados.",
    estrellas: 5,
    avatar: "CM",
  },
  {
    nombre: "Laura Torres",
    destino: "Tokio, Japón",
    texto: "Nunca pensé que viajar a Japón sería tan sencillo. Todo el papeleo, vuelos y hoteles los gestionó Monarca. Solo me preocupé por disfrutar.",
    estrellas: 5,
    avatar: "LT",
  },
];

export default function Testimonios() {
  return (
    <section id="nosotros" className="py-24 bg-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">
          💬 Lo que dicen nuestros viajeros
        </p>
        <h2 className="text-4xl font-bold text-white mb-16">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t) => (
            <div key={t.nombre} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(t.estrellas)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">"{t.texto}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-blue-900 font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.nombre}</p>
                  <p className="text-blue-300 text-xs">{t.destino}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}