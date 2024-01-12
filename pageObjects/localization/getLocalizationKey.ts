import {Page, Locator} from "@playwright/test";
import * as fs from 'fs';

interface quizLocalizationKey {
    nameOfPage: {
        answer: string
    };
}
export class GetDataFromLocaliztion {
    private jsonObj: any;

    constructor(registrationJson: string) {
        let fileContents = fs.readFileSync(registrationJson, 'utf-8');
        this.jsonObj = JSON.parse(fileContents);
    }
    
    async getDataFromJson(nameOfthePage: string | number) {
        let result = await this.jsonObj[nameOfthePage];
        let answer_result = await result.answer;
        return answer_result;
    }
}

const localizationLanguage = {
    Eng: "pageObjects\\localization\\localization_en.json"
}

export class GetLocalizationText {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async getLocalizationText(elementToGet: string, language) {
        let json = new GetDataFromLocaliztion(localizationLanguage[language]);
        return json.getDataFromJson(elementToGet);
    }
}