# Design System — Tailwind v4 • CSS Tokens • tailwind-variants

This repository contains a modern, scalable Design System built with **Tailwind v4**, **CSS variables**, and **tailwind-variants**.  
The goal is to provide a clean, maintainable foundation for building consistent, elegant, and theme‑aware user interfaces.

---

## 🚀 Tech Stack

- **Vite** — fast development environment
- **React + TypeScript** — strict typing and modern DX
- **Tailwind v4** — atomic styling with native design tokens
- **CSS Variables** — dynamic theming (light, forest, ocean, neon…)
- **tailwind-variants** — typed variants, slots, and component composition
- **Jotai** — minimal global state (e.g., active theme)

---

## 🎨 Design System Architecture

The DS is structured around three core layers:

### **1. Tokens**

Defined via `:root` and `data-theme`, they control:

- `--bg`, `--surface`, `--fg`
- `--accent`, `--accent-fg`
- `--border`, `--glow`

Each theme overrides **values**, never structure.

---

### **2. Primitives**

Low‑level, typed UI components built with `tailwind-variants`:

- `Button`
- `Card`
- `Badge`
- `Alert`
- `Input`
- `BottomSheet` (compound component)
- `Modal`

Each primitive exposes:

- **Variants** (size, color, state…)
- **Slots** (root, header, body, footer…)
- **Strict TypeScript types** via `VariantProps`

---

### **3. Patterns**

The DS follows modern UI architecture patterns:

- Compound components
- Slot‑based composition
- Responsive variants
- Data‑attribute variants
- Zero custom CSS (Tailwind‑only)
- Predictable, theme‑aware styling

---

## 📦 Example — Card Component

```tsx
const { root, header, body, footer } = card({ shadow: "md" });

return (
  <div className={root()}>
    <div className={header()}>Card Title</div>
    <div className={body()}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div className={footer()}>Footer content</div>
  </div>
);
```
