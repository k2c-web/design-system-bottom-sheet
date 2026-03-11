import type { PropsWithChildren } from "react";
import { useBottomSheetContext } from "../../contexts/BottomSheetContext";

const Close = () => {
  const { close } = useBottomSheetContext();
  return (
    <button
      data-testid="bottom-sheet-close"
      onClick={close}
      className="cursor-pointer absolute right-4 top-4 text-fg"
    >
      ✕
    </button>
  );
};

export const BottomSheetHeader = ({ children }: PropsWithChildren) => (
  <div className="sticky top-0 p-4 bg-btn-bg">
    {children}
    <Close />
  </div>
);

BottomSheetHeader.displayName = "BottomSheet.Header";
