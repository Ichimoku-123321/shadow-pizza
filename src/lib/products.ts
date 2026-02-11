import type { Product, PizzaBase, Topping } from './types';
import { PlaceHolderImages } from './placeholder-images';

function getImageProps(id: string): { image: string; imageHint: string } {
  const placeholder = PlaceHolderImages.find((p) => p.id === id);
  if (placeholder) {
    return { image: placeholder.imageUrl, imageHint: placeholder.imageHint };
  }
  return { image: 'https://picsum.photos/seed/error/600/400', imageHint: 'placeholder' };
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Margherita',
    description: 'Classic delight with 100% real mozzarella cheese.',
    price: 12.99,
    ...getImageProps('margherita'),
    category: 'Pizzas',
  },
  {
    id: 'p2',
    name: 'Pepperoni',
    description: 'A classic with zesty pepperoni and mozzarella.',
    price: 14.99,
    ...getImageProps('pepperoni'),
    category: 'Pizzas',
  },
  {
    id: 'p3',
    name: 'Veggie Supreme',
    description: 'A garden-fresh delight with onions, peppers, mushrooms, and olives.',
    price: 15.99,
    ...getImageProps('veggie'),
    category: 'Pizzas',
  },
  {
    id: 'p4',
    name: "Meat Lover's",
    description: 'For the carnivore in you. Packed with pepperoni, sausage, and ham.',
    price: 17.99,
    ...getImageProps('meat-lovers'),
    category: 'Pizzas',
  },
  {
    id: 'd1',
    name: 'Coke',
    description: '330ml can of ice-cold Coca-Cola.',
    price: 2.50,
    ...getImageProps('coke'),
    category: 'Drinks',
  },
  {
    id: 'd2',
    name: 'Sprite',
    description: '330ml can of crisp Sprite.',
    price: 2.50,
    ...getImageProps('sprite'),
    category: 'Drinks',
  },
  {
    id: 'd3',
    name: 'Water',
    description: '500ml bottle of still mineral water.',
    price: 1.50,
    ...getImageProps('water'),
    category: 'Drinks',
  },
];

export const pizzaBases: PizzaBase[] = [
  { id: 'b1', name: 'Thin Crust', price: 10.00 },
  { id: 'b2', name: 'Thick Crust', price: 12.00 },
];

export const toppings: Topping[] = [
  { id: 't1', name: 'Extra Cheese', price: 2.00 },
  { id: 't2', name: 'Mushrooms', price: 1.50 },
  { id: 't3', name: 'Onions', price: 1.00 },
  { id: 't4', name: 'Peppers', price: 1.50 },
  { id: 't5', name: 'Pepperoni', price: 2.50 },
  { id: 't6', name: 'Sausage', price: 2.50 },
];
