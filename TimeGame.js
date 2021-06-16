export default class TimeGame {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.buttonState = "";
        this.foodBagMovement = 5;
        this.foodMovement = 5;
        this.game = "";
        this.lifePoints = 3;
        this.lifePointY = 0;
    }

    display(){

        //foodbag
        push();
        fill(0);
        rect (this.x,this.y, 70, 70);
        this.x += this.foodBagMovement;
        pop();

        //foodbag animation
        if (this.x === 280 || this.x === 50){
            this.foodBagMovement = -this.foodBagMovement;
        }

        //food
        if (this.buttonState === "clicked" && this.foodMovement <= 270){
             push();
            fill(200, 0, 0);
            rect(this.x +10, this.y + this.foodMovement, 50, 50);
            pop();

            this.foodMovement+= 5;
        }

        //animation
        if (foodButton.hitTest && mouseIsPressed){
            this.foodBagMovement = 0;
            this.buttonState = "clicked";
        }

        //foodbowl
        rect (150, 320, 100, 50);

        //lifePoints
        for (this.lifePointY = 0; this.lifePointY < this.lifePoints * 30; this.lifePointY+=30){
            rect (320, 250 + this.lifePointY, 30, 30);
             }
            
    }

    winning(){
        if (this.buttonState === "clicked"){

            if (this.x >= 140 && this.x <= 190 && this.foodMovement >= 270){
                return true;
            } else {
                return false;
            }
        }
    }

    noMoreLifePoints(){
        if (this.lifePoints === -1) {
            return true;
        }
    }

    reset (){
        if (this.winning() === false && this.foodMovement >= 270){
            this.foodMovement = 5;
            this.foodBagMovement = 5;
            this.buttonState = "";
            this.lifePoints -= 1;
            console.log(this.lifePoints);
        }
    }
}