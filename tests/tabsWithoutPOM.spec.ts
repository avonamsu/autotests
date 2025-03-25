import { test, expect } from '@playwright/test';

test('Проверка элементов на странице Installation', async ({ page }) => {
    await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
        await page.goto('/docs/intro');
    });

    const { tabsContainer, tabActive, tabContent } = await test.step('Степ 1: Проверить дефолтное состояние элементов', async () => {
        const tabsContainer = page.locator('//h2[text()="Installing Playwright"]/following-sibling::div[contains(@class, "tabList")][1]');
        const tabActive = tabsContainer.locator('//li[contains(@class, "tabs__item--active")]');
        const tabContent = tabsContainer.locator('//div[@role="tabpanel" and not(@hidden)]');

        await expect(tabActive, 'Активный таб "npm"').toHaveText('npm');
        await expect(tabContent, 'В контенте отображается команда "npm init playwright@latest"').toHaveText('npm init playwright@latest');

        return { tabsContainer, tabActive, tabContent };
    });

    await test.step('Степ 2: Кликнуть на таб yarn', async () => {
        await tabsContainer.locator('//li[text()="yarn"]').click();

        await expect(tabActive, 'Активный таб "yarn"').toHaveText('yarn');
        await expect(tabContent, 'В контенте отображается команда "yarn create playwright"').toHaveText('yarn create playwright');
    });

    await test.step('Степ 3: Кликнуть на таб pnpm', async () => {
        await tabsContainer.locator('//li[text()="pnpm"]').click();

        await expect(tabActive, 'Активный таб "pnpm"').toHaveText('pnpm');
        await expect(tabContent, 'В контенте отображается команда "pnpm create playwright"').toHaveText('pnpm create playwright');
    });
});