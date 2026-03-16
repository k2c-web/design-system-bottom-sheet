import type { PropsWithChildren } from "react";
import { BOTTOM_SHEET_BODY } from "./bottomSheetSymbols";

export const BottomSheetBody = ({ children }: PropsWithChildren) => (
  <div
    className="overflow-y-auto bg-surface text-on-surface min-h-bottom-sheet"
    data-scroll-lock-scrollable="true"
  >
    <div className="flex-1 p-4 space-y-6 container-global">{children}</div>
  </div>
);
BottomSheetBody._id = BOTTOM_SHEET_BODY;
