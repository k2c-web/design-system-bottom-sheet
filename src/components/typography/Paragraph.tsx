// components/typography/Paragraph.tsx
import { type ReactNode, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
  children: ReactNode;
}

export const Paragraph = ({
  muted = false,
  className,
  children,
  ...props
}: ParagraphProps) => (
  <p
    className={clsx(muted ? "paragraph-muted" : "paragraph", className)}
    {...props}
  >
    {children}
  </p>
);
