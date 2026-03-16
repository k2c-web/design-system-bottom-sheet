// src/components/ThemeSwitcher/ThemeSwitcher.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "jotai";
import { ThemeSwitcher } from "./ThemeSwitcher";

// helper pour wrapper avec le Provider Jotai
const renderWithProvider = (ui: React.ReactElement) =>
  render(<Provider>{ui}</Provider>);

describe("ThemeSwitcher", () => {
  it("should render all 6 themes", () => {
    renderWithProvider(<ThemeSwitcher />);
    expect(screen.getByText("Thème Day")).toBeInTheDocument();
    expect(screen.getByText("Thème Night")).toBeInTheDocument();
    expect(screen.getByText("Thème Solarized")).toBeInTheDocument();
    expect(screen.getByText("Thème Forest")).toBeInTheDocument();
    expect(screen.getByText("Thème Ocean")).toBeInTheDocument();
    expect(screen.getByText("Thème Neon")).toBeInTheDocument();
  });

  it("should set data-theme on <html> when changed", async () => {
    renderWithProvider(<ThemeSwitcher />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "night");
    expect(document.documentElement).toHaveAttribute("data-theme", "night");
  });

  it("should update selected value when theme changes", async () => {
    renderWithProvider(<ThemeSwitcher />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "forest");
    expect(screen.getByRole("combobox")).toHaveValue("forest");
  });
});
