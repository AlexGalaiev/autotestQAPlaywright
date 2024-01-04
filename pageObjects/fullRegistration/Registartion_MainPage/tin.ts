import { Page, Locator } from "@playwright/test";

export class tinPage {
    page: Page;
    iDontHaveTin: Locator;
    tinAbsentReason: Locator;
    noTinAnswer: Locator;

    constructor(page: Page){
        this.page = page;
        this.iDontHaveTin = page.locator("css=#tinNumber");
        this.tinAbsentReason = page.locator("xpath=//button[contains(@id, 'headlessui-menu-button-:rc:')]");
        this.noTinAnswer = page.locator("xpath=//a[contains(@id, 'headlessui-menu-item-:rj:')]");


    }
}