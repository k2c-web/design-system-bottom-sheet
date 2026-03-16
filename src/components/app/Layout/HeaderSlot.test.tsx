// src/components/Layout/HeaderSlot.test.tsx
import { render, screen } from "@testing-library/react";
import { HeaderSlots } from "./HeaderSlots";

describe("HeaderSlot", () => {
  it("should render default title when no center prop", () => {
    render(<HeaderSlots />);
    expect(screen.getByText("Design System !")).toBeInTheDocument();
  });

  it("should render custom center slot", () => {
    render(<HeaderSlots center={<span>Mon titre custom</span>} />);
    expect(screen.getByText("Mon titre custom")).toBeInTheDocument();
    expect(screen.queryByText("Design System !")).not.toBeInTheDocument();
  });

  it("should render left slot when provided", () => {
    render(<HeaderSlots left={<button>Retour</button>} />);
    expect(screen.getByRole("button", { name: "Retour" })).toBeInTheDocument();
  });

  it("should render right slot when provided", () => {
    render(<HeaderSlots right={<button>Menu</button>} />);
    expect(screen.getByRole("button", { name: "Menu" })).toBeInTheDocument();
  });

  it("should render all three slots simultaneously", () => {
    render(
      <HeaderSlots
        left={<span>Gauche</span>}
        center={<span>Centre</span>}
        right={<span>Droite</span>}
      />,
    );
    expect(screen.getByText("Gauche")).toBeInTheDocument();
    expect(screen.getByText("Centre")).toBeInTheDocument();
    expect(screen.getByText("Droite")).toBeInTheDocument();
  });
});
