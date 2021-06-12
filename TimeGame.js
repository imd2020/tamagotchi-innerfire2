import Screen from "./Screen";
import Button from "./Button";

state = "timeGame";
class TimeGame {
    constructor(){
        this.counter = 0;
        this.x = 50;
        this.y = 50;
        this.movement = 5;
    }

    isButtonKlickedOnTime(){
        counter++;

    }

    animationBasedOnCounter(){
        push();
        fill(0);
        rect (this.x,this.y, 70, 70);
        this.x += this.movement;
        pop();

        //food animation
        if (this.x === 300 || this.x === 50){
            this.movement = -this.movement;
        }
        

    }

    winOrLose(){

    }
}

let test = new Screen();
let firstGame = new TimeGame();
let foodButton = new Button(150, 320, 100, 50);

function draw(){
    test.display();
    firstGame.animationBasedOnCounter();
    foodButton.display();
}