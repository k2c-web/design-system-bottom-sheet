import { useEffect, useRef, useState } from "react";

export function usePresence<T extends HTMLElement>(isOpen: boolean) {
  const [isPresent, setIsPresent] = useState(isOpen);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (isOpen) {
      queueMicrotask(() => setIsPresent(true));
      return;
    }

    const el = ref.current;
    if (!el) return;

    const handleEnd = (event: AnimationEvent | TransitionEvent) => {
      if (event.target === el) {
        setIsPresent(false);
      }
    };

    el.addEventListener("animationend", handleEnd);
    el.addEventListener("transitionend", handleEnd);

    return () => {
      el.removeEventListener("animationend", handleEnd);
      el.removeEventListener("transitionend", handleEnd);
    };
  }, [isOpen]);

  return { isPresent, ref };
}
