import { Perfume } from '../../types/perfume';

export interface CartItem extends Perfume {
  quantity: number;
}