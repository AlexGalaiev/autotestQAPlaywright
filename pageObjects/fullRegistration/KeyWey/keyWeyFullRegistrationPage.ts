import {Page, Locator} from "@playwright/test";
import { QuizAnswer } from "../QUIZ/QUIZAnswer";

let KeyWeyQUIZAnswers = "pageObjects\\fullRegistration\\jsonRegistration\\keyWey_CySec_HighScore.json";

export class KeyWeyFullREgistration {
    readonly page: Page;
    readonly tscCheckbox: Locator;
    readonly shareDealingConsent: Locator;
    readonly shareDealingConsentAgreement: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.tscCheckbox = page.locator("css=#default-checkbox");
        this.shareDealingConsent = page.locator("css=#shareDealingConsent");
        this.shareDealingConsentAgreement = page.locator("css=#shareDealingConsentAgreement");
        this.continueBtn = page.locator("//span[contains(@class, 'relative')]");
    }

    async acceptAllTerms(){
        await this.page.waitForSelector("#default-checkbox");
        await this.tscCheckbox.check();
        await this.shareDealingConsent.click({timeout:1000});
        await this.shareDealingConsentAgreement.click({timeout:1000});
        await this.continueBtn.click();
    }

    async answerQuizQuestion(elementLocator){
        await this.page.waitForSelector("//article[contains(@class, '"+elementLocator+"')]");
        let getAnswer = new QuizAnswer(KeyWeyQUIZAnswers);
        console.log(getAnswer.getDataFromJson(elementLocator))
        await this.page.locator("//div[contains(@class, '"+getAnswer.getDataFromJson(elementLocator)+"')]").click();
        
    }


}