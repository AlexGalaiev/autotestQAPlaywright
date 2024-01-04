import { Page, Locator, expect } from '@playwright/test';

export class ChangeCompanyPopup {
    page: Page;
    popupBody: Locator;
    continueRegistration: Locator;


    constructor(page: Page) {
        this.page = page;
        this.popupBody = page.locator("xpath=//div[@id='popup_licence_change_body']");
        this.continueRegistration = this.popupBody.locator("xpath=//span[@class='relative']");
    }

    async proceedChangeCompanyPopup() {
        expect(this.popupBody).toBeVisible;
        await this.continueRegistration.click();
    }

}