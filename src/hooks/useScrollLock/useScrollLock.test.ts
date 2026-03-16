// src/hooks/useScrollLock.test.ts
import { renderHook } from "@testing-library/react";
import { useScrollLock } from "./useScrollLock";

describe("useScrollLock", () => {
  it("should lock body scroll when active", () => {
    renderHook(() => useScrollLock(true));
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.position).toBe("fixed");
  });

  it("should not lock scroll when inactive", () => {
    renderHook(() => useScrollLock(false));
    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.position).toBe("");
  });

  it("should restore body styles on cleanup", () => {
    const { unmount } = renderHook(() => useScrollLock(true));
    unmount();
    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.position).toBe("");
  });

  it("should restore scroll when deactivated", () => {
    const { rerender } = renderHook(({ active }) => useScrollLock(active), {
      initialProps: { active: true },
    });
    rerender({ active: false });
    expect(document.body.style.overflow).toBe("");
  });
});
