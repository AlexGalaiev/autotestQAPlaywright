import { Page, Locator, expect } from "@playwright/test"

export class PersonalDetails {
    readonly page: Page;
    readonly firstName: Locator;
    readonly middleName: Locator; 
    readonly lastName: Locator; 
    readonly dateOfBirth: Locator;
    readonly maleCheckbox: Locator;
    readonly сontinueBtn: Locator;
    readonly personalDetailsName: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstName = page.locator("css=#firstName");
        this.middleName = page.locator("css=#middleName");
        this.lastName = page.locator("css=#lastName");
        this.dateOfBirth = page.locator("css=[data-testid='CalendarIcon']");
        this.maleCheckbox = page.locator("css=#gender-radio-1");
        this.сontinueBtn = page.locator("xpath=//span[contains(@class, 'relative')]");
        this.personalDetailsName = page.locator("xpath=//h1");
    }

    async fillPersonalDetails(userName) {
        await this.page.waitForSelector("#firstName");
        await this.firstName.pressSequentially(userName);
        await this.middleName.pressSequentially(userName);
        await this.lastName.pressSequentially(userName);
        await this.dateOfBirth.dblclick();
        await this.maleCheckbox.click();
        await this.сontinueBtn.click();
    }


}