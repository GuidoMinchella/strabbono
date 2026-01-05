import { Tag, TrendingDown } from 'lucide-react';
import { offers } from '../data/products';

export default function Offers() {
  return (
    <section id="offerte" className="py-16 md:py-24 bg-gradient-to-br from-[#e81480] to-[#f6a22c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-[#e81480] px-6 py-3 rounded-full font-black text-lg mb-4 shadow-xl transform -rotate-2">
            <Tag size={24} />
            OFFERTE SPECIALI
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Risparmia con i Nostri{' '}
            <span className="relative inline-block">
              Combo
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-bold">
            Le migliori promozioni per mangiare di più spendendo meno
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 border-4 border-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6a22c] opacity-10 rounded-full -mr-16 -mt-16"></div>

                {offer.savings && (
                  <div className="absolute top-4 right-4 bg-[#f6a22c] text-white px-4 py-2 rounded-full font-black text-xs flex items-center gap-1 shadow-lg transform rotate-12">
                    <TrendingDown size={16} />
                    {offer.savings}
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#e81480] rounded-2xl flex items-center justify-center mb-4 transform -rotate-6 shadow-lg">
                    <Tag className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    {offer.title}
                  </h3>

                  <p className="text-gray-600 font-bold mb-6 text-lg min-h-[3rem]">
                    {offer.description}
                  </p>

                  <div className="flex items-end justify-between mb-6">
                    <span className="text-4xl font-black text-[#e81480]">
                      {offer.price}
                    </span>
                  </div>

                  <button className="w-full bg-[#e81480] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#c01070] transition-all shadow-lg hover:shadow-xl border-4 border-gray-900 transform hover:scale-105">
                    Ordina ora
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e81480] to-[#f6a22c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 border-4 border-gray-900 shadow-2xl text-center flex flex-col items-center">
          <p className="text-2xl font-black text-gray-900 mb-2">
            Nuove offerte ogni settimana!
          </p>
          <p className="text-gray-600 font-bold text-lg mb-6">
            Seguici sui social per non perdere le promozioni esclusive
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
