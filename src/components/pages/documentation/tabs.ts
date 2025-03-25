import { Component } from '../../../core/component';

export class Tabs extends Component {
    private LOCATORS = {
        tab: (title: string) =>  this.locator.locator(`//li[text()="${title}"]`),
        tabActive: this.locator.locator('//li[contains(@class, "tabs__item--active")]'),
        content: this.locator.locator('//div[@role="tabpanel" and not(@hidden)]'),
    }

    public async clickTab(title: string): Promise<void> {
        await this.LOCATORS.tab(title).click();
    }

    public async getContent(): Promise<string> {
        await this.LOCATORS.content.waitFor();

        return this.LOCATORS.content.textContent();
    }

    public async getTabActiveText(): Promise<string> {
        await this.LOCATORS.tabActive.waitFor();

        return this.LOCATORS.tabActive.textContent();
    }
}