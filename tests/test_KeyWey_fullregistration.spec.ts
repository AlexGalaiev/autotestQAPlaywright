import { expect, test } from "@playwright/test";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ResidenceAndCitizenship } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAndCitizenship";
import { ChangeCompanyPopup } from "../pageObjects/components/popups/changeCompanyPopup";
import { PersonalDetails } from "../pageObjects/fullRegistration/Registartion_MainPage/personalDetails";
import { ResidenceAdress } from "../pageObjects/fullRegistration/Registartion_MainPage/residenceAdress";
import { TinPage } from "../pageObjects/fullRegistration/Registartion_MainPage/tin";

let KeyWeyCountry = "Poland";

test.beforeEach( async ({page}) =>{
    let shortRegistration = new ShortRegistrationPage(page);
        await shortRegistration.goto();
        await shortRegistration.createCFDUser();
        await new SuccessAccountCreationPopup(page).continueRegistration();
        let residencePage = new ResidenceAndCitizenship(page);
        await residencePage.changeCountry(KeyWeyCountry);
        await residencePage.fillResidenceAndCitizenshipSte();
        await new ChangeCompanyPopup(page).proceedChangeCompanyPopup();
        await new PersonalDetails(page).fillPersonalDetails();
        await new ResidenceAdress(page).fillResidenceAdress();
        await new TinPage(page).fillTinPage();
})

test('Key Wey HIGH SCORE Full REgistration', async({ page }) => {
    console.log("edrer")

})