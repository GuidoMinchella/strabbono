import { ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img 
          src="/sfondo.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Mobile Background (Absolute positioned relative to content) */}
      <div className="absolute top-0 left-0 w-full h-full md:hidden z-0 pointer-events-none overflow-hidden">
         {/* This div is just a placeholder, the actual bg is handled inside the grid to match content height */}
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-[#e81480] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-8 border-[#f6a22c] rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#e81480] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Wrapper for Mobile Background scope */}
            <div className="relative">
              {/* Mobile Background Image & Overlay */}
              <div className="md:hidden absolute top-[-7rem] left-1/2 -translate-x-1/2 w-[100vw] h-[calc(100%+8rem)] -z-10">
                <img 
                  src="/sfondo.webp" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="inline-block bg-[#f6a22c] text-white px-4 py-2 rounded-full font-bold mb-6 transform -rotate-2 shadow-lg">
                Consegna in 25-35 minuti
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                Panini{' '}
                <span className="text-[#e81480] relative inline-block">
                  esagerati
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#f6a22c" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}per appetiti{' '}
                <span className="text-[#f6a22c]">XXL</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
                Burger succosi, patatine croccanti e consegna veloce.
                Il fast food americano che ti fa venire fame!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center bg-[#e81480] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c01070] transition-all transform hover:scale-105 shadow-xl border-4 border-white/20"
                >
                  Ordina ora
                  <ChevronRight className="ml-2" size={24} />
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center bg-white text-[#e81480] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border-4 border-[#e81480] shadow-lg"
                >
                  Vedi Menù
                </a>
              </div>
            </div>

            {/* Icons Section - Outside the mobile bg wrapper */}
            <div className="flex flex-wrap gap-6 text-gray-700 md:text-white pt-4 md:pt-0 hidden md:flex">
              <div className="flex items-center gap-2">
                <div className="bg-[#f6a22c] p-2 rounded-full">
                  <Clock className="text-white" size={20} />
                </div>
                <span className="font-bold md:text-white text-gray-800">Consegna rapida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#e81480] p-2 rounded-full">
                  <MapPin className="text-white" size={20} />
                </div>
                <span className="font-bold md:text-white text-gray-800">Zona centrale</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#e81480] to-[#f6a22c] rounded-[3rem] transform rotate-3 opacity-20 blur-xl"></div>
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border-8 border-[#e81480] overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#f6a22c] text-white px-4 py-2 rounded-full font-black text-sm transform rotate-12 shadow-lg z-20">
                  HOT!
                </div>
                <img
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Burger Strabbono"
                  className="w-full h-auto rounded-[2.5rem]"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white border-4 border-[#f6a22c] rounded-2xl p-4 shadow-xl transform -rotate-6 hidden md:block">
              <p className="font-black text-2xl text-gray-900">4.9⭐</p>
              <p className="text-sm font-bold text-gray-600">500+ recensioni</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q10 10, 20 20 T40 20' stroke='%23e81480' fill='none' stroke-width='2'/%3E%3C/svg%3E")`
      }}></div>
    </section>
  );
}
