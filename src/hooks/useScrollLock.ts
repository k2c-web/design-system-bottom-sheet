import { useEffect } from "react";

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const preventScroll = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      const scrollable = target?.closest(
        "[data-scroll-lock-scrollable='true']",
      );
      if (!scrollable) e.preventDefault();
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      document.removeEventListener("touchmove", preventScroll);

      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
