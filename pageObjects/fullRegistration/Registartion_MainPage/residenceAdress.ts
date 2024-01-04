import { Page, Locator }  from "@playwright/test";

export class ResidenceAdress {
    page: Page;
    city: Locator;
    street: Locator;
    zip: Locator;
    continueBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.city = page.locator("css=#city");
        this.street = page.locator("css=#streetName");
        this.zip = page.locator("css=#zip");
        this.continueBtn = page.locator("css=[type='submit']");
    }
}