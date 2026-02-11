import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export function GradientButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-primary via-accent to-primary bg-[size:200%_auto] text-primary-foreground animate-gradient-shift transition-opacity duration-300 hover:opacity-90",
        className
      )}
      {...props}
    />
  );
}
