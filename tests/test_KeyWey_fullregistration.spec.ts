import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/Registartion_MainPage/personalDetails";
import { ResidenceAdress } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAdress";
import { TinPage } from "../pageObjects/fullRegistration/Registartion_MainPage/tin";



test.beforeEach( async ({page}) =>{
    let shortRegistration = new ShortRegistrationPage(page);
        await shortRegistration.goto();
        await shortRegistration.createCFDUser();
        let successPopup = new SuccessAccountCreationPopup(page);
        await successPopup.continueRegistration();
        let residencePage = new ResidenceAndCitizenship(page);
        await residencePage.changeCountry("Poland");
        await residencePage.fillResidenceAndCitizenshipSte();
        let changeCompanyPopup = new ChangeCompanyPopup(page);
        await changeCompanyPopup.proceedChangeCompanyPopup();
        let personalDetails = new PersonalDetails(page);
        await personalDetails.fillPersonalDetails();
        let residenceAdrees = new ResidenceAdress(page);
        await residenceAdrees.fillResidenceAdress();
        let tinPage = new TinPage(page);
        await tinPage.fillTinPage();
})

test('Key Wey HIGH SCORE Full REgistration', async({ page }) => {
    console.log("edrer")

})