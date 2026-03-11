import type { PropsWithChildren } from "react";

export const BottomSheetFooter = ({ children }: PropsWithChildren) => (
  <div className="sticky bottom-0 p-4 border-t border-gray-200">{children}</div>
);

BottomSheetFooter.displayName = "BottomSheet.Footer";
