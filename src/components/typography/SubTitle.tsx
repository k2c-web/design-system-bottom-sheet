// components/typography/Subtitle.tsx
import { type ReactNode, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4";
  children: ReactNode;
}

export const SubTitle = ({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SubTitleProps) => (
  <Tag className={clsx("subtitle", className)} {...props}>
    {children}
  </Tag>
);
