// BottomSheetContext.tsx
import { createContext, useContext } from "react";

export interface BottomSheetAPI {
  isOpen: boolean;
  close: () => void;
}

export const BottomSheetContext = createContext<BottomSheetAPI | null>(null);

export function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx) {
    throw new Error("BottomSheet components must be used within <BottomSheet>");
  }
  return ctx;
}
