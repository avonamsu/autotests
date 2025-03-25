import { expect, test } from '@playwright/test';
import { PageDocumentation} from '../src/pages/PageDocumentation';

test('Общие компоненты::Табы', async ({ page }) => {
    const pageDocumentation = await test.step('Прекондиция: открыть главную страницу playwright.dev/', async () => {
        const pageDocumentation = new PageDocumentation(page);

        await pageDocumentation.open('/docs/intro');

        return pageDocumentation;
    });

    const tabsContainer= await test.step('Степ 1: Проверить дефолтное состояние элементов', async () => {
        const tabsContainer = pageDocumentation.Tabs;
        const expectedContent = 'npm init playwright@latest';

        expect(await tabsContainer.getTabActiveText(), 'Активный таб "npm"').toBe('npm');
        expect(await tabsContainer.getContent(), 'В контенте отображается команда "npm init playwright@latest"').toBe(expectedContent);

        return tabsContainer;
    });

    await test.step('Степ 2: Кликнуть на таб yarn', async () => {
        await tabsContainer.clickTab('yarn');

        const expectedContent = 'yarn create playwright';

        expect(await tabsContainer.getTabActiveText(), 'Активный таб "yarn"').toBe('yarn');
        expect(await tabsContainer.getContent(), 'В контенте отображается команда "yarn create playwright"').toBe(expectedContent);
    });

    await test.step('Степ 3: Кликнуть на таб pnpm', async () => {
        await tabsContainer.clickTab('pnpm');

        const expectedContent = 'pnpm create playwright';

        expect(await tabsContainer.getTabActiveText(), 'Активный таб "pnpm"').toBe('pnpm');
        expect(await tabsContainer.getContent(), 'В контенте отображается команда "pnpm create playwright"').toBe(expectedContent);
    });
});