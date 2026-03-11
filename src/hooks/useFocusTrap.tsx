import { useEffect, useRef } from "react";

export function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const ref = useRef<T | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const container = ref.current;
    if (!container) return;

    lastFocused.current = document.activeElement as HTMLElement;

    const focusables = getFocusable(container);
    if (focusables.length > 0) focusables[0].focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const els = getFocusable(container);
      if (els.length === 0) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      lastFocused.current?.focus();
    };
  }, [active]);

  return ref;
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      `
      a[href],
      button:not([disabled]),
      textarea:not([disabled]),
      input:not([disabled]),
      select:not([disabled]),
      [tabindex]:not([tabindex="-1"])
      `,
    ),
  );
}
