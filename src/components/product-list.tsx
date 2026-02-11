"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/lib/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import { GradientButton } from "./gradient-button";
import { Separator } from "./ui/separator";

export function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (selectedProduct) {
      const {id, name, description, price, image, imageHint} = selectedProduct;
      addToCart({
        id,
        name,
        description,
        price,
        quantity: 1,
        image,
        imageHint,
      });
      toast({
        title: "Added to Cart!",
        description: `${selectedProduct.name} is now in your cart.`,
      });
      setSelectedProduct(null);
    }
  };

  const pizzas = products.filter(p => p.category === 'Pizzas');
  const drinks = products.filter(p => p.category === 'Drinks');

  return (
    <>
      <section id="pizzas" className="py-8">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-accent md:text-4xl">Our Pizzas</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pizzas.map((product) => (
            <ProductCard key={product.id} product={product} onSelectProduct={setSelectedProduct} />
          ))}
        </div>
      </section>

      <Separator className="my-16 bg-primary/20" />

      <section id="drinks" className="py-8">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold text-accent md:text-4xl">Drinks</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {drinks.map((product) => (
            <ProductCard key={product.id} product={product} onSelectProduct={setSelectedProduct} />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
          <DialogContent className="max-w-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto rounded-md overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  data-ai-hint={selectedProduct.imageHint}
                />
              </div>
              <div className="flex flex-col">
                <DialogHeader>
                  <DialogTitle className="font-headline text-3xl text-primary">{selectedProduct.name}</DialogTitle>
                  <DialogDescription className="text-base pt-2">{selectedProduct.description}</DialogDescription>
                </DialogHeader>
                <div className="flex-1" />
                <DialogFooter className="mt-6 flex-col items-start gap-4 sm:flex-col sm:items-start">
                   <p className="text-3xl font-bold text-accent">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                  <GradientButton onClick={handleAddToCart} size="lg" className="w-full">
                    Add to Cart
                  </GradientButton>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
