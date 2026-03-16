/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, expect } from "@playwright/test";

export interface BottomSheetHelper {
  open: () => Promise<void>;
  close: () => Promise<void>;
  y: () => Promise<number>;
  waitForAnimationEnd: () => Promise<void>;
}

export const test = base.extend<{
  bottomSheet: BottomSheetHelper;
}>({
  bottomSheet: async ({ page }, useFixture) => {
    const helper: BottomSheetHelper = {
      async open() {
        await page.getByRole("button", { name: /ouvrir/i }).click();
        await page.getByTestId("bottom-sheet").waitFor({ state: "visible" });
        await this.waitForAnimationEnd();
      },

      async close() {
        await page.getByTestId("bottom-sheet-close").click();
        await page.getByTestId("bottom-sheet").waitFor({ state: "detached" });
      },

      async y() {
        return await page
          .getByTestId("bottom-sheet")
          .evaluate((el) => el.getBoundingClientRect().y);
      },

      async waitForAnimationEnd() {
        await page.waitForFunction(() => {
          const el = document.querySelector('[data-testid="bottom-sheet"]');
          if (!el) return false;
          const anim = el.getAnimations()[0];
          return !anim || anim.playState === "finished";
        });
      },
    };

    await useFixture(helper);
  },
});

export { expect };
