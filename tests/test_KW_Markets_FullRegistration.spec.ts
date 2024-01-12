import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/GeneralDataSteps/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/GeneralDataSteps/personalDetails";
import { ResidenceAdress } from "../pageObjects/fullRegistration/GeneralDataSteps/residenceAdress";
import { TinPage } from "../pageObjects/fullRegistration/GeneralDataSteps/tin";
import { GetLocalizationText } from "../pageObjects/localization/getLocalizationKey";


let KWMarketsCountry = "United Arab Emirates";

test.describe('Key Wey Markets company full registration', () => {
    const language = "Eng";

    test.beforeEach(async ({ page }, testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 60000);
        const localization = new GetLocalizationText(page);
        let shortRegistration = new ShortRegistrationPage(page);
        await shortRegistration.goto();
        await shortRegistration.createCFDUser();
        await new SuccessAccountCreationPopup(page).continueRegistration();
        let residencePage = new ResidenceAndCitizenship(page);
        await residencePage.changeCountry(KWMarketsCountry);
        await residencePage.fillResidenceAndCitizenshipSte();
        let changeCompanyPopup = new ChangeCompanyPopup(page);
        await changeCompanyPopup.getPopupText() === await localization.getLocalizationText("changeCompanypopup", language);
        await changeCompanyPopup.proceedChangeCompanyPopup();
        await new PersonalDetails(page).fillPersonalDetails("KeyWey");
        await new ResidenceAdress(page).fillResidenceAdress();
        await new TinPage(page).fillTinPage();
    })

})