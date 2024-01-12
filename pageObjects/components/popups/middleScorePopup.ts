import {Page, Locator} from "@playwright/test"

export class MiddleScorePopup{
    readonly page: Page;
    readonly middleScoreCheckbox: Locator;
    readonly middleScorePopupText: Locator;
    readonly middleScoreBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.middleScoreCheckbox = this.page.locator("#marginalFailConsent");
        this.middleScorePopupText = this.page.locator("#marginal_fail_consent_content");
        this.middleScoreBtn = this.page.locator("//button[@id='marginal_fail_consent_btn']");
    }

    async getPopupText(){
        return await this.middleScorePopupText.textContent();
    }

    async acceptMiddleScorePopup(){
        await this.middleScoreCheckbox.click();
        await this.middleScoreBtn.click();

    }
}