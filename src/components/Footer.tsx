import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contatti" className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-black text-[#e81480] mb-4 transform -rotate-2">
              STRABBONO
            </h3>
            <p className="text-gray-400 font-medium mb-6">
              Il fast food americano che ti fa venire fame! Burger succosi e consegna veloce.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-[#e81480] rounded-full flex items-center justify-center hover:bg-[#c01070] transition-all border-2 border-white shadow-lg transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#f6a22c] rounded-full flex items-center justify-center hover:bg-[#e89520] transition-all border-2 border-white shadow-lg transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#e81480] rounded-full flex items-center justify-center hover:bg-[#c01070] transition-all border-2 border-white shadow-lg transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-4 text-[#f6a22c]">Menu Rapido</h4>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Menù
                </a>
              </li>
              <li>
                <a href="#offerte" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Offerte
                </a>
              </li>
              <li>
                <a href="#come-funziona" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Come funziona
                </a>
              </li>
              <li>
                <a href="#recensioni" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Recensioni
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-4 text-[#f6a22c]">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-[#e81480] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Telefono</p>
                  <a href="tel:+390123456789" className="text-gray-400 hover:text-white transition-colors">
                    +39 012 345 6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#e81480] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:info@strabbono.it" className="text-gray-400 hover:text-white transition-colors">
                    info@strabbono.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#e81480] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Indirizzo</p>
                  <p className="text-gray-400">
                    Via del Gusto 123<br />
                    00100 Roma, Italia
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-4 text-[#f6a22c]">Orari</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="text-[#e81480] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Lunedì - Domenica</p>
                  <p className="text-gray-400">11:00 - 23:00</p>
                </div>
              </div>
              <div className="bg-[#e81480] rounded-2xl p-4 border-2 border-white mt-6">
                <p className="font-black text-lg mb-2">Ordina ora!</p>
                <p className="text-sm text-white/90 font-medium">
                  Consegna rapida in 25-35 minuti
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-medium text-center md:text-left">
              © 2024 Strabbono. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Termini e Condizioni
              </a>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
