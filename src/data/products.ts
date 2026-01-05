import { Product, Offer, Review, FAQItem } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Hamburger 200g, insalata, pomodoro, cipolla, salse',
    price: '€8.90',
    badge: 'TOP',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Chicken Burger',
    description: 'Pollo croccante, lattuga, maionese al curry',
    price: '€9.50',
    badge: 'HOT',
    image: 'https://images.pexels.com/photos/15832879/pexels-photo-15832879.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Double Cheese',
    description: 'Doppio hamburger, doppio cheddar, bacon',
    price: '€12.90',
    badge: 'NEW',
    image: 'https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Patatine Fritte',
    description: 'Croccanti e dorate, porzione abbondante',
    price: '€4.50',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Chicken Nuggets',
    description: '10 pezzi di pollo impanato con salse',
    price: '€6.90',
    image: 'https://images.pexels.com/photos/11401287/pexels-photo-11401287.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    name: 'Milkshake',
    description: 'Cioccolato, vaniglia o fragola',
    price: '€5.50',
    badge: 'TOP',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Combo Strabbono',
    description: 'Burger + Patatine + Bibita',
    price: '€13.90',
    savings: 'Risparmi €3'
  },
  {
    id: 2,
    title: '2x1 Martedì',
    description: 'Ogni martedì: 2 burger al prezzo di 1',
    price: 'Da €8.90'
  },
  {
    id: 3,
    title: 'Menu Famiglia',
    description: '4 Burger + 2 Patatine grandi + 4 Bibite',
    price: '€39.90',
    savings: 'Risparmi €8'
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Marco R.',
    rating: 5,
    text: 'I panini più buoni della città! Consegna velocissima e cibo sempre caldo. Strabbono è diventato il mio fast food preferito.'
  },
  {
    id: 2,
    name: 'Giulia M.',
    rating: 5,
    text: 'Porzioni generose e prezzi onesti. Il Double Cheese è pazzesco! Lo ordino almeno una volta a settimana.'
  },
  {
    id: 3,
    name: 'Luca P.',
    rating: 4,
    text: 'Ottima qualità e varietà. Le patatine sono croccanti come piacciono a me. Servizio impeccabile.'
  },
  {
    id: 4,
    name: 'Alessia F.',
    rating: 5,
    text: 'Finalmente un fast food che consegna davvero veloce! Ordinato e ricevuto in 25 minuti. Tutto perfetto!'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'Quali sono i tempi di consegna?',
    answer: 'Consegniamo in 25-35 minuti nelle zone coperte dal servizio. Riceverai una notifica quando il rider è in arrivo.'
  },
  {
    question: 'Quali metodi di pagamento accettate?',
    answer: 'Accettiamo contanti alla consegna, carte di credito/debito, PayPal e pagamenti digitali tramite app.'
  },
  {
    question: 'Avete opzioni per allergeni e intolleranze?',
    answer: 'Sì, nel menù trovi le indicazioni degli allergeni. Puoi personalizzare il tuo ordine e richiedere modifiche nelle note.'
  },
  {
    question: 'Dove consegnate?',
    answer: 'Consegniamo in tutta la città e zone limitrofe. Inserisci il tuo indirizzo per verificare la copertura del servizio.'
  },
  {
    question: 'Come posso contattare l\'assistenza?',
    answer: 'Puoi contattarci via WhatsApp, telefono o email. Il nostro servizio clienti è attivo tutti i giorni dalle 11:00 alle 23:00.'
  }
];
