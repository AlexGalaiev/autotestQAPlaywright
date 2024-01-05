import { Page, Locator, expect } from "@playwright/test";

export class TinPage {
    page: Page;
    primaryTin: Locator;
    continueBtn: Locator;
    tinPageHeader: Locator;

    constructor(page: Page){
        this.page = page;
        this.tinPageHeader = page.locator("xpath=//h1")
        this.primaryTin = page.locator("css=#primaryTin");
        this.continueBtn = page.locator("xpath=//span[contains(@class, 'relative')]");
    }

    async fillTinPage(){
        expect(this.tinPageHeader).toBeVisible;
        await this.primaryTin.pressSequentially("1111111111");
        await this.continueBtn.click();
    }
}