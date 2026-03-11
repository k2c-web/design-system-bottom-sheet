import { test, expect } from "@playwright/test";

test("bottom sheet opens when clicking the button", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Ouvrir la bottom sheet" }).click();

  // Exemple : vérifier que la bottom sheet apparaît
  await expect(page.getByTestId("bottom-sheet")).toBeVisible();
});
