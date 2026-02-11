"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { pizzaBases, toppings } from "@/lib/products";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import type { PizzaBase, Topping } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GradientButton } from "./gradient-button";
import { Separator } from "./ui/separator";

export function CustomPizzaBuilder() {
  const [selectedBase, setSelectedBase] = useState<PizzaBase | null>(pizzaBases[0]);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const totalPrice = useMemo(() => {
    const basePrice = selectedBase?.price || 0;
    const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + topping.price, 0);
    return basePrice + toppingsPrice;
  }, [selectedBase, selectedToppings]);

  const handleToppingChange = (topping: Topping, checked: boolean | "indeterminate") => {
    setSelectedToppings((prev) =>
      checked ? [...prev, topping] : prev.filter((t) => t.id !== topping.id)
    );
  };
  
  const handleAddToCart = () => {
    if (!selectedBase) {
      toast({
        title: "No Base Selected",
        description: "Please select a pizza base.",
        variant: "destructive",
      });
      return;
    }

    const customPizzaImage = PlaceHolderImages.find(p => p.id === 'custom-pizza');
    const toppingNames = selectedToppings.map(t => t.name).join(', ');

    addToCart({
      id: `custom-${Date.now()}`,
      name: `Custom Pizza (${selectedBase.name})`,
      description: toppingNames || 'Classic cheese on your selected base.',
      price: totalPrice,
      quantity: 1,
      image: customPizzaImage?.imageUrl || '',
      imageHint: customPizzaImage?.imageHint || 'pizza ingredients',
    });

    toast({
      title: "Added to Cart",
      description: "Your custom pizza is waiting for you!",
    });

    setSelectedBase(pizzaBases[0]);
    setSelectedToppings([]);
  };

  return (
    <section id="builder" className="py-16 sm:py-24">
      <Card className="w-full overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl text-primary md:text-4xl">Create Your Masterpiece</CardTitle>
          <CardDescription>Craft a pizza that is uniquely yours. Start with a base, add your cravings.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent">1. Choose Your Base</h3>
            <RadioGroup
              value={selectedBase?.id}
              onValueChange={(id) => setSelectedBase(pizzaBases.find(b => b.id === id) || null)}
              className="space-y-2"
            >
              {pizzaBases.map((base) => (
                <div key={base.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={base.id} id={base.id} />
                  <Label htmlFor={base.id} className="flex w-full cursor-pointer justify-between rounded-md border p-3 hover:bg-white/5">
                    <span>{base.name}</span>
                    <span className="font-bold text-primary">${base.price.toFixed(2)}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent">2. Add Toppings</h3>
            <div className="grid grid-cols-2 gap-4">
              {toppings.map((topping) => (
                <div key={topping.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={topping.id} 
                    onCheckedChange={(checked) => handleToppingChange(topping, checked)}
                    checked={selectedToppings.some(t => t.id === topping.id)}
                  />
                  <Label htmlFor={topping.id} className="flex w-full cursor-pointer justify-between text-sm">
                    <span>{topping.name}</span>
                    <span className="font-bold text-primary/80">+${topping.price.toFixed(2)}</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4 bg-card/50 p-6">
          <Separator />
          <div className="flex w-full items-center justify-between">
            <span className="text-2xl font-bold font-headline text-accent">Total: ${totalPrice.toFixed(2)}</span>
            <GradientButton onClick={handleAddToCart} size="lg">Add Custom Pizza to Cart</GradientButton>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
