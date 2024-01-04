import { Page, Locator } from "@playwright/test"

export class PersonalDetails {
    page: Page;
    firstName: Locator;
    middleName: Locator; 
    lastName: Locator; 
    dateOfBirth: Locator;
    maleCheckbox: Locator;
    сontinueBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstName = page.locator("css=#firstName");
        this.middleName = page.locator("css=#middleName");
        this.lastName = page.locator("css=#lastName");
        this.dateOfBirth = page.locator("xpath=//input[contains(@class, 'MuiInputBase-input')]");
        this.maleCheckbox = page.locator("css=#gender-radio-1");
        this.сontinueBtn = page.locator("xpath=//span[contains(@class, 'relative')]");
     }


}