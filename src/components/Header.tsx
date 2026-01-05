import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menù', href: '#menu' },
    { label: 'Offerte', href: '#offerte' },
    { label: 'Come funziona', href: '#come-funziona' },
    { label: 'Recensioni', href: '#recensioni' },
    { label: 'Contatti', href: '#contatti' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b-4 border-[#e81480]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center relative z-50">
            <img src="/logo.svg" alt="Strabbono" className="h-20 w-auto absolute top-1/2 -translate-y-1/2 left-0" />
            <div className="h-12 w-20"></div> {/* Spacer to maintain layout */}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-bold hover:text-[#e81480] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-[#e81480] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#c01070] transition-all transform hover:scale-105 shadow-lg">
            Ordina ora
          </button>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 font-bold hover:text-[#e81480] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-[#e81480] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mt-2">
                Ordina ora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
