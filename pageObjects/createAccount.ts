import { Locator, Page, expect } from "@playwright/test";
import { RandomUser } from "../pageObjects/components/userCredentials";



export class ShortRegistrationPage {
    page: Page;
    readonly getUserEmail: Locator;
    readonly getUserPassword: Locator;
    readonly getUserPhoneNumber: Locator;
    readonly getUserPromoCode: Locator;
    readonly getUserAccountType: Locator;
    readonly createAccountBt: Locator;

    constructor(page: Page){
        this.page = page;
        this.getUserEmail = page.locator("css=#email");
        this.getUserPassword = page.locator("css=#password");
        this.getUserPhoneNumber = page.locator("css=#mobile");
        this.getUserPromoCode = page.locator("css=#promoCode");
        this.getUserAccountType = page.locator("css=#trade");
        this.createAccountBt = page.locator("xpath=//button[@type='submit']")
    }
    
    async goto(){
        await this.page.goto('https://staging-account.capex.com/en/register', {waitUntil:"load"})
        expect(this.getUserEmail).toBeVisible;
    }
    
    async createCFDUser(){
        let User = new RandomUser();
        await this.getUserEmail.pressSequentially(User.getRandomUserEmail());
        await this.getUserPassword.pressSequentially("Test123!");
        await this.getUserPhoneNumber.pressSequentially("509090907");
        await this.getUserPromoCode.pressSequentially('test');
        await this.createAccountBt.click(); 
    }
}