import { Perfume } from '../../types/perfume';  // імпортуємо тип

import axios from 'axios';

export const fetchPerfumes = async (): Promise<Perfume[]> => {
  const response = await axios.get('/mock/db.json');
  return response.data.perfumes;
};
