import Button from "./Button.js";
import Hearts from "./Hearts.js";
import TimeGame from "./TimeGame.js";
import Time from "./Time.js";

class Screen {
    constructor (){
        this.state = "start"; 

        //images
        this.startScreen = loadImage("assets/startScreen.png");
        this.mainScreen = loadImage("assets/mainScreen.png");
        this.timeGame = loadImage("assets/timeGame.png");
        this.winScreen = loadImage("assets/winScreen.png");
        this.loseScreen = loadImage("assets/loseScreen.png");
        this.evolvingMessage = loadImage("assets/evolvingMessage.png");
        this.umbreon = loadImage("assets/umbreon.png");
        this.espeon = loadImage("assets/espeon.png");

        //objects
        this.gameOne = new TimeGame();
        this.friendship = new Hearts();
        this.dayOrNight = new Time();

        //buttons
        this.timeGameButton = new Button(30, 258, 108, 98);
        this.continueButton = new Button(130, 325, 159, 35);
        this.startButton = new Button (160, 330, 125, 38);
        this.evolvingButton = new Button (137, 253, 159, 35);
        this.restartButton = new Button (147, 342, 122, 28);
    }

    display(){

        //start
        if (this.state === "start"){
            image (this.startScreen, 0, 0, 400, 400);
            
            if (this.startButton.hitTest() && mouseIsPressed){
                this.state = "main";
            }
        }
        
        //main
        if (this.state === "main"){
            image (this.mainScreen, 0, 0, 400, 400);
            this.friendship.display(); 

            if (this.timeGameButton.hitTest() && mouseIsPressed){ 
                this.state = "timeGame";
            }

            this.gameOne.resetWhenWinning();   
        } 

        //timeGame
        if (this.state === "timeGame"){
            image (this.timeGame, 0, 0, 400, 400);
            this.gameOne.display();
            this.gameOne.resetWhenLosing();
            
            //changing state and amount of hearts
            if (this.gameOne.winning()){
            this.state = "winScreen";
            this.friendship.addingHearts();

            } else if (this.gameOne.noMoreLifePoints()){
            this.state = "loseScreen";
            this.friendship.destroyingHearts();
            }
        }

        //winScreen and loseScreen
        if (this.state === "winScreen"){
            image (this.winScreen, 0, 0, 400, 400);

            if (this.continueButton.hitTest() && mouseIsPressed){
                this.state = "main";
            }
        }

        if (this.state === "loseScreen"){
            image (this.loseScreen, 0, 0, 400, 400);

            if (this.continueButton.hitTest() && mouseIsPressed){
                this.state = "main";
            }
        }

        //evolving
        if (this.friendship.heartsFull() && this.state === "main" ){

            this.state = "evolving";
             

        }

        if (this.state === "evolving"){
            
            image (this.evolvingMessage, 0, 0, 400, 400);
        }

        if (this.evolvingButton.hitTest() && mouseIsPressed){
                this.state = "evolved";
            }
        
        if (this.state === "evolved"){

           if(this.dayOrNight.dayTime()){
                image (this.espeon, 0, 0, 400, 400);
            } else {
                image (this.umbreon, 0, 0, 400, 400);
            } 

            if (this.restartButton.hitTest() && mouseIsPressed && this.state === "evolved"){

                this.state = "start";
                this.friendship.hearts = 0;
            }
        }  
    }
}


let background = new Screen();

function draw () {
    clear();
    background.display();

    console.log(background.state);

}

window.draw = draw;