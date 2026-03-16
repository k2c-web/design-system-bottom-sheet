import { Children, isValidElement, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { usePresence } from "../../hooks/usePresence";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { BottomSheetContext } from "../../contexts/BottomSheetContext";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { BottomSheetFooter } from "./BottomSheetFooter";
import { BottomSheetBody } from "./BottomSheetBody";
import {
  BOTTOM_SHEET_HEADER,
  BOTTOM_SHEET_BODY,
  BOTTOM_SHEET_FOOTER,
} from "./bottomSheetSymbols";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) {
  const { isPresent, ref: presenceRef } = usePresence<HTMLDivElement>(isOpen);
  const focusRef = useFocusTrap<HTMLDivElement>(isOpen);

  useScrollLock(isOpen);

  let header: ReactNode = null;
  let body: ReactNode = null;
  let footer: ReactNode = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    const type = child.type as { _id?: symbol };
    if (type._id === BOTTOM_SHEET_HEADER) header = child;
    if (type._id === BOTTOM_SHEET_BODY) body = child;
    if (type._id === BOTTOM_SHEET_FOOTER) footer = child;
  });

  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen,
        close: onClose,
      }}
    >
      {isPresent &&
        createPortal(
          <div className="fixed inset-0 z-overlay flex flex-col">
            <div
              className={clsx(
                "absolute inset-0 bg-scrim transition-opacity duration-normal ease-standard",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              onClick={onClose}
            />
            <div
              ref={(el) => {
                presenceRef.current = el;
                focusRef.current = el;
              }}
              className={clsx(
                "mt-auto w-full rounded-t-xl flex flex-col overflow-hidden h-bottom-sheet",
                isOpen ? "bottomsheet-enter" : "bottomsheet-exit",
              )}
              data-testid="bottom-sheet"
            >
              {header}
              {body}
              {footer}
            </div>
          </div>,
          portalRoot,
        )}
    </BottomSheetContext.Provider>
  );
}

BottomSheet.Body = BottomSheetBody;
BottomSheet.Footer = BottomSheetFooter;
BottomSheet.Header = BottomSheetHeader;
