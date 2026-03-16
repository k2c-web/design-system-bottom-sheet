// src/hooks/useFocusTrap/useFocusTrap.test.ts
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFocusTrap } from "./useFocusTrap";

// composant de test qui utilise le hook réellement
const FocusTrapDemo = ({ active }: { active: boolean }) => {
  const ref = useFocusTrap<HTMLDivElement>(active);
  return (
    <div ref={ref}>
      <button id="btn1">Premier</button>
      <button id="btn2">Deuxième</button>
      <button id="btn3">Troisième</button>
    </div>
  );
};

describe("useFocusTrap", () => {
  it("should not trap focus when inactive", () => {
    render(<FocusTrapDemo active={false} />);
    expect(document.activeElement).toBe(document.body);
  });

  it("should focus first focusable element when activated", () => {
    render(<FocusTrapDemo active={true} />);
    expect(document.activeElement?.id).toBe("btn1");
  });

  it("should trap Tab key within focusable elements", async () => {
    render(<FocusTrapDemo active={true} />);
    // focus est sur btn1, Tab depuis btn3 doit revenir à btn1
    screen.getByText("Troisième").focus();
    await userEvent.tab();
    expect(document.activeElement?.id).toBe("btn1");
  });

  it("should trap Shift+Tab to cycle backwards", async () => {
    render(<FocusTrapDemo active={true} />);
    // focus est sur btn1, Shift+Tab doit aller à btn3
    screen.getByText("Premier").focus();
    await userEvent.tab({ shift: true });
    expect(document.activeElement?.id).toBe("btn3");
  });
});