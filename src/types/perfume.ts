export interface Perfume {
  id: number;
  name: string;
  brand: string;
  gender: string;
  image: string;
  price: number; 
  description: string;
  currency?: 'USD' | 'UAH' | 'EUR';
}
