export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
  category: 'Pizzas' | 'Drinks';
};

export type Topping = {
  id: string;
  name: string;
  price: number;
};

export type PizzaBase = {
  id: string;
  name: string;
  price: number;
};

export type CartItem = {
  id: string; // unique ID for the cart item
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image: string;
  imageHint: string;
};
