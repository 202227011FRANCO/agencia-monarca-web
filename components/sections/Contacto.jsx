export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Info izquierda */}
          <div>
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">
              📩 Contáctanos
            </p>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Déjanos tus datos y un asesor te contactará en menos de 24 horas para armar el viaje perfecto para ti.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-2xl">📞</span>
                <span>+52 55 5800 6768</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-2xl">📧</span>
                <span>monarcaagenciasdeviajes@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-2xl">📍</span>
                <span>Prol. Jose Maria Morelos, Amecameca de Juárez, Estado de México</span>
              </div>
            </div>
          </div>

          {/* Formulario derecha */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-blue-900 mb-1 block">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-blue-900 mb-1 block">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-blue-900 mb-1 block">¿A dónde quieres viajar?</label>
                <input
                  type="text"
                  placeholder="Destino de tu sueño"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-blue-900 mb-1 block">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos más sobre tu viaje ideal..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none"
                />
              </div>
              <button className="w-full bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors">
                Enviar mensaje ✈️
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}