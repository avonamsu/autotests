import { test, expect } from '@playwright/test';

test('Проверка ссылок блоков в футере', async ({ page }) => {
    await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
      await page.goto('/');
    });
  
    await test.step('Степ 1: Проверить ссылки для блока Learn', async () => {
      const Learn = page.locator('(//div[@class="col footer__col"])[1]'); 
      await expect(Learn).toBeVisible(); //блок Learn отображается
      
      await expect(page.locator('(//a[@class="footer__link-item"])[1]')).toHaveAttribute('href', '/docs/intro');
      await expect(page.locator('(//a[@class="footer__link-item"])[2]')).toHaveAttribute('href', 'https://learn.microsoft.com/en-us/training/modules/build-with-playwright/');
      await expect(page.locator('(//a[@class="footer__link-item"])[3]')).toHaveAttribute('href', '/community/learn-videos');
      await expect(page.locator('(//a[@class="footer__link-item"])[4]')).toHaveAttribute('href', '/community/feature-videos');
    });

    await test.step('Степ 2: Проверить ссылки для блока Community', async () => {
        const Learn = page.locator('(//div[@class="col footer__col"])[2]'); 
        await expect(Learn).toBeVisible(); //блок Community отображается
        
        await expect(page.locator('(//a[@class="footer__link-item"])[5]')).toHaveAttribute('href', 'https://stackoverflow.com/questions/tagged/playwright');
        await expect(page.locator('(//a[@class="footer__link-item"])[6]')).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
        await expect(page.locator('(//a[@class="footer__link-item"])[7]')).toHaveAttribute('href', 'https://twitter.com/playwrightweb');
        await expect(page.locator('(//a[@class="footer__link-item"])[8]')).toHaveAttribute('href', 'https://www.linkedin.com/company/playwrightweb');
    });

    await test.step('Степ 3: Проверить ссылки для блока More', async () => {
        const Learn = page.locator('(//div[@class="col footer__col"])[3]'); 
        await expect(Learn).toBeVisible(); //блок Community отображается
        
        await expect(page.locator('(//a[@class="footer__link-item"])[9]')).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
        await expect(page.locator('(//a[@class="footer__link-item"])[10]')).toHaveAttribute('href', 'https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg');
        await expect(page.locator('(//a[@class="footer__link-item"])[11]')).toHaveAttribute('href', 'https://dev.to/playwright');
        await expect(page.locator('(//a[@class="footer__link-item"])[12]')).toHaveAttribute('href', '/community/ambassadors');
    });
});