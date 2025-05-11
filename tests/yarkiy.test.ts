// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.yarkiy.ru/');

  // Ожидаем, что заголовок "содержит" подстроку.
  await expect(page).toHaveTitle(/Яркий фотомаркет/);
});

test('test banner', async ({ page }) => {
  await page.goto('https://www.yarkiy.ru/');
  await page.locator('.topBannerComponent_card___A32Y > a > span > img').first().click();
  // Ожидаем, что урл "содержит" подстроку.
  await expect.soft(page).toHaveURL(/cashback2025/);
  // Ожидаем, что заголовок "содержит" подстроку.
  await expect(page).toHaveTitle(/Возвращаем деньги/);
})
