import Button from "./Button.js";
export default class TimeGame {
    constructor(){
        //states
        this.buttonState = "";

        //position of food and foodbag
        this.x = 50;
        this.y = 50;
        
        //animation variables
        this.foodBagMovement = 5;
        this.foodMovement = 5;
        
        //lifePoint variables
        this.lifePoints = 3;
        this.lifePointY = 0;

        //images
        this.foodBowlForeground = loadImage ("assets/foodBowlForeground.png");
        this.foodBowlBackground = loadImage ("assets/foodBowlBackground.png");
        this.foodBag = loadImage ("assets/foodBag.png");
        this.food = loadImage ("assets/food.png");
        this.lifePoint = loadImage ("assets/lifePoint.png");

        //objects
        this.foodButton = new Button(150, 320, 100, 50);
    }

    display(){

        //foodbag
        image (this.foodBag, this.x,this.y, 70, 70);
        this.x += this.foodBagMovement;

        //foodbag animation
        if (this.x === 280 || this.x === 50){
            this.foodBagMovement = -this.foodBagMovement;
        }

        //animation
        if (this.foodButton.hitTest() && mouseIsPressed){
            this.foodBagMovement = 0;
            this.buttonState = "clicked";
        } 

        //foodBowl Background

        image (this.foodBowlBackground, 150, 320, 100, 50);
        
        //food
        if (this.buttonState === "clicked" && this.foodMovement <= 270){
            image (this.food, this.x +10, this.y + this.foodMovement, 50, 50);

            this.foodMovement+= 5;
        }

        //foodbowl Foreground
        image (this.foodBowlForeground, 150, 320, 100, 50);

        //lifePoints
        for (this.lifePointY = 0; this.lifePointY < this.lifePoints * 30; this.lifePointY+=30){
            image (this.lifePoint, 320, 250 + this.lifePointY, 30, 30);
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

    resetWhenLosing (){
        if (this.winning() === false && this.foodMovement >= 270){
            this.foodMovement = 5;
            this.foodBagMovement = 5;
            this.buttonState = "";
            this.lifePoints -= 1;
        }
    }

    resetWhenWinning(){
           //states
           this.buttonState = "";

           //position of food and foodbag
           this.x = 50;
           this.y = 50;
           
           //animation variables
           this.foodBagMovement = 5;
           this.foodMovement = 5;
           
           //lifePoint variables
           this.lifePoints = 3;
           this.lifePointY = 0;
    }
}