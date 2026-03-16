import { test, expect } from "./fixtures/bottomSheet";

test.describe("BottomSheet animations", () => {
  test("animates in", async ({ page, bottomSheet }) => {
    await page.goto("/");

    // Avant ouverture
    await expect(page.getByTestId("bottom-sheet")).toBeHidden();

    // Ouvrir
    await bottomSheet.open();

    // Vérifier que la position finale est stable
    const y1 = await bottomSheet.y();
    await page.waitForTimeout(50);
    const y2 = await bottomSheet.y();

    expect(Math.abs(y2 - y1)).toBeLessThan(1);
  });

  test("animates out", async ({ page, bottomSheet }) => {
    await page.goto("/");

    await bottomSheet.open();
    await bottomSheet.close();

    await expect(page.getByTestId("bottom-sheet")).toBeHidden();
  });
});
