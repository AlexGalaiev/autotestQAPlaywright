import { Page, Locator, expect } from "@playwright/test";
import * as fs from 'fs';



export class QuizAnswer {
    private jsonObj: any;

    constructor(registrationJson: string) {
        let jsonObj = JSON.parse(registrationJson);
    }

    async getDataFromJson(key: string) {
        return this.jsonObj[key].answer
    }
}
