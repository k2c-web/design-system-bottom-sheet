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

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  children: ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  onOpen,
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

    const type = child.type as { displayName?: string };
    const name = type.displayName;

    if (name === "BottomSheet.Header") header = child;
    if (name === "BottomSheet.Body") body = child;
    if (name === "BottomSheet.Footer") footer = child;
  });

  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen,
        close: onClose,
        open: onOpen,
      }}
    >
      {isPresent &&
        createPortal(
          <div className="fixed inset-0 z-overlay flex flex-col pointer-events-none">
            <div
              ref={(el) => {
                presenceRef.current = el;
                focusRef.current = el;
              }}
              className={clsx(
                "mt-auto w-full h-[70%] rounded-t-xl flex flex-col overflow-hidden pointer-events-auto",
                isOpen ? "bottomsheet-enter" : "bottomsheet-exit",
              )}
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
