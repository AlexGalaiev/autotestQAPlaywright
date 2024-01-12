import {Page, Locator, expect} from "@playwright/test";

export class LowScorePopup{
    readonly page: Page;
    readonly popupText: Locator;
    readonly popupBtn : Locator;

    constructor(page: Page){
        this.page = page;
        this.popupText = this.page.locator("#fail_quiz_content");
        this.popupBtn = this.page.locator("//div[contains(@class, 'justify-center')]//button");
    }

    async getPopupText(){
        return await this.popupText.textContent();
    }
    async acceptPopup(){
        return await this.popupBtn.click();
    }
}