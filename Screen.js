let state = "main";
import Button from "./Button";

export class Screen {
    constructor (){
        this.startScreen = loadImage("assets/startScreen.png");
        this.mainScreen = loadImage("assets/startScreen.png");
        this.timeGame = loadImage("assets/timeGame.png");
    }

    display(){
        if (state === "main"){
            image (this.mainScreen, 0, 0, 400, 400);    
        } else if (state === "start"){
            image (this.startScreen, 0, 0, 400, 400);
        } else if (state === "timeGame"){
            image (this.timeGame, 0, 0, 400, 400);
            rect (150, 320, 100, 50);
        }
    }
}