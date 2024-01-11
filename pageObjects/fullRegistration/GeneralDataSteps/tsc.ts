import {Page, Locator, expect } from "@playwright/test";

export class TSCPage {
    readonly page: Page;
    readonly tscCheckbox: Locator;
    readonly shareDealingConsent: Locator;
    readonly shareDealingConsentAgreement: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.tscCheckbox = page.locator("xpath=//input[@id='default-checkbox']");
        this.shareDealingConsent = page.locator("xpath=//input[@id='shareDealingConsent']");
        this.shareDealingConsentAgreement = page.locator("xpath=//input[@id='shareDealingConsentAgreement']");
        this.continueBtn = page.locator("//span[contains(@class, 'relative')]");
    }

    async acceptAllTerms(){
        await this.page.waitForSelector("//input[@id='default-checkbox']");
        await this.page.waitForTimeout(3000);
        await this.tscCheckbox.click();
        await this.shareDealingConsentAgreement.click();      
        await this.shareDealingConsent.click();
        await this.continueBtn.click();
    }
}