import { Locator, Page, expect } from "@playwright/test";

export class SuccessAccountCreationPopup {
    page: Page;
    readonly getSuccessPopupBody: Locator;
    readonly getSuccessPopupHeader: Locator;
    readonly continueBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.getSuccessPopupBody = page.locator('css=.popup-modal');
        this.getSuccessPopupHeader = page.locator("xpath=//h2[contains(text(), 'Account created!')]");
        this.continueBtn = page.locator("xpath=//span[text()='Continue']");
    }

    async continueRegistration() {
        expect(this.getSuccessPopupBody).toBeVisible;
        await this.continueBtn.click();
    }

    
}