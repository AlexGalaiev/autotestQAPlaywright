import { Page, Locator, expect } from '@playwright/test';
import { GetLocalizationText } from '../../localization/getLocalizationKey';

export class ChangeCompanyPopup {
    readonly page: Page;
    readonly popupBody: Locator;
    readonly continueRegistration: Locator;
    readonly popupText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.popupBody = page.locator("css=#popup_licence_change_body");
        this.continueRegistration = page.locator("css=#popup_licence_change_btn");
        this.popupText = page.locator("#popup_licence_change_content");
    }

    async proceedChangeCompanyPopup() {
        expect(this.popupBody).toBeVisible;
        await this.continueRegistration.click();
    }
    async getPopupText(){
        return this.popupText.textContent();
    }
}