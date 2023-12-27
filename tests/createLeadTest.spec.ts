import { expect, test } from "@playwright/test";
import { SuccessAccountCreationPopup } from "../pageObjects/components/popups/successAccountCreationPopup";
import { ShortRegistrationPage } from "../pageObjects/createAccount";
import { ProjectLocalizationEN } from "../pageObjects/localization/localization_en.ts";



test('Create CFD user via short registration form', async({ page }) => {
    let shortRegistrationForm = new ShortRegistrationPage(page);
    let projectLocalization = new ProjectLocalizationEN();
    await shortRegistrationForm.goto();
    await shortRegistrationForm.createCFDUser();
    let successPopup = new SuccessAccountCreationPopup(page);
    await expect(successPopup.getSuccessPopupHeader).toBeVisible;
    await expect(successPopup.getSuccessPopupHeader).toHaveText(projectLocalization.getValue("successPopupHeader"));
})
