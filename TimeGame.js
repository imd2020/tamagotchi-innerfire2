import Screen from "./Screen";
import Button from "./Button";

state = "timeGame";
class TimeGame {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.buttonState = "";
        this.foodBagMovement = 5;
        this.foodMovement = 5;
    }

    animationBasedOnCounter(){

        //foodbag
        push();
        fill(0);
        rect (this.x,this.y, 70, 70);
        this.x += this.foodBagMovement;
        pop();

        //foodbag animation
        if (this.x === 300 || this.x === 50){
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
    }

    winOrLose(){
        if (this.buttonState === "clicked" && this.x >= 140 && this.x <= 190){
            console.log("won");
        } else {
            console.log("lost");
        }
    }
}

let test = new Screen();
let firstGame = new TimeGame();
let foodButton = new Button(150, 320, 100, 50);

function draw(){
    test.display();
    firstGame.animationBasedOnCounter();
    firstGame.winOrLose();
    foodButton.display();
    
}