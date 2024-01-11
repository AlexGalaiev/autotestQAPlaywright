import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/Registartion_MainPage/personalDetails";
import { ResidenceAdress } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAdress";
import { TinPage } from "../pageObjects/fullRegistration/Registartion_MainPage/tin";
import { KeyWeyFullREgistration } from "../pageObjects/fullRegistration/KeyWey/keyWeyFullRegistrationPage";
import { TSCPage } from "../pageObjects/fullRegistration/Registartion_MainPage/tsc";
import { VerificationCenter } from "../pageObjects/verificationStep/verificationCenter";
import { MainFinaltoPage } from "../pageObjects/components/finalto/mainPage";

let KeyWeyCountry = "Poland";

test.describe('Key Wey company full registration', () => {
    test.beforeEach(async ({ page }) => {
        let shortRegistration = new ShortRegistrationPage(page);
        await shortRegistration.goto();
        await shortRegistration.createCFDUser();
        await new SuccessAccountCreationPopup(page).continueRegistration();
        let residencePage = new ResidenceAndCitizenship(page);
        await residencePage.changeCountry(KeyWeyCountry);
        await residencePage.fillResidenceAndCitizenshipSte();
        await new ChangeCompanyPopup(page).proceedChangeCompanyPopup();
        
        await new PersonalDetails(page).fillPersonalDetails("KeyWey");
        await new ResidenceAdress(page).fillResidenceAdress();
        await new TinPage(page).fillTinPage();
    })

    test('KW HIGH SCORE', async ({ page }) => {
        await new TSCPage(page).acceptAllTerms();
        let keyWeyRegisration = new KeyWeyFullREgistration(page);
        await keyWeyRegisration.answerQuizQuestion("employment");
        await keyWeyRegisration.answerQuizQuestion("annual_income");
        await keyWeyRegisration.answerQuizQuestion("amount_intend_to_invest");
        await keyWeyRegisration.answerQuizQuestion("net_worth");
        await keyWeyRegisration.answerQuizQuestion("yearly_income");
        await keyWeyRegisration.answerQuizQuestion("funds_source");
        await keyWeyRegisration.answerQuizQuestionMultiselect("origin_of_funds");
        await keyWeyRegisration.answerQuizQuestionText("funds_source_options");
        await keyWeyRegisration.answerQuizQuestion("different_withdrawals");
        await keyWeyRegisration.answerQuizQuestion("cfd_trade_experience");
        await keyWeyRegisration.answerQuizQuestion("yearly_invested_amount");
        await keyWeyRegisration.answerQuizQuestion("feature_trade_experience");
        await keyWeyRegisration.answerQuizQuestion("shares_trade_experience");
        await keyWeyRegisration.answerQuizQuestion("average_leverage");
        await keyWeyRegisration.answerQuizQuestionMultiselect("qualification_level");
        await keyWeyRegisration.answerQuizQuestion("where_can_you_sell_cfds");
        await keyWeyRegisration.answerQuizQuestion("trading_purpose");
        await keyWeyRegisration.answerQuizQuestion("limit_loss_type_of_order");
        await keyWeyRegisration.answerQuizQuestion("bull_market");
        await keyWeyRegisration.answerQuizQuestion("loss_of_capital_reaction");
        await new VerificationCenter(page).checkElementsOnVerificationScreen();
        await new MainFinaltoPage(page).checkQaFinaltoUrl();
    })
})