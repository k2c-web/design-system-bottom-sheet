// components/Button/Button.tsx
import { tv, type VariantProps } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "react";

const button = tv({
  base: [
    "inline-flex items-center justify-center",
    "rounded-lg font-medium cursor-pointer",
    "transition-colors duration-normal ease-standard",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      solid:
        "bg-primary text-on-primary hover:bg-primary/90 active:bg-primary/80",
      outline:
        "border border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
      ghost: "text-primary hover:bg-primary/10 active:bg-primary/20",
    },
    size: {
      sm: "px-2 py-1 text-sm gap-1",
      md: "px-4 py-2 text-base gap-2",
      lg: "px-6 py-3 text-lg gap-2",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button className={button({ variant, size, className })} {...props}>
    {children}
  </button>
);
