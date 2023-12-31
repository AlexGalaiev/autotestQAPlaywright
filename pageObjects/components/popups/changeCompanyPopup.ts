import { Page, Locator, expect } from '@playwright/test';

export class ChangeCompanyPopup {
    readonly page: Page;
    readonly popupBody: Locator;
    readonly continueRegistration: Locator;


    constructor(page: Page) {
        this.page = page;
        this.popupBody = page.locator("css=#popup_licence_change_body");
        this.continueRegistration = page.locator("css=#popup_licence_change_btn");
    }

    async proceedChangeCompanyPopup() {
        expect(this.popupBody).toBeVisible;
        await this.continueRegistration.click();
    }

}