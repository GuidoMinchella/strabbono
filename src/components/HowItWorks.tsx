import { Search, ShoppingCart, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Scegli',
      description: 'Sfoglia il menù e seleziona i tuoi prodotti preferiti',
      color: 'bg-[#e81480]'
    },
    {
      icon: ShoppingCart,
      title: 'Ordina',
      description: 'Completa l\'ordine e paga come preferisci',
      color: 'bg-[#f6a22c]'
    },
    {
      icon: Truck,
      title: 'Ricevi',
      description: 'Il tuo ordine arriva caldo in 25-35 minuti',
      color: 'bg-gray-900'
    }
  ];

  return (
    <section id="come-funziona" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 border-8 border-[#e81480] rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 border-8 border-[#f6a22c] rounded-3xl rotate-12 opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#e81480] text-white px-6 py-2 rounded-full font-bold text-sm transform rotate-2 inline-block shadow-lg">
              SEMPLICISSIMO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Come{' '}
            <span className="text-[#f6a22c]">Funziona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Ordina il tuo fast food preferito in 3 semplici passi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-[#e81480] to-[#f6a22c] opacity-20 z-0"></div>
                )}

                <div className="relative z-10 text-center group">
                  <div className="relative inline-block mb-6">
                    <div className={`${step.color} w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-gray-900 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="text-white" size={56} strokeWidth={2.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-white border-4 border-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-gray-900">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#menu"
            className="inline-block bg-[#e81480] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#c01070] transition-all shadow-xl hover:shadow-2xl border-4 border-gray-900 transform hover:scale-105"
          >
            Inizia ora
          </a>
        </div>
      </div>
    </section>
  );
}
