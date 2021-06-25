import Button from "./Button.js";
import Hearts from "./Hearts.js";
import TimeGame from "./TimeGame.js";
import Time from "./Time.js";

//images
let startScreen = loadImage("assets/startScreen.png");
let mainScreen = loadImage("assets/mainScreen.png");
let explanation = loadImage("assets/explanation.png");
let timeGame = loadImage("assets/timeGame.png");
let winScreen = loadImage("assets/winScreen.png");
let loseScreen = loadImage("assets/loseScreen.png");
let evolvingMessage = loadImage("assets/evolvingMessage.png");
let umbreon = loadImage("assets/umbreon.png");
let espeon = loadImage("assets/espeon.png");
  
 
//buttons
let startButton = new Button (160, 330, 125, 38);    
let timeGameButton = new Button (30, 258, 108, 98);
let questionButton = new Button (18, 16, 49, 50);
let backButton = new Button (164, 341, 80, 32);
let continueButton = new Button (130, 325, 159, 35);
let evolvingButton = new Button (137, 253, 159, 35);
let restartButton = new Button (147, 342, 122, 28);

let state = "start"; 

//objects
let gameOne = new TimeGame();
let friendship = new Hearts();
let dayOrNight = new Time();


function display(){

    //start
    if (state === "start"){

        image (startScreen, 0, 0, 400, 400);
        }

    //main
    if (state === "main"){

        image (mainScreen, 0, 0, 400, 400);
        friendship.display(); 
        gameOne.resetWhenWinning();   
        }

    //explanation
    if (state === "explanation"){

        image (explanation, 0, 0, 400, 400);

    }

    //timeGame
    if (state === "timeGame"){
        
        image (timeGame, 0, 0, 400, 400);
        gameOne.display();
        gameOne.resetWhenLosing();
            
        //changing state and amount of hearts
        if (gameOne.winning()){
        state = "winScreen";
        friendship.addingHearts();

        } else if (gameOne.noMoreLifePoints()){
        state = "loseScreen";
        friendship.destroyingHearts();
            }
        }

    //winScreen and loseScreen
    if (state === "winScreen"){
        
        image (winScreen, 0, 0, 400, 400);
        }

    if (state === "loseScreen"){
        
        image (loseScreen, 0, 0, 400, 400);
        }

    //evolving
    if (friendship.heartsFull() && state === "main" ){

        state = "evolving";
        }

    if (state === "evolving"){
            
        image (evolvingMessage, 0, 0, 400, 400);
        }
  
    if (state === "evolved"){

        if(dayOrNight.dayTime()){

            image (espeon, 0, 0, 400, 400);
        } else {

            image (umbreon, 0, 0, 400, 400);
            } 
        }  
    }

function mouseClicked() {

    if (state === "start"){
            
        if (startButton.hitTest()){
            state = "main";
        }
    }

    if (state === "main"){

        if (timeGameButton.hitTest()){ 
            state = "timeGame";
        }

        if (questionButton.hitTest()){
            state = "explanation";
        }
    }

    if (state === "explanation"){

        if(backButton.hitTest()){
            state = "main";
        }
    }

    if (state === "timeGame"){

        gameOne.button();
    }

    if (state === "winScreen" || state === "loseScreen"){

        if (continueButton.hitTest()){
            state = "main";
            }
        }

    if (state === "evolving"){
    
        if (evolvingButton.hitTest()){
            state = "evolved";
            }
        }

    if (state === "evolved"){

        if (restartButton.hitTest()){

            state = "start";
            friendship.hearts = 0;
            }
        }  
}

function draw() {
    clear();
    display();
}

gameOne.bagAnimation();

window.mouseClicked = mouseClicked;
window.draw = draw;
