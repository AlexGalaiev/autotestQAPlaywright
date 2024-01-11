import { Page, Locator, expect } from "@playwright/test";
import { QuizAnswer } from "../QUIZ/getQUIZ";

let KeyWeyQUIZAnswers = "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_HighScore.json";

export class KeyWeyFullREgistration {
    readonly page: Page;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueBtn = page.locator("//span[contains(@class, 'relative')]");
    }

    async answerQuizQuestion(elementLocator) {
        await this.page.waitForLoadState();
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(KeyWeyQUIZAnswers);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(".question-answer-" + getAnswerQuiz + "").click();
    }

    async answerQuizQuestionMultiselect(elementLocator) {
        await this.page.waitForLoadState();
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(KeyWeyQUIZAnswers);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(".question-answer-" + getAnswerQuiz + "").click();
        await this.page.waitForSelector("//span[contains(@class, 'relative')]")
        await this.continueBtn.click();
    }

    async answerQuizQuestionText(elementLocator) {
        await this.page.waitForLoadState();
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(KeyWeyQUIZAnswers);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(getAnswerQuiz).pressSequentially('test')
        await this.page.waitForSelector("//span[contains(@class, 'relative')]")
        await this.continueBtn.click();
    }

}
