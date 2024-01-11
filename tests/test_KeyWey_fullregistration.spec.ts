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

let KeyWeyCountry = "Poland";

test.describe('Key Wey company full registration', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 60000);
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
        const scoring = "High";
        new KeyWeyFullREgistration(page).fillQuiz(scoring);
        await new VerificationCenter(page).checkElementsOnVerificationScreen();
        await new MainFinaltoPage(page).checkQaFinaltoUrl(); 
    })

    test('KW MiDDLE SCORE', async ({ page }) => {
        await new TSCPage(page).acceptAllTerms();
        const scoring = "Middle";
        new KeyWeyFullREgistration(page).fillQuiz(scoring);
        await new VerificationCenter(page).checkElementsOnVerificationScreen();
        await new MainFinaltoPage(page).checkQaFinaltoUrl(); 
    })




























})