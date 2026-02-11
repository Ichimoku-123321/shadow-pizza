import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  return (
    <Card 
      className="group w-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2"
      onClick={() => onSelectProduct(product)}
      role="button"
      aria-label={`View details for ${product.name}`}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="truncate text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-1 h-10 overflow-hidden text-ellipsis">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
}
