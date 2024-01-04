import moment from 'moment';

export class RandomUser {
    
    public getRandomUserEmail() {
        let momentTime = moment()
        let randomUser = "test_user"+momentTime.format('DD-MM-YYYY_HH_mm_ss'+"@i.ua")
        return randomUser;
    } 

}