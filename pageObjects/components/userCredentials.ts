import moment from 'moment';

export class RandomUser {
    
    public getRandomUserEmail() {
        let momentTime = new Date();
        let randomUser = `user_${momentTime.getTime()}@gmail.com`;
        return randomUser;
    } 

}