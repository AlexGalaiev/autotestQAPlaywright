import * as fs from 'fs';

interface quizAnswwer {
    questionShortname: {
        answer : string
    };
}

export class QuizAnswer {
    private jsonObj: any;
    

    constructor(registrationJson: string) {
        let fileContents = fs.readFileSync(registrationJson, 'utf-8');
        this.jsonObj = JSON.parse(fileContents);
    }

    async getDataFromJson(questionShortname) {
        let result = await this.jsonObj[questionShortname];
        let answer_result = await result.answer;
        return answer_result ;
    }
}
