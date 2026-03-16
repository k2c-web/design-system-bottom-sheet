import type { PropsWithChildren } from "react";
import { BOTTOM_SHEET_FOOTER } from "./bottomSheetSymbols";

export const BottomSheetFooter = ({ children }: PropsWithChildren) => (
  <div className="sticky bottom-0 p-4 bg-on-surface">{children}</div>
);

BottomSheetFooter._id = BOTTOM_SHEET_FOOTER;
