import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://delpuppo.net/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/luca del puppo | developer portfolio/i);
});

test("change the theme", async ({ page }) => {
  await page.goto("https://delpuppo.net/");

  await page.locator("li:nth-child(8) > a").click();

  const darkMode1 = await page.locator(".dark-mode").count();
  await expect(darkMode1).toBeGreaterThan(0);

  await page.locator("li:nth-child(8) > a").click();

  const darkMode2 = await page.locator(".dark-mode").count();
  await expect(darkMode2).toBe(0);
});
