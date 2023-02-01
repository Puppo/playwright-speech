import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.delpuppo.net/");
  await page.getByRole("link", { name: "Skills" }).click();
  await expect(
    page.getByText(
      "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"
    )
  ).toBeVisible();
  await page.getByRole("button", { name: "Go to top" }).click();
  await page.getByRole("link", { name: "Work Experiences" }).click();
  await expect(
    page.getByRole("heading", { name: "Full-Stack Developer", exact: true })
  ).toBeVisible();
  await page.getByRole("button", { name: "Go to top" }).click();
  await page.getByRole("link", { name: "Talks" }).click();
  await expect(
    page.getByText(
      "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE"
    )
  ).toBeVisible();
  await page.getByRole("button", { name: "Go to top" }).click();
  await page.getByRole("link", { name: "Contact Me", exact: true }).click();
  await expect(page.locator("text=Treviso, Italy")).toBeVisible();
  await page.getByRole("button", { name: "Go to top" }).click();
  await page.getByRole("link", { name: "<Puppo/>" }).click();
  await expect(
    page.getByRole("heading", { name: "Hi all, I'm Luca 👋" })
  ).toBeVisible();
});
