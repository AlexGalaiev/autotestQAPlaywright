import { Page, Locator, expect }  from "@playwright/test";

export class ResidenceAdress {
    readonly page: Page;
    readonly city: Locator;
    readonly street: Locator;
    readonly zip: Locator;
    readonly continueBtn: Locator;
    readonly residenceAdressStepName: Locator;

    constructor(page: Page){
        this.page = page;
        this.city = page.locator("css=#city");
        this.street = page.locator("css=#streetName");
        this.zip = page.locator("css=#zip");
        this.continueBtn = page.locator("css=[type='submit']");
        this.residenceAdressStepName = page.locator("xpath=//h1");
    }

    async fillResidenceAdress(){
        expect(this.residenceAdressStepName).toBeVisible;
        await this.city.pressSequentially("Bengaluru");
        await this.street.pressSequentially("DV Gundappa Road ");
        await this.zip.pressSequentially("560004");
        await this.continueBtn.click();
    }
}