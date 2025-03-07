import { test, expect } from '@playwright/test';

test('Проверка элементов на странице Installation', async ({ page }) => {
  await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Степ 1: Нажать на кнопку Get Started', async () => {
    const button = page.locator('text=Get started'); 
    await button.click(); 
  });

  await test.step('Степ 2: Проверить переход на страницу Installation', async () => {
    await expect(page).toHaveURL('https://playwright.dev/docs/intro'); 
    await expect(page).toHaveTitle('Installation | Playwright'); 
  });

  await test.step('Степ 3: Нажать на кнопку Next на странице Installation', async () => {
    const buttonNext = page.locator('.pagination-nav__sublabel'); 
    await buttonNext.click(); 
  });

  await test.step('Степ 4: Проверить переход на страницу Writing tests', async () => {
    await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests'); 
    await expect(page).toHaveTitle('Writing tests | Playwright'); 
  });

  await test.step('Степ 5: Нажать на кнопку Next на странице Writing tests', async () => {
    const buttonNext = page.locator('a.pagination-nav__link--next'); 
    await buttonNext.click(); 
  });

  await test.step('Степ 6: Проверить переход на страницу Generating tests', async () => {
    await expect(page).toHaveURL('https://playwright.dev/docs/codegen-intro'); 
    await expect(page).toHaveTitle('Generating tests | Playwright'); 
  });

  await test.step('Степ 7: Нажать на кнопку Next на странице Generating tests', async () => {
    const buttonNext = page.locator('.pagination-nav__link--next'); 
    await buttonNext.click(); 
  });

  await test.step('Степ 8: Проверить переход на страницу Running and debugging tests', async () => {
    await expect(page).toHaveURL('https://playwright.dev/docs/running-tests'); 
    await expect(page).toHaveTitle('Running and debugging tests | Playwright'); 
  });
});