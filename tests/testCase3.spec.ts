import { test, expect } from '@playwright/test';

test('Переключение темы сайта', async ({ page }) => {
    await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
      await page.goto('/');
    });
  
    await test.step('Степ 1: Кликнуть на кнопку переключения стилей (солнце)', async () => {
      const moonButton = page.locator('//button[@class="clean-btn toggleButton_gllP"]'); 
      await moonButton.click(); 
    });

    await test.step('Степ 2: Проверить переключение стиля на темную тему', async () => {
        const sunButton = page.locator('//button[@class="clean-btn toggleButton_gllP"]'); 
        await expect(sunButton).toHaveAttribute('title', 'Switch between dark and light mode (currently dark mode)'); //Изменился значок кнопки переключения стилей на луну

        const rootElement = page.locator(':root');
        await expect(rootElement).toHaveAttribute('data-theme', 'dark'); //Основной фон стал темного цвета

        await expect(rootElement).toHaveCSS('--docsearch-text-color', '#f5f6f7'); //Основной текст на странице стал белого цвета
      });

      await test.step('Степ 3: Кликнуть на кнопку переключения стилей (луну)', async () => {
        const moonButton = page.locator('//button[@class="clean-btn toggleButton_gllP"]'); 
        await moonButton.click(); 
      });
  
      await test.step('Степ 4: Проверить переключение стиля на светлую тему', async () => {
          const sunButton = page.locator('//button[@class="clean-btn toggleButton_gllP"]'); 
          await expect(sunButton).toHaveAttribute('title', 'Switch between dark and light mode (currently light mode)'); //Изменился значок кнопки переключения стилей на солнце
  
          const rootElement = page.locator(':root');
          await expect(rootElement).toHaveAttribute('data-theme', 'light'); //Основной фон стал светлого цвета
  
          await expect(rootElement).toHaveCSS('--docsearch-text-color', '#1c1e21'); //Основной текст на странице стал черного цвета
        });
});