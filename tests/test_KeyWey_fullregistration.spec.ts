import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/GeneralDataSteps/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/GeneralDataSteps/personalDetails";
import { ResidenceAdress } from "../pageObjects/fullRegistration/GeneralDataSteps/residenceAdress";
import { TinPage } from "../pageObjects/fullRegistration/GeneralDataSteps/tin";
import { KeyWeyFullREgistration } from "../pageObjects/fullRegistration/KeyWey/keyWeyFullRegistrationPage";
import { TSCPage } from "../pageObjects/fullRegistration/GeneralDataSteps/tsc";
import { VerificationCenter } from "../pageObjects/verificationStep/verificationCenter";
import { MainFinaltoPage } from "../pageObjects/components/finalto/mainPage";
import { GetLocalizationText } from "../pageObjects/localization/getLocalizationKey";
import { MiddleScorePopup } from "../pageObjects/components/popups/middleScorePopup";
import { LowScorePopup } from "../pageObjects/components/popups/lowScorePopup";

let KeyWeyCountry = "Poland";

test.describe('Key Wey company full registration', () => {
    const language = "Eng";

    test.beforeEach(async ({ page }, testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 60000);
        const localization = new GetLocalizationText(page);
        let shortRegistration = new ShortRegistrationPage(page);
        await shortRegistration.goto();
        await shortRegistration.createCFDUser();
        await new SuccessAccountCreationPopup(page).continueRegistration();
        let residencePage = new ResidenceAndCitizenship(page);
        await residencePage.changeCountry(KeyWeyCountry);
        await residencePage.fillResidenceAndCitizenshipSte();
        let changeCompanyPopup = new ChangeCompanyPopup(page);
        await changeCompanyPopup.getPopupText() === await localization.getLocalizationText("changeCompanypopup", language);
        await changeCompanyPopup.proceedChangeCompanyPopup();
        await new PersonalDetails(page).fillPersonalDetails("KeyWey");
        await new ResidenceAdress(page).fillResidenceAdress();
        await new TinPage(page).fillTinPage();
    })

    test('KW HIGH SCORE', async ({ page }) => {
        await new TSCPage(page).acceptAllTerms();
        const scoring = "High";
        new KeyWeyFullREgistration(page).fillQuiz(scoring);
        await new VerificationCenter(page).checkElementsOnVerificationScreen();
        await new MainFinaltoPage(page).checkQaFinaltoUrl(); 
    })

    test('KW MiDDLE SCORE', async ({ page }) => {
        await new TSCPage(page).acceptAllTerms();
        const scoring = "Middle";
        new KeyWeyFullREgistration(page).fillQuiz(scoring);
        let middleScorePopup = new MiddleScorePopup(page);
        const localization = new GetLocalizationText(page);
        await middleScorePopup.getPopupText() === await localization.getLocalizationText("middleScorePopup", language);
        await middleScorePopup.acceptMiddleScorePopup();
        await new VerificationCenter(page).checkElementsOnVerificationScreen();
        await new MainFinaltoPage(page).checkQaFinaltoUrl(); 
    })

    test('KW LOW SCORE', async ({ page }) => {
        await new TSCPage(page).acceptAllTerms();
        const scoring = "Low";
        new KeyWeyFullREgistration(page).fillQuiz(scoring);
        let lowScorePopup = new LowScorePopup(page);
        const localization = new GetLocalizationText(page);
        await lowScorePopup.getPopupText() === await localization.getLocalizationText("lowScorePopup", language);
        await lowScorePopup.acceptPopup();
        await new MainFinaltoPage(page).clickLowScorepopup();
    })
})