export default class Hearts {
    constructor(){
        this.hearts = 0;
        this.heartsX = 0;
        this.fullHeart = loadImage("assets/fullHeart.png");
    }

    display(){

        for (this.heartsX = 0; this.heartsX < 40 * 5; this.heartsX += 40){
            image (this.fullHeart, 180 + this.heartsX, 20, 40, 40);
        
             }
    }

    addingHearts(){
        if (gameOne.winning()){
            this.hearts++;
        }
        

    }

    destroyingHearts(){
        if (TimeGame.noMoreLifePoints()){
        this.hearts--;
        }
    }

}