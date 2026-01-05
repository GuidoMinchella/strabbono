import { Plus } from 'lucide-react';
import { products } from '../data/products';

export default function Products() {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'HOT':
        return 'bg-[#e81480]';
      case 'NEW':
        return 'bg-[#f6a22c]';
      case 'TOP':
        return 'bg-gray-900';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e81480] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6a22c] rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#f6a22c] text-white px-6 py-2 rounded-full font-bold text-sm transform -rotate-2 inline-block shadow-lg">
              IL NOSTRO MENÙ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            I Nostri{' '}
            <span className="text-[#e81480] relative inline-block">
              Best Seller
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Scegli tra i nostri panini leggendari e contorni irresistibili
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {product.badge && (
                <div className={`absolute top-2 right-2 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded-full font-black text-[10px] transform rotate-12 shadow-md z-10`}>
                  {product.badge}
                </div>
              )}

              <div className="relative h-32 md:h-40 overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23e81480'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-3 bg-white border-t-2 border-gray-900 relative">
                <div className="absolute -top-4 left-3 bg-white border-2 border-gray-900 rounded-xl px-2 py-1 shadow-md">
                  <span className="text-sm font-black text-[#e81480]">{product.price}</span>
                </div>

                <div className="pt-3">
                  <h3 className="text-sm font-black text-gray-900 mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3 text-xs line-clamp-2 min-h-[2.5em]">
                    {product.description}
                  </p>

                  <button className="w-full bg-[#e81480] text-white px-3 py-2 rounded-full font-bold text-xs hover:bg-[#c01070] transition-all flex items-center justify-center gap-1 shadow-md hover:shadow-lg transform hover:scale-105">
                    <Plus size={14} />
                    Aggiungi
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e81480] via-[#f6a22c] to-[#e81480] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-block bg-[#f6a22c] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e89520] transition-all shadow-lg hover:shadow-xl border-4 border-gray-900 transform hover:scale-105"
          >
            Vedi Menù Completo
          </a>
        </div>
      </div>
    </section>
  );
}
