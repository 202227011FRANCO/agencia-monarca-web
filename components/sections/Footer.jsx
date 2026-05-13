export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="40" rx="22" ry="14" fill="#F59E0B" transform="rotate(-30 30 40)"/>
            <ellipse cx="30" cy="60" rx="16" ry="10" fill="#D97706" transform="rotate(20 30 60)"/>
            <ellipse cx="70" cy="40" rx="22" ry="14" fill="#F59E0B" transform="rotate(30 70 40)"/>
            <ellipse cx="70" cy="60" rx="16" ry="10" fill="#D97706" transform="rotate(-20 70 60)"/>
            <ellipse cx="50" cy="50" rx="5" ry="18" fill="white"/>
            <line x1="50" y1="32" x2="42" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="50" y1="32" x2="58" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white font-bold text-lg">
            Monarca<span className="text-yellow-400">.</span>
          </span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Agencia de Viajes Monarca. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-sm">
          <a href="#paquetes" className="hover:text-yellow-400 transition-colors">Paquetes</a>
          <a href="#nosotros" className="hover:text-yellow-400 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-yellow-400 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}