// components/typography/Title.tsx
import { type ReactNode, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const Title = ({
  as: Tag = "h1",
  className,
  children,
  ...props
}: TitleProps) => (
  <Tag className={clsx("title", className)} {...props}>
    {children}
  </Tag>
);
