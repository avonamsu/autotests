import { test, expect } from '@playwright/test';

test('Модальное окно поиска', async ({ page }) => {
    await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
      await page.goto('/');
    });
  
    await test.step('Степ 1: Кликнуть на кнопку "Search"', async () => {
      const button = page.locator('//button[@class="DocSearch DocSearch-Button"]'); 
      await button.click(); 
    });
  
    await test.step('Степ 2: Проверить модальное окно поиска', async () => {
      const modal = page.locator('//div[@class="DocSearch-Modal"]');
      await expect(modal).toBeVisible(); //модальное окно открыто

      const searchBar = page.locator('//header[@class="DocSearch-SearchBar"]');
      await expect(searchBar).toBeVisible(); //отображается поле поиска

      const inputSearch = page.locator('//input[@class="DocSearch-Input"]');
      await expect(inputSearch).toHaveValue(''); //поле поиска пустое

      const descriptionSearch = page.locator('//p[@class="DocSearch-Help"]');
      await expect(descriptionSearch).toBeVisible(); //Отображается дескрипшен "No resent searches"
    });

    await test.step('Степ 3: Ввести текст "text" в поле поиска', async () => {
        const inputSearch = page.locator('//input[@class="DocSearch-Input"]');
        await inputSearch.fill('text'); //ввод текста
    });

    await test.step('Степ 4: Проверка текста в поле поиска', async () => {
        const reset = page.locator('//button[@class="DocSearch-Reset"]');
        await expect(reset).toBeVisible(); //В поле поиска отображается кнопка очистки (Х)

        const content = page.locator('//div[@class="DocSearch-Dropdown-Container"]');
        await expect(content).toBeVisible(); //Под полем поиска отображается найденный контент

        const buttonSee = page.locator('//section[@class="DocSearch-HitsFooter"]');
        await expect(buttonSee).toBeVisible(); //Доступна кнопка "See all ... results"
    });

    await test.step('Степ 5: В поле поиска нажать на кнопку очистки (Х)', async () => {
        const reset = page.locator('//button[@class="DocSearch-Reset"]');
        await reset.click();
    });

    
    await test.step('Степ 5: Проверка очищенного поля поиска', async () => {
        const searchBar = page.locator('//header[@class="DocSearch-SearchBar"]');
        await expect(searchBar).toBeVisible(); //отображается поле поиска
  
        const inputSearch = page.locator('//input[@class="DocSearch-Input"]');
        await expect(inputSearch).toHaveValue(''); //поле поиска пустое

        const reset = page.locator('//button[@class="DocSearch-Reset"]');
        await expect(reset).toBeHidden(); //В поле поиска не отображается кнопка очистки (Х)

        const descriptionSearch = page.locator('//p[@class="DocSearch-Help"]');
        await expect(descriptionSearch).toBeVisible(); //Отображается дескрипшен "No resent searches"
    });

    await test.step('Степ 6: Ввести текст "test" в поле поиска', async () => {
        const inputSearch = page.locator('//input[@class="DocSearch-Input"]');
        await inputSearch.fill('test'); //ввод текста
    });

    await test.step('Степ 7: Проверка текста в поле поиска', async () => {
        const reset = page.locator('//button[@class="DocSearch-Reset"]');
        await expect(reset).toBeVisible(); //В поле поиска отображается кнопка очистки (Х)

        const content = page.locator('//div[@class="DocSearch-Dropdown-Container"]');
        await expect(content).toBeVisible(); //Под полем поиска отображается найденный контент

        const buttonSee = page.locator('//section[@class="DocSearch-HitsFooter"]');
        await expect(buttonSee).toBeVisible(); //Доступна кнопка "See all ... results"
    });

    await test.step('Степ 8: Кликнуть по кнопке "See all ... results" в модальном окне', async () => {
        const buttonSee = page.locator('//section[@class="DocSearch-HitsFooter"]');
        await buttonSee.click();
    });

    await test.step('Степ 9: Проверить переход на страницу "Search results"', async () => {
        await expect(page).toHaveURL('https://playwright.dev/search?q=test'); 
        await expect(page).toHaveTitle('Search results for "test" | Playwright'); 
      });
});