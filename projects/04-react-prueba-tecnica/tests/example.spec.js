// @ts-check
import { test, expect } from "@playwright/test"

const LOCALHOST_URL = "http://127.0.0.1:5173/";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});
