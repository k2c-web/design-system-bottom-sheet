import clsx from "clsx";
import type { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-btn-bg text-btn-fg cursor-pointer",
      className,
    )}
  >
    {children}
  </button>
);
