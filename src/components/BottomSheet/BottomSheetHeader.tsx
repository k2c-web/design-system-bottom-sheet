import type { PropsWithChildren } from "react";
import { useBottomSheetContext } from "../../contexts/BottomSheetContext";
import { BOTTOM_SHEET_HEADER } from "./bottomSheetSymbols";

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
  <div className="sticky top-0 p-4 bg-primary text-on-primary border-b border-outline">
    <Close />
    <div className="container-global">{children}</div>
  </div>
);

BottomSheetHeader._id = BOTTOM_SHEET_HEADER;
