import {Page, Locator, expect} from "@playwright/test";

export class VerificationCenter {
    readonly page: Page;
    readonly qrCode: Locator;
    readonly verifyLater: Locator;
    readonly uploadManually: Locator;

    constructor(page: Page) {
        this.page = page;
        this.qrCode = page.locator("#identity_qr");
        this.verifyLater = page.locator("#identity_v_later_btn");
        this.uploadManually = page.locator("#identity_upload_btn");
    }
    
    async checkElementsOnVerificationScreen(){
        await this.page.waitForLoadState();
        expect(this.qrCode).toBeVisible;
        expect(this.verifyLater).toBeVisible;
        await this.verifyLater.click();
    }
}