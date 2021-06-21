export default class Time {
    constructor (){
        this.date = new Date();
        this.hour = this.date.getHours();
    }

    dayTime(){

        if (this.date.getHours() >= 6 && this.date.getHours() <= 18){
            return true;
        } else {
            return false;
        }
    }
}