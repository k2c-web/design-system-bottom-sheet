import type { ReactNode } from "react";

export interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export function HeaderSlots({
  left,
  center = (
    <h1 className="text-header-fg text-lg font-semibold">Design System !</h1>
  ),
  right,
}: HeaderProps) {
  return (
    <header
      className="
        bg-header-bg text-header-fg
        flex items-center justify-between
        px-4 py-3
        border-b border-black/10 dark:border-white/10
        shadow-[0_0_16px_var(--header-glow)]
      "
    >
      {/* Left slot */}
      <div className="flex items-center gap-2">{left}</div>

      {/* Center slot */}
      <div className="flex-1 flex justify-center">{center}</div>

      {/* Right slot */}
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}
