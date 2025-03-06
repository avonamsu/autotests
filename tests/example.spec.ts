import { test, expect } from '@playwright/test';

test('buttoncklick', async ({page}) =>
{
  await page.goto('https://playwright.dev/'); //переход на главную

  const button = page.locator('text=Get started'); 
  await button.click(); //клик по кнопке Get started

  await expect(page).toHaveURL('https://playwright.dev/docs/intro'); //проверка url страницы
  await expect(page).toHaveTitle('Installation | Playwright'); //проверка title страницы

  const buttonNextOne = page.locator('.pagination-nav__sublabel'); 
  await buttonNextOne.click();

  await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests'); //проверка url страницы
  await expect(page).toHaveTitle('Writing tests | Playwright'); //проверка title страницы

  const buttonNextTwo = page.locator('a.pagination-nav__link--next'); 
  await buttonNextTwo.click(); 

  await expect(page).toHaveURL('https://playwright.dev/docs/codegen-intro'); //проверка url страницы
  await expect(page).toHaveTitle('Generating tests | Playwright'); //проверка title страницы
});