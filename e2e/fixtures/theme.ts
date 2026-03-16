/* eslint-disable react-hooks/rules-of-hooks */

import { test as base, expect } from "@playwright/test";

// 1) Définition du type de la fixture
export interface ThemeHelper {
  set: (name: string) => Promise<void>;
  getToken: (token: string) => Promise<string>;
  expectTokenToChange: (token: string, previousValue: string) => Promise<void>;
}

// 2) Extension du test Playwright avec la fixture typée
export const test = base.extend<{
  theme: ThemeHelper;
}>({
  theme: async ({ page }, use) => {
    const helper: ThemeHelper = {
      async set(name: string) {
        await page.getByRole("combobox").selectOption(name);
        await expect(page.locator("html")).toHaveAttribute("data-theme", name);
      },

      async getToken(token: string) {
        return await page
          .locator("html")
          .evaluate(
            (el, token) => getComputedStyle(el).getPropertyValue(token).trim(),
            token,
          );
      },

      async expectTokenToChange(token: string, previousValue: string) {
        await expect
          .poll(async () => {
            return await this.getToken(token);
          })
          .not.toBe(previousValue);
      },
    };

    await use(helper);
  },
});

// 3) Réexport de expect pour cohérence
export { expect };
