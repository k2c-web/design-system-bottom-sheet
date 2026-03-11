import { test, expect } from "./fixtures/theme";

const themeExpectedValues = {
  day: {
    "--bg": "#e5f0ff",
    "--fg": "#1f2933",
  },
  night: {
    "--bg": "#050509",
    "--fg": "#000",
  },
  forest: {
    "--bg": "#07140a",
    "--fg": "#0a1f12",
  },
  ocean: {
    "--bg": "#071524",
    "--fg": "#0a1624",
  },
  neon: {
    "--bg": "#020008",
    "--fg": "#06240a",
  },
};

test("themes apply correct CSS values", async ({ page, theme }) => {
  await page.goto("/");

  for (const [name, tokens] of Object.entries(themeExpectedValues)) {
    await theme.set(name);

    for (const [token, expected] of Object.entries(tokens)) {
      const value = await theme.getToken(token);
      expect(value).toBe(expected);
    }
  }
});
