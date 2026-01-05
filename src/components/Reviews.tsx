import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/products';

export default function Reviews() {
  return (
    <section id="recensioni" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#e81480] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6a22c] rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#f6a22c] text-white px-6 py-2 rounded-full font-bold text-sm transform -rotate-2 inline-block shadow-lg">
              DICONO DI NOI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Recensioni dei{' '}
            <span className="text-[#e81480]">Clienti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Oltre 500 clienti soddisfatti ci hanno già provato
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border-4 border-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-[#e81480] opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? 'text-[#f6a22c] fill-[#f6a22c]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e81480] to-[#f6a22c] rounded-full flex items-center justify-center border-2 border-gray-900 shadow-lg">
                    <span className="text-white font-black text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-black text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600 font-medium">Cliente verificato</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e81480] to-[#f6a22c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#e81480] to-[#f6a22c] rounded-3xl p-8 md:p-12 border-4 border-gray-900 shadow-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-white fill-white" />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
              Valutazione media: 4.9/5
            </h3>
            <p className="text-xl text-white/90 font-bold mb-6">
              Basata su oltre 500 recensioni verificate
            </p>
            <button className="bg-white text-[#e81480] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl border-4 border-gray-900 transform hover:scale-105">
              Lascia una recensione
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
