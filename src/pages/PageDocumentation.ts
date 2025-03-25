import { Container } from '../core/container';
import { Tabs } from '../components/pages/documentation/tabs';

export class PageDocumentation extends Container {
    private LOCATORS = {
        title: this.page.locator('h1'),
        wrapperTabs: this.page.locator('//div[contains(@class, "tabs-container")][1]'),
    };

    public Tabs = new Tabs(this.LOCATORS.wrapperTabs, this.page);

    public async getTitle(): Promise<string> {
        await this.LOCATORS.title.waitFor();

        return this.LOCATORS.title.textContent();
    }
}