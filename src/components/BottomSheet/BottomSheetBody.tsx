import type { PropsWithChildren } from "react";

export const BottomSheetBody = ({ children }: PropsWithChildren) => (
  <div className="overflow-y-auto" data-scroll-lock-scrollable="true">
    <div className="flex-1 overflow-y-auto p-4 space-y-6 container-global">
      {children}
    </div>
  </div>
);
BottomSheetBody.displayName = "BottomSheet.Body";
