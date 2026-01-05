import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/products';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23e81480'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#e81480] text-white px-6 py-3 rounded-full font-black text-lg mb-4 shadow-xl transform rotate-2">
            <HelpCircle size={24} />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Domande{' '}
            <span className="text-[#f6a22c]">Frequenti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Tutto quello che devi sapere su Strabbono
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-4 border-gray-900 shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-black text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-[#e81480] rotate-180'
                    : 'bg-[#f6a22c]'
                }`}>
                  <ChevronDown className="text-white" size={24} />
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t-4 border-gray-100">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {openIndex === index && (
                <div className="h-2 bg-gradient-to-r from-[#e81480] to-[#f6a22c]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-3xl p-8 border-4 border-gray-900 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-gray-900 mb-3">
            Non hai trovato la risposta?
          </h3>
          <p className="text-gray-600 font-medium mb-6">
            Il nostro team è sempre disponibile per aiutarti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20BA5A] transition-all shadow-lg border-4 border-gray-900"
            >
              Contattaci su WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center bg-[#f6a22c] text-white px-6 py-3 rounded-full font-bold hover:bg-[#e89520] transition-all shadow-lg border-4 border-gray-900"
            >
              Chiamaci
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
