// src/hooks/useBottomSheet.test.ts
import { renderHook, act } from "@testing-library/react";
import { useBottomSheet } from "./useBottomSheet";

describe("useBottomSheet", () => {
  it("should be closed by default", () => {
    const { result } = renderHook(() => useBottomSheet());
    expect(result.current.isOpen).toBe(false);
  });

  it("should accept a custom initial state", () => {
    const { result } = renderHook(() => useBottomSheet(true));
    expect(result.current.isOpen).toBe(true);
  });

  it("should open when open() is called", () => {
    const { result } = renderHook(() => useBottomSheet());
    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);
  });

  it("should close when close() is called", () => {
    const { result } = renderHook(() => useBottomSheet(true));
    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });

  it("should expose stable references for open and close", () => {
    const { result, rerender } = renderHook(() => useBottomSheet());
    const { open, close } = result.current;
    rerender();
    expect(result.current.open).toBe(open);
    expect(result.current.close).toBe(close);
  });
});
