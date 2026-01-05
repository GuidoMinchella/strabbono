import { ShoppingBag } from 'lucide-react';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href="#menu"
        className="flex items-center gap-3 bg-[#e81480] text-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#c01070] transition-all border-4 border-white transform hover:scale-105 animate-bounce"
      >
        <ShoppingBag size={24} />
        Ordina ora
      </a>
    </div>
  );
}
