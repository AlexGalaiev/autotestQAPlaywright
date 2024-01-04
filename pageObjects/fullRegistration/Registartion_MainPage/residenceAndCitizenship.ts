import { Page, Locator, expect } from "@playwright/test";

export class ResidenceAndCitizenship {
    page: Page;
    residenceAndCitizenshipName: Locator;
    country: Locator;
    countryInputField: Locator;
    countryInputChoseCountry: Locator;
    usReport: Locator;
    continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.residenceAndCitizenshipName = page.locator('xpath=//h1');
        this.country = page.locator("css=#resi_country");
        this.countryInputField = page.locator("xpath=//input[@name='country']");
        this.countryInputChoseCountry = page.locator("xpath=//li[contains(@class, 'relative')]");
        this.usReport = page.locator("css=#us_reportable");
        this.continueBtn = page.locator("xpath=//span[contains(@class, 'relative')]")
    }

    async openCountryDropDown() {
        setTimeout(async () => {
          const dropdown = await this.page.$('#resi_country');
          await dropdown?.click();
        }, 2000);
      }
      
      async changeCountry(countryOfUser) {
        expect(this.residenceAndCitizenshipName).toBeVisible;
        let countryDropDown = this.openCountryDropDown();
        await countryDropDown;
        await this.countryInputField.pressSequentially(countryOfUser);
        await this.countryInputChoseCountry.click();
      }
      
      async fillResidenceAndCitizenshipSte() {
        await this.usReport.click();
        await this.continueBtn.click();
      }






}
