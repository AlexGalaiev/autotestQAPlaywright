import { Page, Locator, expect } from "@playwright/test";
import { RegistartionMethods } from "../QUIZ/registrationMethods";

const scoreQuizes = {
    High: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_HighScore.json",
    Middle: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_Middle_score.json",
    Low: "pageObjects\\fullRegistration\\QUIZ\\keyWey_CySec_LowScore.json"
}

export class KeyWeyFullREgistration {
    readonly page: Page;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueBtn = page.locator("//span[contains(@class, 'relative')]");
    }

    async fillQuiz(scoring: string){
        let registration = new RegistartionMethods(this.page);
        await registration.answerQuizQuestion("employment",scoring);
        await registration.answerQuizQuestion("annual_income",scoring);
        await registration.answerQuizQuestion("amount_intend_to_invest",scoring);
        await registration.answerQuizQuestion("net_worth",scoring);
        await registration.answerQuizQuestion("yearly_income",scoring);
        await registration.answerQuizQuestion("funds_source",scoring);
        await registration.answerQuizQuestionMultiselect("origin_of_funds",scoring);
        await registration.answerQuizQuestionText("funds_source_options",scoring);
        await registration.answerQuizQuestion("different_withdrawals",scoring);
        await registration.answerQuizQuestion("cfd_trade_experience",scoring);
        await registration.answerQuizQuestion("yearly_invested_amount",scoring);
        await registration.answerQuizQuestion("feature_trade_experience",scoring);
        await registration.answerQuizQuestion("shares_trade_experience",scoring);
        await registration.answerQuizQuestion("average_leverage",scoring);
        await registration.answerQuizQuestionMultiselect("qualification_level",scoring);
        await registration.answerQuizQuestion("where_can_you_sell_cfds",scoring);
        await registration.answerQuizQuestion("trading_purpose",scoring);
        await registration.answerQuizQuestion("limit_loss_type_of_order",scoring);
        await registration.answerQuizQuestion("bull_market",scoring);
        await registration.answerQuizQuestion("loss_of_capital_reaction",scoring);
    }
}
