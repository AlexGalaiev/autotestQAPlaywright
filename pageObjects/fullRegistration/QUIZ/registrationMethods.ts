import {Page, Locator } from "@playwright/test";
import { QuizAnswer } from "../QUIZ/getQuiz";

const scoreQuizes = {
    High_Cysec: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_HighScore.json",
    Middle_Cysec: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_Middle_score.json",
    Low_Cysec: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_LowScore.json"
}
export class RegistartionMethods{
    readonly page: Page;
    readonly continueBtn: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.continueBtn = page.locator("//span[contains(@class, 'relative')]");
    }

    async answerQuizQuestion(elementLocator: string, scoreLevel) {
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(scoreQuizes[scoreLevel]);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(".question-answer-" + getAnswerQuiz + "").click();
    }

    async answerQuizQuestionMultiselect(elementLocator: string, scoreLevel) {
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(scoreQuizes[scoreLevel]);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(".question-answer-" + getAnswerQuiz + "").click();
        await this.page.waitForSelector("//span[contains(@class, 'relative')]")
        await this.continueBtn.click();
    }

    async answerQuizQuestionText(elementLocator: string, scoreLevel) {
        await this.page.waitForSelector("//article[contains(@class, '" + elementLocator + "')]");
        let getQUIZ = new QuizAnswer(scoreQuizes[scoreLevel]);
        let getAnswerQuiz = await getQUIZ.getDataFromJson(elementLocator);
        await this.page.locator(getAnswerQuiz).pressSequentially('test')
        await this.page.waitForSelector("//span[contains(@class, 'relative')]")
        await this.continueBtn.click();
    }
}