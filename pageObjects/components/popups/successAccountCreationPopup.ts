import { Locator, Page, expect } from "@playwright/test";

export class SuccessAccountCreationPopup {
    page: Page;
    readonly getSuccessPopupBody: Locator;
    readonly getSuccessPopupHeader: Locator;
    readonly clickContinueBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.getSuccessPopupBody = page.locator('css=.popup-modal');
        this.getSuccessPopupHeader = page.locator("xpath=//h2[contains(text(), 'Account created!')]")
        this.clickContinueBtn = page.locator()
    }

    async waitSuccessPopup(){
        expect(this.getSuccessPopupBody).toBeVisible;
    }
}