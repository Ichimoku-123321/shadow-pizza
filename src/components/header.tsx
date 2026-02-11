"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { CartSheet } from "./cart-sheet";

export function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block font-headline text-primary text-xl">
              Shadow Slice
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex gap-2">
             <Button variant="ghost" className="text-foreground/80 hover:text-primary" onClick={() => scrollTo('pizzas')}>Pizzas</Button>
             <Button variant="ghost" className="text-foreground/80 hover:text-primary" onClick={() => scrollTo('drinks')}>Drinks</Button>
             <Button variant="ghost" className="text-foreground/80 hover:text-primary" onClick={() => scrollTo('builder')}>Pizza Builder</Button>
          </nav>
          <div className="flex items-center gap-2">
            <CartSheet />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => scrollTo('pizzas')}>Pizzas</DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollTo('drinks')}>Drinks</DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollTo('builder')}>Pizza Builder</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
