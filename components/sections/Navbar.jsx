export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="40" rx="22" ry="14" fill="#F59E0B" transform="rotate(-30 30 40)"/>
            <ellipse cx="30" cy="60" rx="16" ry="10" fill="#D97706" transform="rotate(20 30 60)"/>
            <ellipse cx="70" cy="40" rx="22" ry="14" fill="#F59E0B" transform="rotate(30 70 40)"/>
            <ellipse cx="70" cy="60" rx="16" ry="10" fill="#D97706" transform="rotate(-20 70 60)"/>
            <ellipse cx="50" cy="50" rx="5" ry="18" fill="#1E3A5F"/>
            <line x1="50" y1="32" x2="42" y2="22" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="50" y1="32" x2="58" y2="22" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-blue-900">
            Monarca<span className="text-yellow-500">.</span>
          </span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm text-blue-900 font-medium">
          <li><a href="#paquetes" className="hover:text-yellow-500 transition-colors">Paquetes</a></li>
          <li><a href="#nosotros" className="hover:text-yellow-500 transition-colors">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a></li>
        </ul>
        <a href="#paquetes" className="bg-yellow-500 text-blue-900 text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors">
          Ver paquetes
        </a>
      </div>
    </nav>
  );
}