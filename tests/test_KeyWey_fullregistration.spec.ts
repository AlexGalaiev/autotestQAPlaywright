import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/Registartion_MainPage/personalDetails";


test.beforeEach( async ({page}) =>{
    let shortRegistration = new ShortRegistrationPage(page);
    await shortRegistration.goto();
    await shortRegistration.createCFDUser();
})

test('Key Wey HIGH SCORE Full REgistration', async({ page }) => {
    let successPopup = new SuccessAccountCreationPopup(page);
    await successPopup.continueRegistration();
    
    let residencePage = new ResidenceAndCitizenship(page);
    await residencePage.changeCountry("Poland");
    await residencePage.fillResidenceAndCitizenshipSte();
    
    let changeCompanyPopup = new ChangeCompanyPopup(page);
    changeCompanyPopup.proceedChangeCompanyPopup();
    
    let personalDetails = new PersonalDetails(page);
    personalDetails.fillPersonalDetails();

})