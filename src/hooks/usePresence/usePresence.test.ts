// src/hooks/usePresence.test.ts
import { renderHook, waitFor } from "@testing-library/react";
import { usePresence } from "./usePresence";

describe("usePresence", () => {
  it("should be present when isOpen is true", async () => {
    const { result } = renderHook(() => usePresence(true));
    await waitFor(() => expect(result.current.isPresent).toBe(true));
  });

  it("should start present if initially open", () => {
    const { result } = renderHook(() => usePresence(true));
    // isPresent démarre à true car useState(isOpen)
    expect(result.current.isPresent).toBe(true);
  });

  it("should become present via microtask when opened", async () => {
    const { result, rerender } = renderHook(
      ({ isOpen }) => usePresence(isOpen),
      { initialProps: { isOpen: false } },
    );
    expect(result.current.isPresent).toBe(false);
    rerender({ isOpen: true });
    await waitFor(() => expect(result.current.isPresent).toBe(true));
  });

  it("should expose a ref", () => {
    const { result } = renderHook(() => usePresence(true));
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });
});
