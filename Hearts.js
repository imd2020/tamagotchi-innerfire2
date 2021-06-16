export default class Hearts {
    constructor(){
        this.hearts = 0;
        this.heartsX = 0;
    }

    display(){

        for (this.heartsX = 0; this.heartsX < 40 * 5; this.heartsX += 40){
            rect (40 + this.heartsX, 40, 40, 40);
        
             }
    }

    addingHearts(){
        if (TimeGame.winning()){
            this.hearts++;
        }
        

    }

    destroyingHearts(){
        if (TimeGame.noMoreLifePoints()){
        this.hearts--;
        }
    }

}