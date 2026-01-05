export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  badge?: 'HOT' | 'TOP' | 'NEW';
  image: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  savings?: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
