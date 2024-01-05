import { Page, Locator, expect } from "@playwright/test"

export class PersonalDetails {
    page: Page;
    firstName: Locator;
    middleName: Locator; 
    lastName: Locator; 
    dateOfBirth: Locator;
    maleCheckbox: Locator;
    сontinueBtn: Locator;
    personalDetailsName: Locator;

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

    async fillPersonalDetails() {
        expect(this.personalDetailsName).toBeVisible;
        await this.firstName.pressSequentially('autotestName');
        await this.middleName.pressSequentially('autotestMiddleName');
        await this.lastName.pressSequentially('autotestLastName');
<<<<<<< HEAD
        await this.dateOfBirth.dblclick();
=======
        await this.dateOfBirth.pressSequentially('04-06-1990')
>>>>>>> 22c17d5 (4 commit)
        await this.maleCheckbox.click();
        await this.сontinueBtn.click();
    }


}