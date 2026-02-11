export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/50 py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Shadow Slice. All Rights Reserved.</p>
        <p className="text-sm">A delicious creation for the modern connoisseur.</p>
      </div>
    </footer>
  );
}
