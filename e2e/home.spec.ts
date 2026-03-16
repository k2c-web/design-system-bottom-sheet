import { test, expect } from "@playwright/test";

test("homepage loads with design system UI", async ({ page }) => {
  await page.goto("/");
  //await page.pause();

  // Vérifie le header (h1)
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Design System",
  );

  // Vérifie le sélecteur de thème
  await expect(page.getByRole("combobox")).toBeVisible();

  // Vérifie la section Bottom Sheet
  await expect(
    page.getByRole("heading", { name: /bottom sheet/i }),
  ).toBeVisible();

  // Vérifie le bouton
  await expect(
    page.getByRole("button", { name: /ouvrir la bottom sheet/i }),
  ).toBeVisible();
});
