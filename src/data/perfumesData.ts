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
// import { Perfume } from '../../types/perfume';

export const perfumesData: Perfume[] = [
  {
    id: 1,
    name: 'Chanel No.5',
    gender: 'female',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelNo5.jpg',
    price: 135,
    description: 'Ікона серед ароматів — елегантний, квітковий аромат з нотами жасмину та альдегідів.'
  },
  {
    id: 2,
    name: 'Dior Sauvage',
    gender: 'male',
    brand: 'Dior',
    image: '/images/perfumes/DiorSauvage.jpg',
    price: 112,
    description: 'Свіжий, пряний та мужній аромат із нотами бергамоту, перцю та амбри.'
  },
  {
    id: 3,
    name: 'Gucci Bloom',
    gender: 'female',
    brand: 'Gucci',
    image: '/images/perfumes/GucciBloom.jpg',
    price: 105,
    description: 'Інтенсивно квітковий букет з жасмином, туберозою та коренем ірису.'
  },
  {
    id: 4,
    name: 'Versace Eros',
    gender: 'male',
    brand: 'Versace',
    image: '/images/perfumes/VersaceEros.jpg',
    price: 85,
    description: 'Потужний аромат із нотами м’яти, яблука та ванілі для пристрасних натур.'
  },
  {
    id: 5,
    name: 'Chanel Bleu',
    gender: 'male',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelBleu.jpg',
    price: 130,
    description: 'Свіжий деревно-ароматичний парфум з нотами цитруса та ладану.'
  },
  {
    id: 6,
    name: "Dior J'adore",
    gender: 'female',
    brand: 'Dior',
    image: '/images/perfumes/DiorJadore.jpg',
    price: 125,
    description: 'Фемінний та елегантний аромат із нотами магнолії, груші та жасмину.'
  },
  {
    id: 7,
    name: 'Gucci Guilty',
    gender: 'male',
    brand: 'Gucci',
    image: '/images/perfumes/GucciGuilty.jpg',
    price: 102,
    description: 'Чуттєвий аромат з лавандою, лимоном і апельсиновим цвітом.'
  },
  {
    id: 8,
    name: 'Versace Bright Crystal',
    gender: 'female',
    brand: 'Versace',
    image: '/images/perfumes/VersaceBrightCrystal.jpg',
    price: 78,
    description: 'Легкий і свіжий аромат з гранатом, півонією та мускусом.'
  },
  {
    id: 9,
    name: 'Chanel Chance',
    gender: 'female',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelChance.jpg',
    price: 120,
    description: 'Ігристий, квітково-фруктовий аромат з нотами ананаса та ірису.'
  },
  {
    id: 10,
    name: 'Dior Homme',
    gender: 'male',
    brand: 'Dior',
    image: '/images/perfumes/DiorHomme.jpg',
    price: 110,
    description: 'Сучасний, елегантний аромат з деревними та квітковими акордами.'
  },
  {
    id: 11,
    name: 'Gucci Flora',
    gender: 'female',
    brand: 'Gucci',
    image: '/images/perfumes/GucciFlora.jpg',
    price: 100,
    description: 'Романтичний аромат з цитрусовими, півонією та сандаловим деревом.'
  },
  {
    id: 12,
    name: 'Versace Dylan Blue',
    gender: 'male',
    brand: 'Versace',
    image: '/images/perfumes/VersaceDylanBlue.jpg',
    price: 88,
    description: 'Сучасний фужерний аромат з амброю, бергамотом і пачулі.'
  },
  {
    id: 13,
    name: 'Chanel Allure',
    gender: 'female',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelAllure.jpg',
    price: 125,
    description: 'Складний, елегантний аромат з нотами мандарину, ванілі та жасмину.'
  },
  {
    id: 14,
    name: 'Dior Poison',
    gender: 'female',
    brand: 'Dior',
    image: '/images/perfumes/DiorPoison.jpg',
    price: 118,
    description: 'Насичений, загадковий аромат із пряними та фруктовими нотами.'
  },
  {
    id: 15,
    name: 'Gucci Memoire',
    gender: 'unisex',
    brand: 'Gucci',
    image: '/images/perfumes/GucciMemoire.jpg',
    price: 98,
    description: 'Нестандартний, мінерально-квітковий аромат з ромашкою та деревиною.'
  },
  {
    id: 16,
    name: 'Versace Man Eau Fraiche',
    gender: 'male',
    brand: 'Versace',
    image: '/images/perfumes/VersaceManEauFraiche.jpg',
    price: 70,
    description: 'Свіжий морський аромат із нотами лимона, тархуна та мускусу.'
  },
  {
    id: 17,
    name: 'Chanel Coco Mademoiselle',
    gender: 'female',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelCocoMademoiselle.jpg',
    price: 128,
    description: 'Світлий і елегантний аромат з апельсином, трояндою та ветивером.'
  },
  {
    id: 18,
    name: 'Dior Miss Dior',
    gender: 'female',
    brand: 'Dior',
    image: '/images/perfumes/DiorMissDior.jpg',
    price: 122,
    description: 'Жіночний, витончений аромат із півонією, рожевим перцем і мускусом.'
  },
  {
    id: 19,
    name: 'Gucci Rush',
    gender: 'female',
    brand: 'Gucci',
    image: '/images/perfumes/GucciRush.jpg',
    price: 95,
    description: 'Яскравий, сексуальний аромат із пачулі, фрезією та кориандром.'
  },
  {
    id: 20,
    name: 'Versace Crystal Noir',
    gender: 'female',
    brand: 'Versace',
    image: '/images/perfumes/VersaceCrystalNoir.jpg',
    price: 80,
    description: 'Чуттєвий, загадковий аромат з імбиром, кокосом та гарденією.'
  },
  {
    id: 21,
    name: 'Chanel Egoiste',
    gender: 'male',
    brand: 'Chanel',
    image: '/images/perfumes/ChanelEgoiste.jpg',
    price: 127,
    description: 'Характерний деревно-пряний аромат з сандалом, корицею і ваніллю.'
  },
  {
    id: 22,
    name: 'Dior Fahrenheit',
    gender: 'male',
    brand: 'Dior',
    image: '/images/perfumes/DiorFahrenheit.jpg',
    price: 115,
    description: 'Інтенсивний, шкіряний аромат з нотами лаванди, мандарина та мускусу.'
  },
  {
    id: 23,
    name: 'Gucci Envy Me',
    gender: 'female',
    brand: 'Gucci',
    image: '/images/perfumes/GucciEnvyMe.jpg',
    price: 92,
    description: 'Свіжий і спокусливий аромат з рожевим піоном, лічі та мускусом.'
  }
]; 