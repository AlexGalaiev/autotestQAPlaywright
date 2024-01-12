import {Page, Locator, expect} from "@playwright/test";

export class MainFinaltoPage {
    readonly page: Page;
    readonly addFundsPopup: Locator;
    readonly lowScorePopup: Locator;
    readonly lowScoreBtn: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.addFundsPopup = page.locator("//div[contains(@class, 'autotests__popup-btn-close')]");
        this.lowScorePopup = page.locator("//div[contains(@class, 'message-box')]");
        this.lowScoreBtn = page.locator("//div[contains(@class, 'actions')]/button");
    }

    async checkQaFinaltoUrl(){
        await this.page.waitForTimeout(7000);
        await this.page.waitForLoadState();
        let currentUrl = await this.page.url();
        expect(currentUrl).toContain("https://cosmos-capex-live.az-qa.com/trading-platform");
    }
    
    async clickLowScorepopup(){
        await this.page.waitForTimeout(7000);;
        await this.lowScoreBtn.click();}
    }