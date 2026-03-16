// components/typography/Suptitle.tsx
import { type ReactNode, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface SuptitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const Suptitle = ({ className, children, ...props }: SuptitleProps) => (
  <p className={clsx("suptitle", className)} {...props}>
    {children}
  </p>
);
