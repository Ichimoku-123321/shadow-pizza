import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";
import { CustomPizzaBuilder } from "@/components/custom-pizza-builder";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-gradient-to-t from-background via-transparent to-transparent"
        >
           <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://picsum.photos/seed/pizzabg/1920/1080')" }}
            data-ai-hint="dark pizza background"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-headline text-5xl font-bold tracking-wider text-primary md:text-7xl">
              Shadow Slice
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
              Experience the art of pizza, crafted in the shadows, delivered to your door.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <ProductList />
          <CustomPizzaBuilder />
        </div>
      </main>
      <Footer />
    </div>
  );
}
