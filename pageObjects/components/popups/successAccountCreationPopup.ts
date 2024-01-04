import { Locator, Page, expect } from "@playwright/test";

export class SuccessAccountCreationPopup {
    page: Page;
    readonly getSuccessPopupBody: Locator;
    readonly getSuccessPopupHeader: Locator;
    readonly continueBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.getSuccessPopupBody = page.locator('css=#register_popup_body');
        this.getSuccessPopupHeader = page.locator("css=#register_popup_title");
        this.continueBtn = page.locator("css=#btn_register_popup_content_continue");
    }

    async continueRegistration() {
        expect(this.getSuccessPopupBody).toBeVisible;
        await this.continueBtn.click();
    }

    
}